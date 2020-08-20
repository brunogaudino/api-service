'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.header("Content-Type",'application/json');
    const indexInfo = JSON.stringify({
        name: "api-service",
        version: "1.0.0",
        description: "A simple api crud service",
        author: "Bruno C. A. Gaudino",
        personalhomepage: "https://brunogaudino.github.io",
        url: "git+https://github.com/brunogaudino/api-service.git",
        homepage: "https://github.com/brunogaudino/api-service#readme"
    },null,2);
    res.status(200).send(indexInfo);
});

module.exports = router;