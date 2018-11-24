const mongoose = require('mongoose');

const Schema = mongoose.Schema

const petSchema = new Schema({
    nombre : {type: String},
    tipo : {type: String}
})

module.exports = mongoose.model('Pet',petSchema);
