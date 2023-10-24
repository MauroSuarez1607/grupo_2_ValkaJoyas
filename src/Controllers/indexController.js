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
    //FALTA ADMIN
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
                },
                include: {
                    model: db.Category,
                    as: 'category', // Alias configurado en el modelo
                    attributes: ['name']
                }
            }); 
    
            // Obtener productos para el slider
            const productsForSlider = await db.Product.findAll({
                where: {
                    // Define la condición para los productos del slider
                },
                include: {
                    model: db.Category,
                    as: 'category', // Alias configurado en el modelo
                    attributes: ['name']
                },
                order: db.sequelize.random(),
                
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
    
    
	
    category: async (req, res) => {
        
        const category = req.params.category;
    
        try {
            let filteredProducts;
    
            if (category === 'todos') {
                // Si la categoría es 'todos', obtén todos los productos
                filteredProducts = await db.Product.findAll({
                    include: {
                        model: db.Category,
                        as: 'category', // Alias configurado en el modelo
                        attributes: ['name']
                    },
                });
            } else {
                // Si la categoría no es 'todos', filtra por categoría
                filteredProducts = await db.Product.findAll({
                    where: {},
                    include: {
                        model: db.Category,
                        as: 'category',
                        attributes: ['name'],
                        where: {
                            name: category
                        }
                    }
                });
            }

             // Obtener productos para el slider
            const productsForSlider = await db.Product.findAll({
                where: {
                    // Define la condición para los productos del slider
                },
                include: {
                    model: db.Category,
                    as: 'category', // Alias configurado en el modelo
                    attributes: ['name']
                },
                order: db.sequelize.random() 
            });
    
            return res.render('category', {
                products: filteredProducts,
                productsForSlider,
                category,
                toThousand
            });

        } catch (error) {
            console.log(error);
            return res.status(500).send('Error en la consulta de la base de datos');
        }
    }

}


