const mongoose = require('mongoose');
const Data = mongoose.model('DataBase');

exports.deleteData = async id => {
    await Data.findByIdAndDelete(id);
}
