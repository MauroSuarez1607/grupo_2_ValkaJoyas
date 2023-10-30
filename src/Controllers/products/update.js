
const { unlinkSync, existsSync } = require("fs");
// const { readJSON, writeJSON } = require("../../data");
const db = require("../../database/models")

module.exports = (req, res) => {
  // const products = readJSON("products.json");
  const id = req.params.id;
  const { name, description, brandId, designId, collectionId, categoryId, metalId, stones, size, measures_mm, warranty, jewel_keeper, price, discount, stock, type_stoneId, } = req.body;
  // let {editStone} = req.body;

  // let editStoneEnd = JSON.parse(editStone);

  /* desde la base de datos trae el producto con el método findByPk(busca por id), eh incluye las "images" de la base de datos  */
  db.Product.findByPk(id, {
    include: ['images']
  })

  .then((product)=>{
    req.files.image &&/*si viene la imagen por req.files.image y es la misma que se encuentra en la carpeta públic, borrala*/
          existsSync(`./src/public/images/${product.image1}`) &&
          unlinkSync(`./src/public/images/${product.image1}`);

          db.Product.update(
{
  name: name.trim(),
  description: description.trim(),
  brandId: brandResult.id, // Asigna el ID de la marca al producto
  designId: designResult.id,
  collectionId: collectionResult ? collectionResult.id : null, // Asigna el ID de la colección si existe
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
    },
    // }
    {
      where:{
        id,/* actualiza el producto donde el id es coincidente   */
      },
    }
  ).then(()=>{
    if(req.files.images){
      product.images.forEach((image1) => {
        existsSync(`./src/public/images/${image1.file}`) &&
        unlinkSync(`./src/public/images/${image1.file}`);
  });
  db.Image.destroy({
    where: {
      productId:id,
    },
  }).then(()=>{
    const images = req.files.images.map((file)=>{ /* crea una constante con el los nombres(array) que llegan del imput(por el name="images") y los mapea, retornando un nuevo array con los datos reemplazados */
    return {
      file: file.filename,
      main: false,
      productId: product.id
    };
  });
  db.Image.bulkCreate(images,{
    validate: true, 
  }).then((response)=>{
  /*   return res.send(product) */
    return res.redirect("/admin")
  });
 });
}else{
/*   return res.send(product)  */
 return res.redirect("/admin");
}
 });
})
.catch((error)=> console.log(error));   
  };