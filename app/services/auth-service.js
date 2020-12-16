'use strict';
const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
  return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' });
}

exports.decodeToken = async (token) => {
  var data = await jwt.verify(token, global.SALT_KEY);
  return data;
}

exports.authorize = function (req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
      res.status(401).json({
        message: 'Restricted access'
      });
  } else {
      jwt.verify(token, global.SALT_KEY, function (error, decoded) {
          if (error) {
              res.status(401).json({
                  message: 'Invalid Token'
              });
          } else {
              if (decoded.isAdmin == true) { //decoded.roles.includes('admin')
                next();
              } else {
                res.status(403).json({
                    message: 'This functionality is restricted for admin'
                });
              }
          }
      });
  }
};

exports.isAdmin = function (req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
      res.status(401).json({
          message: 'Invalid Token'
      });
  } else {
      jwt.verify(token, global.SALT_KEY, function (error, decoded) {
          if (error) {
              res.status(401).json({
                  message: 'Invalid Token'
              });
          } else {
              if (decoded.isAdmin == true) { //decoded.roles.includes('admin')
                  next();
              } else {
                  res.status(403).json({
                    message: 'This functionality is restricted to administrators'
                  });
              }
          }
      });
  }
};