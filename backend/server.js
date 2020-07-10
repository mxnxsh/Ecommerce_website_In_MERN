const express = require('express');
import data from './data';
const app = express();

app.get('/api/products', (req, res) => {
   res.send(data.products);
});
const port = 5000;

app.listen(port, () =>
   console.log(`Server is connected successfullly at ${port}`),
);
