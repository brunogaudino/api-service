const mongoose = require('mongoose');
const Data = mongoose.model('DataBase');

exports.updateData = async (id, data) => {
    await Data.findByIdAndUpdate(id,{
        $set: data
    });
}

exports.deleteData = async id => {
    await Data.findByIdAndDelete(id);
}
