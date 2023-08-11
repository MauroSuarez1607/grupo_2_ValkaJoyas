module.exports = {
  productDetail: (req, res) => {
    return res.render('productDetail');
  },
  productCart: (req, res) => {
    return res.render('productCart');
  },
  add:(req,res) =>{
    return res.render('productAdd')
  },
  edit:(req,res) =>{
    return res.render('productEdit')
  }

};
