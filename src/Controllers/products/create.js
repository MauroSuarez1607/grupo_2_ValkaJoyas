// sprint 7
const { validationResult } = require("express-validator");

const { existsSync, unlinkSync } = require('fs');
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req);
    console.log(req.body);
    // Sprint 7
    if (errors.isEmpty()) {
      const { name, description, countStones, brand, model, collection, category, metal, stones, size, measures_mm, warranty, jewel_keeper, price, discount, stock} = req.body;

      const productData = {
        name: name.trim(),
        description: description.trim(),
        brandId: brand,
        designId: model,
        collectionId: collection,
        categoryId: category,
        metalId: metal,
        stones : countStones,
        type_stoneId: type_stone,
        size: size.trim(),
        measures_mm,
        warranty: warranty === "true" ? 1 : 0,
        jewel_keeper: jewel_keeper === "true" ? 1 : 0,
        price,
        discount: discount || 0,
        stock,
        image1: req.files && req.files.image1 && req.files.image1.length > 0 ? req.files.image1[0].filename : null,
        image2: req.files && req.files.image2 ? req.files.image2.map((image) => image.filename).join(", ") : null,
      };

      // Crear el producto
      const product = await db.Product.create(productData);

      // Procesar imágenes
      if (req.files.image1) {
        const image1 = req.files.image1.map((file) => {
          return {
            file: file.filename,
            main: false,
            productId: product.id,
          };
        });

        await db.Image.bulkCreate(image1, {
          validate: true,
        });

        // Eliminar archivos de imágenes si es necesario
        if (req.files.length) {
          req.files.forEach((file) => {
            existsSync("./public/images/" + file.filename) && unlinkSync("./public/images/" + file.filename);
          });
        }

        // Redirigir después de un exitoso proceso
        return res.redirect("/admin");
      } else {
        // Redirigir después de un exitoso proceso
        return res.redirect("/admin");
      }
    } else {
      // Eliminar archivos de imágenes si es necesario
      if (req.files.length) {
        req.files.forEach((file) => {
          existsSync("./public/images/" + file.filename) && unlinkSync("./public/images/" + file.filename);
        });
      }

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
    // Renderizar la vista con errores y datos antiguos
    return res.render("productAdd", {
      metals,
      brands,
      categories,
      collections,
      designs,
      types,
      errors: errors.mapped(),
      old: req.body,
    });
      })

  
    }
  } catch (error) {
    // Manejar errores internos del servidor
    console.log(error);
    return res.redirect("/admin");
  }
};

// cambie la linea 112 para que no muestre error del servidor. El error es por el bulCreate de la imagen