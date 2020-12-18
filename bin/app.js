'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../app/configs/config');
require('dotenv').config();
const repository = require('../app/repositories/connection-repository');

const main = express();
main.use(bodyParser.json({
    limit: '5mb'
}));
main.use(bodyParser.urlencoded({extended:true}));

//Cors
main.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Database
mongoose.connect(config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    // useCreateIndex: true 
}).then(() => {
    console.log('Database connected!');
}).catch((error) => {
    console.log('Error ', error);
});

//Connection with Database
const db = repository.connectionReturn(mongoose.connection);

// Models
const Data = require('../app/models/data-model');

// Routes 
const indexRoute = require('../app/routes/index-route');
const readRoute = require('../app/routes/read-route');
const createRoute = require('../app/routes/create-route');
const updateRoute = require('../app/routes/update-route');
const deleteRoute = require('../app/routes/delete-route');

main.set('view engine', 'ejs');
main.set('views', './app/views/');

main.use('/', indexRoute);
main.use('/create', createRoute);
main.use('/read', readRoute);
main.use('/update', updateRoute);
main.use('/delete', deleteRoute);

module.exports = main;


