var mongoose = require('mongoose');
var Schema = mongoose.schema;

var userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    favorites: [String],
    marks: [Number]
})

var addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: String
})