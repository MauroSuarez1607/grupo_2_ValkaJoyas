const { validationResult } = require("express-validator");
const { unlinkSync, existsSync } = require("fs");
const db = require("../../database/models");

module.exports = (req, res) => {
  const errors = validationResult(req);

  // Sprint 7
  if (errors.isEmpty()) {
    const id = req.params.id;
    const {
      name,
      description,
      // brand,
      // model,
      collection,
      categoryid,
      metalid,
      stones,
      size,
      measures_mm,
      warranty,
      jewel_keeper,
      price,
      discount,
      stock,
      type_stone,
    } = req.body;

    let collectionResult;

    // Buscar la colección por su nombre
    return db.Collection.findOne({ where: { name: collection } })
      .then((result) => {
        collectionResult = result;

        // Si la colección no existe, créala
        if (!collectionResult) {
          return db.Collection.create({ name: collection });
        }

        return collectionResult;
      })
      .then((createdCollection) => {
        collectionResult = createdCollection;

        // Buscar el producto por su ID
        return db.Product.findByPk(id);
      })
      .then((product) => {
        // Eliminar imágenes existentes si se proporcionan nuevas imágenes
        if (req.files && req.files.images) {
          product.images.forEach((image) => {
            const imagePath = `./src/public/images/${image.file}`;
            existsSync(imagePath) && unlinkSync(imagePath);
          });
        }

        // Actualizar el producto en la base de datos
        return db.Product.update(
          {
            name: name.trim(),
            description: description.trim(),
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
            image1:
              req.files && req.files.image1 && req.files.image1.length > 0
                ? req.files.image1[0].filename
                : null,
            image2:
              req.files && req.files.image2
                ? req.files.image2.map((image) => image.filename).join(", ")
                : null,
          },
          {
            where: {
              id,
            },
          }
        );
      })
      .then(() => {
        // Eliminar imágenes existentes de la base de datos
        if (req.files && req.files.images) {
          return db.Image.destroy({
            where: {
              productId: id,
            },
          });
        }
      })
      .then(() => {
        // Crear nuevas imágenes en la base de datos
        if (req.files && req.files.images) {
          const images = req.files.images.map((file) => {
            return {
              file: file.filename,
              main: false,
              productId: id,
            };
          });

          return db.Image.bulkCreate(images, {
            validate: true,
          });
        }
      })
      .then(() => {
        // Redirigir después de un exitoso proceso
        return res.redirect("/admin");
      })
      .catch((error) => console.log(error));
  } else {
    // Manejar el caso en que hay errores en la validación
    const product = db.Product.findByPk(req.params.id, {
      include: ["brand", "design", "collection"],
    });
    const metals = db.Metal.findAll({
      order: ["name"],
    });

    // Ejecutar ambas promesas en paralelo
    Promise.all([product, metals])
      .then(([product, metals]) => {
        const brandName = product.brand ? product.brand.name : null;
        const designName = product.design ? product.design.name : null;
        const collectionName = product.collection ? product.collection.name : null;

        res.render("productEdit", {
          product,
          metals,
          brandName,
          designName,
          collectionName,
          errors: errors.mapped(),
          old: req.body,
        });
      })
      .catch((error) => console.log(error));
  }
};
