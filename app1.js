const express = require("express");

const app = express();

// Dynamic route with route parameter and query parameter
app.get("/welcome/:username", (req, res) => {
  const username = req.params.username;   // route parameter
  const role = req.query.role;            // query parameter

  res.send(`Welcome ${username}, your role is ${role}`);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
