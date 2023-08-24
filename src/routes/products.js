const express = require('express');
const router = express.Router();

const {add,create} = require('../Controllers/productsController');

/* /products */
router
    // .get('/detail', detail)
    // .get('/cart', cart)
    .get('/add',add)
    // .get('/edit', edit)
    .post('/add',create)
    // .get('/add',add)


module.exports = router;









// router.get('/detail/:id', detail);
    // router.get('/cart', cart)
// Ruta GET para agregar un producto
// router.get('/add', add);
// router.post('/add', create); //crea los cambios luego de agregar el producto
// /* router.post('/add', upload.single('image'), create) */
// /* router.delete('/delete/:id'); */
// // router.get('/edit/:id' , edit);
// // router.put('/update/:id'); //actualiza luego de editar el producto

// // Ruta GET para editar un producto
// // router.get('/edit', edit);

// module.exports = router;