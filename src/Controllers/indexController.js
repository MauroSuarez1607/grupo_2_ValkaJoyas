const db = require('../database/models');
const { Op } = require('sequelize');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index : (req,res) =>{
        
        const valka = db.Product.findAll({
            where: {
                brandId: 1
            },
            include: {
                model: db.Category,
                as: 'category', // Alias configurado en el modelo
                attributes: ['name']
            },
        });
        
        const novedades = db.Product.findAll({
            where: {
                brandId: 2
            },
            include: {
                model: db.Category,
                as: 'category', // Alias configurado en el modelo
                attributes: ['name']
            }
        })
        
        Promise.all([valka, novedades])
        
            .then(([valkaResults, novedadesResults]) => {
                console.log('Novedades:', novedadesResults);
                return res.render('index', {
                    valka: valkaResults,
                    novedades: novedadesResults,
                    toThousand
                });
            })
            .catch(error => console.log(error));
        
        
    },

    admin : (req,res)=>{
        // lineas para recargar automaticamente el navegador
        /* const seeadmin = path.join(__dirname,'../data/products.json');
        const products = JSON.parse(readFileSync(seeadmin, 'utf-8'));
        return res.render('admin',{
            products
        }) */
        const products = db.Product.findAll({
            include : ['brand','price','images']
        });
        const brands = db.Brand.findAll({
            order : ['name']
        })

        Promise.all([products, brands])
            .then(([ products, brands]) => {
                return res.render('admin', {
                    products,
                    brands
                })
            })
            .catch(error => console.log(error))
      
    },
    search: async (req, res) => {
        const keywords = req.query.keywords;
    
        try {
            const results = await db.Product.findAll({
                where: {
                    [Op.or]: [
                        {
                            name: {
                                [Op.substring]: keywords
                            }
                        }
                    ]
                }
            });
    
            // Obtener productos para el slider
            const productsForSlider = await db.Product.findAll({
                where: {
                    // Define la condición para los productos del slider
                },
                order: db.sequelize.random() 
            });
    
            return res.render('results', {
                results,
                productsForSlider,  // Pasar productos para el slider
                toThousand,
                keywords,
                products: results
            });
        } catch (error) {
            console.log(error);
        }
    },
    
    
	
    category: (req, res) => {
        /* const category = req.params.category;
        let filteredProducts = products;


        if (category !== 'todos') {
            filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
        }

        return res.render('category', {
            products,
            filteredProducts,
            category,
            toThousand
        }); */
    }

}


