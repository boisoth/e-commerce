const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

// @route GET /
// @desc Root/homepage that displays lists of products
// @access Public

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Homepage", path: "/" });
});

module.exports = router;
