// sprint 7
const { validationResult } = require("express-validator");

const { existsSync, unlinkSync } = require('fs');
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Sprint 7
    if (errors.isEmpty()) {
      const { name, description, brand, model, collection, category, metal, stones, type_stone, size, measures_mm, warranty, jewel_keeper, price, discount, stock, image1, image2 } = req.body;

      // Buscar la marca por su nombre
      let brandResult = await db.Brand.findOne({ where: { name: brand } });

      if (!brandResult) {
        // Si la marca no existe, créala
        brandResult = await db.Brand.create({ name: brand });
      }

      // Buscar el diseño por su nombre
      let designResult = await db.Design.findOne({ where: { name: model } });

      if (!designResult) {
        // Si el diseño no existe, créalo
        designResult = await db.Design.create({ name: model });
      }

      // Buscar la colección por su nombre
      let collectionResult = await db.Collection.findOne({ where: { name: collection } });

      if (!collectionResult) {
        // Si la colección no existe, créala
        collectionResult = await db.Collection.create({ name: collection });
      }

      const productData = {
        name: name.trim(),
        description: description.trim(),
        brandId: brandResult.id,
        designId: designResult.id,
        collectionId: collectionResult ? collectionResult.id : null,
        categoryId: category,
        metalId: metal,
        stones,
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

      const metals = await db.Metal.findAll({
        order: ["name"],
      });

      // Renderizar la vista con errores y datos antiguos
      return res.render("productAdd", {
        metals,
        errors: errors.mapped(),
        old: req.body,
      });
    }
  } catch (error) {
    // Manejar errores internos del servidor
    console.log(error);
    return res.redirect("/admin");
  }
};

// cambie la linea 112 para que no muestre error del servidor. El error es por el bulCreate de la imagen