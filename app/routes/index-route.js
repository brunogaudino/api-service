'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        name: "api-service",
        version: "1.0.0",
        description: "A CRUD API service",
        author: "Bruno C. A. Gaudino",
        url: "git+https://github.com/brunogaudino/api-service.git",
        homepage: "https://github.com/brunogaudino/api-service#readme"
    });
});

module.exports = router;