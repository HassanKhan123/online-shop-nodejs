const express = require("express");
const path = require("path");

const rootDir = require("../util/path");
const { products } = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop", { products, path: "/" });
});

module.exports = router;
