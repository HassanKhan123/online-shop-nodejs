const Product = require("../models/product");

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      prods: products,
      path: "/products",
      pageTitle: "Products List",
    });
  });
};

exports.getProductById = (req, res) => {
  const productId = req.params.productId;

  Product.findById(productId, product => {
    res.render("shop/product-detail", {
      product,
      pageTitle: "Product Detail",
      path: "/products",
    });
  });
};

exports.getIndex = (req, res) => {
  Product.fetchAll(products => {
    res.render("shop/index", {
      prods: products,
      path: "/",
      pageTitle: "My Shop",
    });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", { path: "/cart", pageTitle: "Cart" });
};

exports.postCart = (req, res) => {
  const prodId = req.body.productId;

  res.redirect("/cart");
};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", { path: "/checkout", pageTitle: "Checkout" });
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", { path: "/orders", pageTitle: "Orders" });
};
