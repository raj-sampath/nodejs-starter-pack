const Model = require('../models').User;
const crud = require("../generic/crud");

module.exports = {
    name: Model.name,
    create(req, res, callback) {
        crud.create(req, res, callback, Model)
    },
    list(req, res, callback){
        crud.findAll(req, res, callback, Model)
    },
    findById(req, res, callback){
        crud.findById(req, res, callback, Model)
    },
    update(req, res, callback){
        crud.update(req, res, callback, Model) 
    }
  };