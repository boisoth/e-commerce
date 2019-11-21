const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

// @route GET /
// @desc Root/homepage that displays lists of products
// @access Public

router.get("/", (req, res, next) => {
  res.render("shop");
});

module.exports = router;
