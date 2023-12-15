// const { readJSON } = require("../../data");
// const Product = require('../../data/Product')

const db = require("../../database/models");

module.exports = (req, res) => {
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

  const product = db.Product.findByPk(req.params.id,{
    include : ['stones','images']
  })
    
  Promise.all([metals, brands, categories, collections, designs, types, product])
  .then(([metals, brands, categories, collections, designs, types, product]) => {
    const stonesArray = product.stones.map(stone => stone.id)
    console.log(product);
    return res.render("productEdit", {
      metals,
      brands,
      categories,
      collections,
      designs,
      types,
      stonesArray,
      ...product.dataValues
    });
  })
  .catch((error) => console.log(error));
}

