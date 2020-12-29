'use strict';

const config = require('../configs/config');
const sendgrid = require('@sendgrid/mail').setApiKey(config.sendgrIdKey);

exports.send = async (to, subject, body) => {
const emailBody = {
  to: to,
  from: 'apiservice@email.com',
  subject: subject,
  html: body
}

  sendgrid
    .send(emailBody)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error('Error ->', error.response.body)
    })

}