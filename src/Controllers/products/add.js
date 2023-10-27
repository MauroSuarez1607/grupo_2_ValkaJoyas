// const { readJSON, writeJSON } = require('../../data');
const db = require("../../database/models");


// module.exports = (req, res) => {
//     return res.render('productAdd')
// }

module.exports = (req, res) => {
    // SPRINT 6 parte final
    const metals = db.Metal.findAll({
      order: ["name"],
    });
      
  
    Promise.all([metals])
      .then(([metals]) => {
        return res.render("productAdd", {
          metals,
        });
      })
      .catch((error) => console.log(error));
    }
