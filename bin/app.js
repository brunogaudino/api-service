'use strict';

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const main = express();
main.use(express.json());
main.use(express.urlencoded({extended:true}));
//const router = express.Router();

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useFindAndModify: true,
    // useCreateIndex: true 
}).then(() => {
    console.log('Database connected!');
}).catch((error) => {
    console.log('Error ', error);
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// Models
const Data = require('../app/models/data-model');

// Routes 
const indexRoute = require('../app/routes/index-route');
const readRoute = require('../app/routes/read-route');
const createRoute = require('../app/routes/create-route');

main.set('view engine', 'ejs');
main.set('views', './app/views/');

main.use('/', indexRoute);
main.use('/create', createRoute);
main.use('/read', readRoute);
// main.use('/update', updateRoute);
// main.use('/delete', deleteRoute);

module.exports = main;

/**
 * Access to database
 * User: useradmin
 * password: JFXl1WYouvvukUcK
 */
