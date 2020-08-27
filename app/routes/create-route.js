'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/create-controller');

router.post('/', controller.createData);

module.exports = router;