const express = require("express");
const app = express();

const PORT = 5003;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get("/products ", (req, res) => {
  res.send("Product fetched!!!!");
});

// Start server
app.listen(PORT, () => {
console.log(` Server is running on port ${PORT}`);
});
