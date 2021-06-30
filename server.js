const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const apiHumans = require('./api/humans')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/humans', apiHumans)

mongoose.connect(
    "mongodb://localhost/humanos",
    { useNewUrlParser: true },
    (err, res) => {
        err && console.log('Error al iniciar el servidor')

        app.listen(4000, () => {
            console.log('Servidor iniciado correctamente')
        })
    }
)