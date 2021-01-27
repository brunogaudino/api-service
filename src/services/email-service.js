'use strict';

const config = require('../configs/config');
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(config.sendgrIdKey);

exports.send = async (to, subject, body) => {
// const emailBody = {
//   to: to,
//   from: 'apiservice@email.com',
//   subject: subject,
//   html: body
// }
  sendgrid
    .send({
      to: to,
      from: 'apiservice@gmail.com',
      subject: subject,
      text: 'This is a text example',
      html: body
    })
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error('Error ->', error.response.body)
      if (error.response) {
        console.error(error.response.body)
      }
    })

}