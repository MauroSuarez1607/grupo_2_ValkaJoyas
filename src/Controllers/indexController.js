const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index : (req,res) =>{

        const valka = db.Product.findAll({
			where:{
				brandId: 1
			}
		});
		const novedades = db.Product.findAll({
			where:{
				brandId: 2
			}
		});
		Promise.all([valka,novedades])
			.then(([valka,novedades])=>{
				
				return res.render('index',{
					valka,
					novedades,
					toThousand
				})
			}).catch(error => console.log(error))
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
    search: (req, res) => {
		/* const keywords = req.query.keywords
		const results = products.filter(product=> product.name.toLowerCase().includes(keywords.toLowerCase()))
		return res.render('results',{
			results,
			toThousand,
			keywords,
            products
		}) */

        const keywords = req.query.keywords

		db.Product.findAll({
			where:{
				[Op.or]:[
					{
						name:{
							[Op.substring]: keywords
						}
					}

				]
			}
		})	
			.then(results=>{
				return res.render('results',{
					results,
					toThousand,
					keywords
				})
			})
			.catch(error => console.log(error))
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


