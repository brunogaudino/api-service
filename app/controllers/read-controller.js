'use strict';

const repository = require('../repositories/read-repository');

exports.readData = async(req, res) => {
    try {
        const data = await repository.readData();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({message: 'Failed to process your request'});
    }
}

exports.readDataById = async(req, res) => {
    try {
        const data = await repository.readDataById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({message: 'Failed to process your request'});
    }
}
