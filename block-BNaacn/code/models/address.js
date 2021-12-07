var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var addSchema = new Schema({
    village: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String},
    pin: {type: Number},
    user: mongoose.Types.ObjectId
}, {timestamps: true})

module.exports = mongoose.model('Address', addSchema);