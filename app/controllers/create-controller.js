'use strict';

const { validationResult } = require('express-validator');
const repository = require('../repositories/create-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');

exports.createData = async(req, res) => {
  const {errors} = validationResult(req);
  
  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }

  try {
    await repository.createData({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    res.status(201).send({message: 'Info successfully registered'});
  } catch (e) {
    res.status(500).send({message: 'Failed to process your request'});
  }
}

exports.authenticate = async(req, res, next) => {

  try {
      const data = await repository.authenticate({
          email: req.body.email,
          password: req.body.password
          //password: md5(req.body.password + global.SALT_KEY)
      });
      if (!data) {
          res.status(404).send({
              message: 'Usuário ou senha inválidos'
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
              email: data.email,
              name: data.name
          }
      });
  } catch (e) {
      res.status(500).send({
          message: 'Falha ao processar sua requisição'
      });
  }
};