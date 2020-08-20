'use strict';

const express = require('express');
const bodyParser = require('body-parser');
//const config = require('./config'); database

const main = express();
const router = express.Router();

// Models
//const ReadDAO = require('./app/models/readDAO');
// const Product = require('./models/product');
// const Customer = require('./models/customer');
// const Order = require('./models/order');

// Routes 
const indexRoute = require('./app/routes/index-route');
//const readRoute = require('./app/routes/read-route');
// const productRoute = require('./routes/product-route');
// const customerRoute = require('./routes/customer-route');
// const orderRoute = require('./routes/order-route');

main.use(bodyParser.json({
    limit: '5mb'
}));
main.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
main.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// main.set('view engine', 'ejs');
// main.set('views', './app/views/');

main.use('/', indexRoute);
//main.use('/read', readRoute);
// main.use('/products', productRoute);
// main.use('/customers', customerRoute);
// main.use('/orders', orderRoute);

module.exports = main;
