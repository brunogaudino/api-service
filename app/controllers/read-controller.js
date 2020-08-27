'use strict';

const mongoose = require('mongoose');
const Data = mongoose.model('DataBase');

exports.readData = async(req, res, next) => {
    try {
        const data = await Data.find({}).exec();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({message: 'Failed to process your request'});
    }
}
