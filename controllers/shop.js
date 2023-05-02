const Product = require("../models/product");

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      products,
      path: "/products",
    });
  });
};

exports.getIndex = (req, res) => {
  Product.fetchAll(products => {
    res.render("shop/index", {
      products,
      path: "/",
    });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", { path: "/cart" });
};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", { path: "/checkout" });
};
