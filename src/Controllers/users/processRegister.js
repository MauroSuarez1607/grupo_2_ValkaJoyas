const db = require('../../database/models');
const { validationResult } = require('express-validator');
const { hashSync } = require('bcryptjs');

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('register', {
        old: req.body,
        errors: errors.array(),
      });
    }

    const { name, surname, email, password } = req.body;
    const image = req.file ? req.file.filename : null;

    const user = await db.User.create({
      name: name.trim(),
      surname: surname.trim(),
      email: email.trim(),
      image,
      password: hashSync(password, 10),
      roleId: 2,
    });

    if (user) {
      return res.redirect('/');
    } else {
      // Manejo de errores si no se pudo crear el usuario
      return res.render('register', {
        old: req.body,
        errors: [{ msg: 'No se pudo crear el usuario.' }],
      });
    }
  } catch (error) {
    // Manejo de errores generales
    console.error(error);
    return res.status(500).send('Error interno del servidor');
  }
};
