const mongoose = require('mongoose');
const Data = mongoose.model('DataBase');

exports.createData = async data => {
  const register = new Data(data);
  await register.save();
}

exports.authenticate = async(data) => {
  const res = await Data.findOne({
      email: data.email,
      password: data.password
  });
  return res;
}