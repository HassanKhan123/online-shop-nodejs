const express = require("express");

const {
  getProducts,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
  getProductById,
} = require("../controllers/shop");

const router = express.Router();

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/products/:productId", getProductById);

router.get("/cart", getCart);

router.get("/checkout", getCheckout);

router.get("/orders", getOrders);

module.exports = router;
