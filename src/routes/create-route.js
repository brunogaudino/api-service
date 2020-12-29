'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/create-controller');
const authService = require('../services/auth-service');

router.post('/', controller.createData);

//Auth to use authenticate for generate token
router.post('/authenticate', controller.authenticate);

//Auth refresh token using authorize method
router.post('/refresh-token', authService.authorize, controller.refreshToken);

//Auth isAdmin using isAdmin method
router.post('/isadmin', authService.isAdmin, controller.createData);

module.exports = router;