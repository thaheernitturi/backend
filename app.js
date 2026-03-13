const express = require("express");

const app = express();

// Custom Middleware
const addUserMiddleware = (req, res, next) => {
  req.user = "Guest";   // adding property to request
  next();               // pass control to next middleware/route
};

// Route using middleware
app.get("/welcome", addUserMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
