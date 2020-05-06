const express = require("express");
const app = express();

const productRoutes = require('./project/api/routes/products');
const orderRoutes = require('./project/api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);




module.exports = app;