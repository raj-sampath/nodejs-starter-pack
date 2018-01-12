const messages = require("./messages");
const _ = require("lodash");
module.exports = {

    findAll: (req, res, callback, Model, attributes) => {
        return Model.all({
            attributes
        })
        .then((data) => callback(data))
        .catch((error) => {
            res.status(400).send(messages.__GENERIC_FAILURE_OBJ((error.errors ? error.errors : error.message)))
        });
    },
    findById: (req, res, callback, Model) => {
        return Model.findById(req.params.id)
        .then((data) => {
            if(data)
                callback(data);
            else
                res.status(201).send(messages.__GENERIC_NOT_FOUND_OBJ(Model.name));         
        })
        .catch((error) => {
            res.status(400).send(messages.__GENERIC_FAILURE_OBJ((error.errors ? error.errors : error.message)))
        });
    },
    update: (req, res, callback, Model, attributes) => {
        Model.findById(req.body.id)
        .then((data) => {
            if(data){
                data.update(req.body)
                .then((updateData) => callback(attributes ? _.pick(updateData, attributes) : updateData))
                .catch((error) => {
                    res.status(400).send(messages.__GENERIC_FAILURE_OBJ((error.errors ? error.errors : error.message)))
                });
            }
            else
                res.status(201).send(messages.__GENERIC_NOT_FOUND_OBJ(Model.name));
        })
        .catch((error) => {
            res.status(400).send(messages.__GENERIC_FAILURE_OBJ((error.errors ? error.errors : error.message)))
        });
    },
    create: (req, res, callback, Model, attributes) => {
        return Model.create(req.body)
        .then((data) => callback(attributes ? _.pick(data, attributes) : data))
        .catch((error) => {
            res.status(400).send(messages.__GENERIC_FAILURE_OBJ((error.errors ? error.errors : error.message)))
        });
    },
    findWithClause: (query, res, callback, Model) => {
        return Model.findAll(query)
        .then((data) => callback(data))
        .catch((error) => {
            res.status(400).send(messages.__GENERIC_FAILURE_OBJ(error.errors ? error.errors : error.message))
        });
    },
    bulkCreate: (req, res, callback, Model) => {
        return Model.bulkCreate(req.body)
        .then(() => callback())
        .catch((error) => {
            res.status(400).send(messages.__GENERIC_FAILURE_OBJ(error.errors))
        });
    },
    bulkUpdate: (req, res, callback, Model) => {
        var dataArray = req.body;
        var updatedObjs = 0;
        if(dataArray.length > 0){
            dataArray.forEach((data, i) => {
                Model.findById(data.id)
                .then((foundData) => {
                    if(foundData){
                        foundData.update(data)
                        .then((updatedData) => {
                            ++updatedObjs;
                            if(i == (dataArray.length - 1))
                                callback(updatedObjs);
                        })
                        .catch((error) => {
                            console.log("Some Error Occured : " + error);
                        });
                    }
                    else{
                        if(i == (dataArray.length - 1))
                        callback(updatedObjs);
                    }
                })
                .catch((error) => {
                    res.status(400).send(messages.__GENERIC_FAILURE_OBJ(error.errors))
                });
            });
        }
    },
    delete: (query, res, callback, Model) => {
        return Model.destroy(query)
        .then((data) => callback(data))
        .catch((error) => {
            res.status(400).send(messages.__GENERIC_FAILURE_OBJ(error.errors))
        });
    }
}