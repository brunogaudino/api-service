'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/delete-controller');

router.delete('/:id', controller.deleteData);

module.exports = router;