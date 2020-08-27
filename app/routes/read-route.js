'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/read-controller');

router.get('/', controller.readData);

module.exports = router;