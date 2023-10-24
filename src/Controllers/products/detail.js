const db = require('../../database/models');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = async (req, res) => {
    try {
        const product = await db.Product.findByPk(req.params.id, {
            include: [
                {
                    model: db.Design,
                    as: 'design', // Alias configurado en el modelo
                    attributes: ['name']
                },
                {
                    model: db.Brand,
                    as: 'brand', // Alias configurado en el modelo
                    attributes: ['name']
                },
                {
                    model: db.Metal,
                    as: 'metal', // Alias configurado en el modelo
                    attributes: ['name']
                }
            ]
        });

        // Obtener productos para el slider
        const productsForSlider = await db.Product.findAll({
            where: {
                // Define la condición para los productos del slider
            },
            include: [
                {
                    model: db.Category,
                    as: 'category', // Alias configurado en el modelo
                    attributes: ['name']
                }
            ],
            order: db.sequelize.random()
        });

        return res.render('detail', {
            productsForSlider,
            product,
            toThousand
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error en la consulta de la base de datos');
    }
}
