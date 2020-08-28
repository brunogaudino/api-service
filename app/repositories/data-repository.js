const mongoose = require('mongoose');
const Data = mongoose.model('DataBase');

exports.readData = async() => {
    const res = await Data.find({},'name email -_id').exec();
    return res;
}

exports.readDataById = async(id) => {
    const res = await Data.findById(id,'name email -_id').exec();
    return res;
}

exports.createData = async data => {
    const register = new Data(data);
    await register.save();
}

exports.updateData = async (id, data) => {
    await Data.findByIdAndUpdate(id,{
        $set: data
    });
}

exports.deleteData = async id => {
    await Data.findByIdAndDelete(id);
}
