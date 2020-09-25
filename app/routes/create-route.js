'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/create-controller');
const authService = require('../services/auth-service');

router.post('/', controller.createData);

//Auth to use authenticate for generate token
router.post('/authenticate', controller.authenticate);

//Auth refresh token
router.post('/refresh-token', authService.authorize, controller.refreshToken);

module.exports = router;