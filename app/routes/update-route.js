'use strict';

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const controller = require('../controllers/update-controller');

router.put('/:id',[
    check('name').optional().isLength({ min: 3 }).withMessage("The name must be at least 3 characters long."),
    check('email').optional().isLength({ min: 10, max: 50 }).withMessage("The email must be a minimum of 10 characters and a maximum of 50.")
], controller.updateData);

module.exports = router;