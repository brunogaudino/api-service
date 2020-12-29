const mongoose = require('mongoose');
const Data = mongoose.model('DataBase');

exports.putUpdateData = async (id, data) => {
  await Data.findByIdAndUpdate(id,{
      $set: data
  });
}
