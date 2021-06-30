const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HumanoSchema = new Schema([{
    name: { type: String },
    username: { type: String },
    password: { type: String }, 
    correoElectronico: { type: String },
    creado: { type: Date, default: Date.now }
}])

module.exports = Humano = mongoose.model('humans', HumanoSchema)