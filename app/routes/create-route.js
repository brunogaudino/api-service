'use strict';

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const controller = require('../controllers/create-controller');

router.post('/', [
    check('name').isLength({ min: 3 }).withMessage("The name must be at least 3 characters long."),
    check('email').isLength({ min: 10, max: 50 }).withMessage("The email must be a minimum of 10 characters and a maximum of 50.")
],controller.createData);

//With auth
router.post('/authenticate', controller.authenticate);
//router.post('/authorize', authService.authorize, controller.createData);


module.exports = router;