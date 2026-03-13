const express = require("express");

const app = express();

// Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // pass control to next middleware or route
});

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

// Start server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
