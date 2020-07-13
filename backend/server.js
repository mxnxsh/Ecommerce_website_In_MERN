import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from './config';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';

import data from './data';
dotenv.config();

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
   })
   .catch(error => console.log(error.reason));

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//    console.log('Database is connected successfully on port 27017!!!');
// });
const app = express();
app.use(bodyParser.json())
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.get('/api/products', (req, res) => {
   res.send(data.products);
});

// app.get('/api/products/:id', (req, res) => {
//    const productId = req.params.id;
//    const product = data.products.find(x => {
//       return x._id === productId;
//    });
//    if (product) res.send(product);
//    else
//       res.status(404).send({
//          msg: 'Product not found',
//       });
// });
const port = 5000;

app.listen(port, () =>
   console.log(`Server is connected successfullly at ${port}`),
);