module.exports = {
  detail: (req, res) => {
    return res.render('productDetail');
  },
  cart: (req, res) => {
    return res.render('productCart');
  },
  add:(req,res) =>{
    return res.render('productAdd')
  },
  edit:(req,res) =>{
    return res.render('productEdit')
  }

};
