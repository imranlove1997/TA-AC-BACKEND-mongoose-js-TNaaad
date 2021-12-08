var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = ({
    name: String,
    email: String,
    sports: [String]
}, {timeStamps: true})

var User = mongoose.model('User', userSchema);

module.exports = User;