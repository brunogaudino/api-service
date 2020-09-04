'use strict';

const repository = require('../repositories/data-repository');

exports.updateData = async(req, res) => {
        
    try {
        await repository.updateData(req.params.id, req.body);
        res.status(200).send({
            message: 'Data updated successfully!'
        });
    } catch (error) {
        res.status(500).send({message: 'Failed to update data.'});
    }
}