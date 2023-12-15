// const { readJSON, writeJSON } = require('../../data');
const db = require("../../database/models");


// module.exports = (req, res) => {
//     return res.render('productAdd')
// }

module.exports = (req, res) => {
    // SPRINT 6 parte final
    const metals = db.Metal.findAll({
      order: ["name"],
    });
    const brands = db.Brand.findAll({
      order : ["name"]
    });
    const categories = db.Category.findAll({
      order : ["name"]
    });
    const collections = db.Collection.findAll({
      order : ["name"]
    });
    const designs = db.Design.findAll({
      order : ["name"]
    });

    const types = db.Type_stone.findAll({
      order : ["name"]
    })
  
  
    Promise.all([metals, brands, categories, collections, designs, types])
      .then(([metals, brands, categories, collections, designs, types]) => {
        return res.render("productAdd", {
          metals,
          brands,
          categories,
          collections,
          designs,
          types
        });
      })
      .catch((error) => console.log(error));
    }
