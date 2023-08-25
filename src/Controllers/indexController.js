const products = require('../data/products.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index : (req,res) =>{
        return res.render('index',{
            products,
            toThousand
        })
    },
    admin : (req,res)=>{
        return res.render('admin',{
            products
        })
    },
    search: (req, res) => {
		const keywords = req.query.keywords
		const results = products.filter(product=> product.name.toLowerCase().includes(keywords.toLowerCase()))
		return res.render('results',{
			results,
			toThousand,
			keywords,
            products
		})
	}
}