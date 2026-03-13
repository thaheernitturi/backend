const express = require("express");

const router = express.Router();

// GET route
router.get("/products", (req, res) => {
  res.send("Here is the list of all products.");
});

// POST route
router.post("/products", (req, res) => {
  res.send("A new product has been added.");
});

// GET route
router.get("/categories", (req, res) => {
  res.send("Here is the list of all categories.");
});

// POST route
router.post("/categories", (req, res) => {
  res.send("A new category has been created.");
});

module.exports = router;
