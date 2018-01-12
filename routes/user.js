var express = require('express');
var router = express.Router();
const controller = require('../server/controllers').user;
const messages = require("../server/generic/messages");
const {name} = controller;

router.get('/', function(req, res, next) {
    controller.list(req, res, (data) => {
      res.status(200).send(messages.__GENERIC_FOUND_OBJ(data, name));
    });
});

router.post('/', function(req, res, next) {
    controller.create(req, res, (data) => {
      res.status(201).send(messages.__GENERIC_CREATION_SUCCESS_OBJ(data, name));
    });
  });

router.put('/', function(req, res, next) {
    controller.update(req, res, (data) => {
      res.status(201).send(messages.__GENERIC_UPDATE_SUCCESSFUL_OBJ(data, name));
    });
  });

router.get('/:id', function(req, res, next) {
    controller.findById(req, res, (data) => {
      res.status(200).send(messages.__GENERIC_FOUND_OBJ(data, name));
    });
  });

module.exports = router;