const { validationResult } = require("express-validator");
const { unlinkSync, existsSync } = require("fs");
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Sprint 7
    if (errors.isEmpty()) {
      const id = req.params.id;
      const { name, description, brand, model, collection, categoryid, metalid, stones, size, measures_mm, warranty, jewel_keeper, price, discount, stock, type_stone } = req.body;

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

      // Buscar el producto por su ID
      const product = await db.Product.findByPk(id);

      // Eliminar imágenes existentes si se proporcionan nuevas imágenes
      if (req.files && req.files.images) {
        product.images.forEach((image) => {
          const imagePath = `./src/public/images/${image.file}`;
          existsSync(imagePath) && unlinkSync(imagePath);
        });
      }

      // Actualizar el producto en la base de datos
      await db.Product.update(
        {
          name: name.trim(),
          description: description.trim(),
          brandId: brandResult.id,
          designId: designResult.id,
          collectionId: collectionResult ? collectionResult.id : null,
          categoryId: categoryid,
          metalId: metalid,
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
        },
        {
          where: {
            id,
          },
        }
      );

      // Eliminar imágenes existentes de la base de datos
      if (req.files && req.files.images) {
        await db.Image.destroy({
          where: {
            productId: id,
          },
        });

        // Crear nuevas imágenes en la base de datos
        const images = req.files.images.map((file) => {
          return {
            file: file.filename,
            main: false,
            productId: id,
          };
        });

        await db.Image.bulkCreate(images, {
          validate: true,
        });
      }

      // Redirigir después de un exitoso proceso
      return res.redirect("/admin");
    } else {
      // Manejar el caso en que hay errores en la validación
      // Puedes hacer lo que necesites aquí, como renderizar nuevamente el formulario con mensajes de error
      console.log(errors.array());
      return res.status(400).render("productAdd", {
        metals: await db.Metal.findAll({
          order: ["name"],
        }),
        errors: errors.mapped(),
        old: req.body,
      });
    }
  } catch (error) {
    // Manejar errores internos del servidor
    console.error(error);
    return res.status(500).send("Error interno del servidor");
  }
};
