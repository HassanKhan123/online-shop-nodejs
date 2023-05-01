const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeProduct: true,
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();

  res.redirect("/");
};

exports.getProducts = (req, res) => {
  const products = Product.fetchAll();
  res.render("shop", {
    products,
    path: "/",
    hasProducts: products.length > 0,
    productCSS: true,
    activeShop: true,
  });
};
