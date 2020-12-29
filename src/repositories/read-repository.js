const mongoose = require('mongoose');
const Data = mongoose.model('DataBase');

exports.readData = async() => {
    const res = await Data.find({},'name email password isAdmin').exec();
    return res;
}

exports.readDataById = async(id) => {
    const res = await Data.findById(id,'name email isAdmin -_id').exec();
    return res;
}

