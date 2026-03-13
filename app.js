const express = require("express");

const app = express();

// Products routes
app.get("/products", (req, res) => {
  res.send("Here is the list of all products.");
});

app.post("/products", (req, res) => {
  res.send("A new product has been added.");
});

// Categories routes
app.get("/categories", (req, res) => {
  res.send("Here is the list of all categories.");
});

app.post("/categories", (req, res) => {
  res.send("A new category has been created.");
});

// Wildcard route for undefined routes
app.use("*", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// Start server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
