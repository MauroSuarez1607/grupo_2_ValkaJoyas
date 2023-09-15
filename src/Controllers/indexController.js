const products = require('../data/products.json')

// lineas para actualizar automaticamente sin recargar navegador
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index : (req,res) =>{
        return res.render('index',{
            products,
            toThousand
        })
    },
    admin : (req,res)=>{
        // lineas para recargar automaticamente el navegador
        const seeadmin = path.join(__dirname,'../data/products.json');
        const products = JSON.parse(readFileSync(seeadmin, 'utf-8'));
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
	},
    category: (req, res) => {
        const category = req.params.category;
        let filteredProducts = products;


        if (category !== 'todos') {
            filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
        }
        

        return res.render('category', {
            products,
            filteredProducts,
            category,
            toThousand
        });
    }

}


