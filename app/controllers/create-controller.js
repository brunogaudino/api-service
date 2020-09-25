'use strict';

const ValidationService = require('../services/validation-service');
const repository = require('../repositories/create-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');

exports.createData = async(req, res) => {
  let validation = new ValidationService();
  validation.hasMinLen(req.body.name, 3, 'The name must be at least 3 characters long.');
  validation.isEmail(req.body.email, 'Invalid email.');
  validation.hasMinLen(req.body.password, 6, 'The password must be a minimum of 6 characters.');

  if (!validation.isValid()) {
    res.status(400).send(validation.errors()).end();
    return;
  }

  try {
    await repository.createData({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY)
    })
    res.status(201).send({message: 'Info successfully registered'});
  } catch (e) {
    res.status(500).send({message: 'Failed to process your request'});
  }
}

exports.authenticate = async(req, res, next) => {

  try {
      const data = await repository.authenticate({
        id: req.body.id,
        email: req.body.email,
        password: req.body.password
      });

      if (!data) {
        res.status(404).send({
          message: 'Username or Password is invalid'
        });
        return;
      }

      const token = await authService.generateToken({
          id: data._id,
          email: data.email,
          name: data.name
      });

      res.status(201).send({
          token: token,
          data: {
            id: data.id,
            email: data.email,
            name: data.name
          }
      });
  } catch (e) {
      res.status(500).send({
          message: 'Failed to process your request'
      });
  }
};

exports.refreshToken = async(req, res, next) => {
  try {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    const data = await authService.decodeToken(token);
    const getDataById = await repository.readDataById(data.id);

    if (!getDataById) {
      res.status(404).send({
          message: 'Data not found'
      });
      return;
    }

    const tokenData = await authService.generateToken({
      id: data.id,
      email: data.email,
      name: data.name
    });

    res.status(201).send({
      token: token,
      data: {
        email: data.email,
        name: data.name,
        id: data.id,
        password: data.password
      }
    });

  } catch (error) {
    res.status(500).send({
      message: 'Failed to process your request'
    });
  }
}