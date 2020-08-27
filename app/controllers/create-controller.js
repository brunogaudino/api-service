'use strict';

const mongoose = require('mongoose');
const Data = mongoose.model('DataBase');

exports.createData = async(req, res) => {
  try {
    const register = new Data({
      name: req.body.name,
      email: req.body.email
    });  
    await register.save();    
    res.status(201).send({message: 'Info successfully registered'});
  } catch (e) {
    res.status(500).send({message: 'Failed to process your request'});
  }
}