const mongoose = require('mongoose');
const Data = mongoose.model('DataBase');

exports.readData = async() => {
    const res = await Data.find({},'name email -_id').exec();
    return res;
}

exports.createData = async data => {
    const register = new Data(data);
    await register.save();
  }
