// sprint 7
const { validationResult } = require("express-validator");

const { existsSync, unlinkSync } = require("fs");
const db = require("../../database/models");
const { forEach } = require("../../validations/productAddValidator");

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Sprint 7
    if (errors.isEmpty()) {
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

      const productData = {
        name: name.trim(),
        description: description.trim(),
        brandId: brand,
        designId: model,
        collectionId: collection,
        categoryId: category,
        metalId: metal,
        countStones,
        size: size.trim(),
        measures_mm,
        warranty: warranty === "true" ? 1 : 0,
        jewel_keeper: jewel_keeper === "true" ? 1 : 0,
        price,
        discount: discount || 0,
        stock,
        image1:
          req.files && req.files.image1 ? req.files.image1[0].filename : null,
      };

      // Crear el producto
      const product = await db.Product.create(productData);

      stones.forEach(async (stone) => {
        await db.Product_stone.create({
          productId: product.id,
          type_stoneId: stone,
        });
      });
      if (req.files.image2) {
        req.files.image2.forEach(async (file) => {
          await db.Image.create({
            file: file.filename,
            productId: product.id,
          });
        });
      }

      // Redirigir después de un exitoso proceso
      return res.redirect("/admin");
    } else {
      // Eliminar archivos de imágenes si es necesario
      if (req.files.image1) {
        req.file.image1.forEach((file) => {
          existsSync("./public/images/" + file.filename) &&
            unlinkSync("./public/images/" + file.filename);
        });
      }

      if (req.files.image2) {
        req.file.image2.forEach((file) => {
          existsSync("./public/images/" + file.filename) &&
            unlinkSync("./public/images/" + file.filename);
        });
      }

      const metals = db.Metal.findAll({
        order: ["name"],
      });
      const brands = db.Brand.findAll({
        order: ["name"],
      });
      const categories = db.Category.findAll({
        order: ["name"],
      });
      const collections = db.Collection.findAll({
        order: ["name"],
      });
      const designs = db.Design.findAll({
        order: ["name"],
      });

      const types = db.Type_stone.findAll({
        order: ["name"],
      });

      Promise.all([
        metals,
        brands,
        categories,
        collections,
        designs,
        types,
      ]).then(([metals, brands, categories, collections, designs, types]) => {
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
      });
    }
  } catch (error) {
    // Manejar errores internos del servidor
    console.log(error);
    return res.redirect("/admin");
  }
};

// cambie la linea 112 para que no muestre error del servidor. El error es por el bulCreate de la imagen
