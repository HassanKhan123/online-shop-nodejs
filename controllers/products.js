const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeProduct: true,
  });
};

exports.postAddProduct = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res) => {
  res.render("shop", {
    products,
    path: "/",
    hasProducts: products.length > 0,
    productCSS: true,
    activeShop: true,
  });
};
