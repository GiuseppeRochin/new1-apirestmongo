const mongoose = require('mongoose')
const Humano = require('../models/Humano')

const findAllHumans = (req, res) => {
    Humano.find((err, humans) => {
        err && res.status(500).send(err.message)

        res.status(200).json(humans)
    })
}

const findByIdHuman = (req, res) => {
    Humano.findById(req.body.id, (err, human) => {
        err && res.status(500).send(err.message)

        res.status(200).json(human)
    })
}

const findByCorreoAndPassHuman = (req, res) => {
    Humano.find({
        correoElectronico: req.body.correoElectronico,
        password: req.body.password
    }, (err, human) => {
        err && res.status(500).send(err.message)

        res.status(200).json(human)
    })
}

const deleteOneHuman = (req, res) => {
    Humano.findByIdAndDelete(req.body.id, (err, human) => {
        err && res.status(500).send(err.message)

        res.status(200).json({'IsTrue': true, 'Mensaje': '`Usuario con id ${req.body.id} eliminado correctamente`'})
    })
}

const addHuman = (req, res) => {
    Humano.insertMany(req.body, (err, hmn) => {
        err && res.status(500).send(err.message)

        res.status(200).json({'IsGood': true, 'Mensaje': 'Usuario(s) añadido(s) correctamente'})
    })
}

module.exports = { findAllHumans, findByIdHuman, findByCorreoAndPassHuman, deleteOneHuman, addHuman }