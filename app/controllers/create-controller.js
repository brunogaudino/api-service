'use strict';

const { validationResult } = require('express-validator');
const repository = require('../repositories/data-repository');

exports.createData = async(req, res) => {
  const {errors} = validationResult(req);
  
  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }

  try {
    await repository.createData({
      name: req.body.name,
      email: req.body.email
    })
    res.status(201).send({message: 'Info successfully registered'});
  } catch (e) {
    res.status(500).send({message: 'Failed to process your request'});
  }
}