
const db = require('../../database/models')

module.exports = (req,res) => {

  db.Product.destroy({
    where : {
      id: req.params.id
    }
  }).then(response=>{
    console.log(response);
    return res.redirect('/admin')
  })
  .catch(error=> console.log(error))
}

