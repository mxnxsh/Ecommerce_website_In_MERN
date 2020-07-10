const express = require('express');
import data from './data';
const app = express();

app.get('/api/products', (req, res) => {
   res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
   const productId = req.params.id;
   console.log(productId);

   const product = data.products.find(x => {
      return x._id === productId
   });
   if (product) res.send(product);
   else res.status(404).send({
      msg: "Product not found"
   });
});
const port = 5000;

app.listen(port, () =>
   console.log(`Server is connected successfullly at ${port}`),
);