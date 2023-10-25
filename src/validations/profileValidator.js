const {check} = require('express-validator')

module.exports = [
    check('name')
        .isLength({
            min: 2
        })
        .withMessage('Debe tener como minimo dos letras')
        .bail()
        .isAlpha('es-ES', {ignore: ' '})
        .withMessage('Solo se permiten caracteres alfabeticos'),
    check('surname')
        .isLength({
            min: 2
        })
        .withMessage('Debe tener como minimo dos letras')
        .bail()
        .isAlpha('es-ES', {ignore: ' '})
        .withMessage('Solo se permiten caracteres alfabeticos')
]