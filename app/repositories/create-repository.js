const mongoose = require('mongoose');
const Data = mongoose.model('DataBase');

exports.createData = async data => {
  const register = new Data(data);
  await register.save();
}

exports.authenticate = async(data) => {
  const res = await Data.findOne({
      id: data.id,
      email: data.email,
      password: data.password,
      isAdmin: data.isAdmin
  });
  return res;
}

exports.readDataById = async(id) => {
  const res = await Data.findById(id);
  return res;
}