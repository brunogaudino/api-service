'use strict';

const { validationResult } = require('express-validator');
const repository = require('../repositories/data-repository');

exports.updateData = async(req, res) => {
    const {errors} = validationResult(req);

    if(errors.length > 0) {
      return res.status(400).send({message: errors})
    }
    
    try {
        await repository.updateData(req.params.id, req.body);
        res.status(200).send({
            message: 'Data updated successfully!'
        });
    } catch (error) {
        res.status(500).send({message: 'Failed to update data.'});
    }
}