'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/read-controller');
//const authService = require('../services/auth-service');

router.get('/', controller.get);
// router.get('/:idTimeStamp', controller.getById);
router.get('/list', controller.getViewList);

module.exports = router;