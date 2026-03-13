// Controller functions for products

exports.getProducts = (req, res) => {
  res.send("Fetching all products");
};

exports.getProductById = (req, res) => {
  const id = req.params.id;
  res.send(`Fetching product with ID: ${id}`);
};

exports.addProduct = (req, res) => {
  res.send("Adding a new product");
};
