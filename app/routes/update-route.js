'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/update-controller');

router.put('/:id', controller.updateData);

module.exports = router;