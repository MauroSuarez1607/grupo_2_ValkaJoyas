const { validationResult } = require("express-validator");
const { unlinkSync, existsSync } = require("fs");
const db = require("../../database/models");

module.exports = async (req, res) => {
  const errors = validationResult(req);
  // Sprint 7
  if (errors.isEmpty()) {
    const id = req.params.id;
    const {
      name,
      description,
      countStones,
      brand,
      model,
      collection,
      category,
      metal,
      stones,
      size,
      measures_mm,
      warranty,
      jewel_keeper,
      price,
      discount,
      stock,
    } = req.body;


    const product = await db.Product.findByPk(req.params.id,{
      include: ['images']
    })   

        // Actualizar el producto en la base de datos
        
     db.Product.update(
          {
            name: name.trim(),
            description: description.trim(),
            collectionId :collection,
            categoryId: category,
            designId : model,
            metalId : metal,
            brandId : brand,
            countStones,
            size: size.trim(),
            measures_mm,
            warranty,
            jewel_keeper,
            price,
            discount: discount || 0,
            stock,
            image1: req.files.image1 ? req.files.image1[0].filename: product.image1,

          },
          {
            where: {
              id,
            },
          }
        ).then(() => {



          if (req.files.image1) {

            const imagePath = `./public/images/${product.image1}`;
            existsSync(imagePath) && unlinkSync(imagePath);

        }

        if (req.files.image2) {
          product.images.forEach((image) => {
            const imagePath = `./public/images/${image.file}`;
            existsSync(imagePath) && unlinkSync(imagePath);
          });
          const images = req.files.image2.map((file) => {
            return {
              file: file.filename,
              productId: req.params.id,
            };
          });

          db.Image.bulkCreate(images, {
            validate: true,
          });
          return res.redirect('/admin')
        }else {
          return res.redirect('/admin')

        }

        })
  
      .catch((error) => console.log(error));
  } else {
    // Manejar el caso en que hay errores en la validación
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
      return res.render("productEdit", {
        metals,
        brands,
        categories,
        collections,
        designs,
        types,
        stonesArray,
        ...product.dataValues,
        errrors : errors.mapped()
      });
    })
  }
};
