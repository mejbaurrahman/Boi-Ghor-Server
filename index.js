const express = require("express");
const cors = require("cors");
const products = require("./books.json");

const app = express();
const PORT = process.env.PORT || 5000;

//add middleware
app.use(cors());

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.findOne(productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to Boi Ghor Server");
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
