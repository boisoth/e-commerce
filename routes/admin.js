const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// @route GET /admin/add-product
// @desc Add product form page for admins/logged in users
// @access Private

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { path: "/admin/add-product" });
});

// @route POST /admin/add-product
// @desc Submitting a new product from the admin/logged in user and redirecting them to homepage
// @access Private

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
