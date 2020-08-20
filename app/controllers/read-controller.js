'use strict';

//const ValidationContract = require('../validators/fluent-validator');
const repository = [
    {
      "name": "Personas",
      "email": "other@email.com",
      "cellphone": "01595896-2145",
      "telephone": "0115456-2546",
      "zipcode": "89000-340",
      "date": "04/05/1988",
      "assign": "assigned",
      "colorsName": "green",
      "idTimeStamp": "d20HWAldhVueceD4"
    },
    {
      "name": "Response44445",
      "email": "email@email.br",
      "cellphone": "98754111",
      "telephone": "987984111",
      "zipcode": "987954111",
      "date": "15021111",
      "colorsName": "red",
      "idTimeStamp": "1572372127918"
    }]; 
//const azure = require('azure-storage');
//const guid = require('guid');
//var config = require('../config');
exports.get = async(req, res, next) => {
    try {
        var data = await repository;
        res.status(200).send(repository);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process your request'
        });
    }
}
//d20HWAldhVueceD4
// exports.getById = async(req, res, next) => {
//     console.log('Param id ', req.params.idTimeStamp);
//     try {
//         var data = await repository.getById(req.params.idTimeStamp);
//         res.status(200).send(data);
//     } catch (e) {
//         res.status(500).send({
//             message: 'Failed to process your request'
//         });
//     }
// }

//Example view page
exports.getViewList = async(req, res, next) => {
    try {
        var data = await repository;
        res.status(200).render('index-view', {repository: data});
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process your request'
        });
    }
}