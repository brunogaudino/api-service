'use strict';

const repository = require('../repositories/data-repository');

exports.deleteData = async (req, res) => {
    try {
      await repository.deleteData(req.params.id);
      res.status(200).send({
        message: 'Data deleted successfully!'
      });
    } catch (e) {
      res.status(500).send({message: 'Failed to delete data.'});
    }
  };