const schema = require('../models/schema.js');

exports.findAll = (req, res) => {

    new schema.Project().fetchAll().then((projects) => {
        res.send(projects);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An unknown error has occured."
        })
    });

}

exports.findOne = (req, res) => {

    res.status(300).send({
        message: "Found one"
    })

}
