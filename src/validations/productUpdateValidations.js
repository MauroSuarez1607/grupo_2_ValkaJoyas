// sprint 7
const {check, body} = require('express-validator');

// Se podria hacer un formulario de actualizacion de productos donde algunos campos esten fijos (no sean input, sino label con la informacion de la base de datos)
// Con esto se podria disminuir la cantidad de validaciones y solo modificar los datos importantes.

// Aclaro: ahora si uso las mismas validaciones que Form de CrearProducto porque es similar a Form de ActProduct

module.exports = [
    check('name').notEmpty().withMessage('El nombre del producto es obligatorio')
    .isLength({
        min : 3,
        max : 50,
    }).withMessage('La descripción debe tener entre 3 y 50 caracteres'),
    check('description')
    .notEmpty().withMessage('La descripción es requerida').bail()
    .isLength({
        min : 20,
        max : 500
    }).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
    check('collection')
        .notEmpty().withMessage('La colección es requerida')
        .isLength({
            min : 3,
            max : 15,
        }).withMessage('La descripción debe tener entre 3 y 15 caracteres'),
        
    check('stones')
        .notEmpty().withMessage('Debes indicar el número de piedras').bail()
        .isInt({ min: 0 }).withMessage('El número de piedras debe ser un entero positivo o 0'),

    check('size')
        .notEmpty().withMessage('Debes indicar el tamaño').bail(),
    check('measures_mm')
        .notEmpty().withMessage('Debes indicar la medida en mm').bail()
        .isInt({ min: 0 }).withMessage('La medida debe ser un número entero positivo o 0'),

    check('warranty')
        .notEmpty().withMessage('Elige alguna opción').bail()
        .isBoolean().withMessage('El valor de garantía no corresponde'),
    check('jewel_keeper')
        .notEmpty().withMessage('Elige alguna opción').bail()
        .isBoolean().withMessage('El valor de garantía no corresponde'),

    check('price')
        .notEmpty().withMessage('Debes indicar el precio').bail()
        .isDecimal().withMessage('El precio debe ser un número'),
// problema, numeros con coma "," no valen si con "."  
    check('discount')
        .notEmpty().withMessage('Debes indicar el descuento').bail()
        .isDecimal({ decimal_digits: '1,2' }).withMessage('El % descuento debe ser un número decimal positivo o cero')
        .custom(value => {
            if (parseFloat(value.replace(',', '.')) < 0) {
                throw new Error('El % descuento debe ser un número decimal positivo o cero');
            }
            return true;
        }),
        
// problema, numeros con coma "," no valen si con "." 
    check('stock')
        .notEmpty().withMessage('Debes indicar la cantidad de stock').bail()
        .isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo o 0'),

    body('image1')
        .custom((value, {req}) => {
           if(req.files.image1){
                return true
           }
           return false
        }).withMessage('No has subido ninguna imagen')
]

// falta validacion limitando la cantidad de imagenes secundarias a poner