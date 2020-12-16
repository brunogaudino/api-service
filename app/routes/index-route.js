'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Data = mongoose.model('DataBase');

router.get('/', (req, res, next) => {
    res.header("Content-Type",'application/json');
    const data = JSON.stringify({
        name: "api-service",
        version: "1.0.0",
        description: "A simple api service",
        author: "Bruno C. A. Gaudino",
        personalhomepage: "https://brunogaudino.github.io",
        url: "git+https://github.com/brunogaudino/api-service.git",
        homepage: "https://github.com/brunogaudino/api-service#readme"
    },null,2);
    res.status(200).send(data);
});

//View template example
router.get('/home', async (req, res, next) => {
    try {
        const data = await Data.find({},'name email isAdmin -_id').exec();
        res.status(200).render('home-view', {repository: data});
    } catch (e) {
        res.status(500).send({message: 'Failed to process your request'});
    }
});

module.exports = router;