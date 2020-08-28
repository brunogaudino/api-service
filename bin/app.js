'use strict';

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const repository = require('../app/repositories/connection-repository');

const main = express();
main.use(express.json());
main.use(express.urlencoded({extended:true}));

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
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

/**
 * Access to Mongo Atlas database
 * Database name: DataBase
 * Collection name: databases
 * User: useradmin
 * password: JFXl1WYouvvukUcK
 */
