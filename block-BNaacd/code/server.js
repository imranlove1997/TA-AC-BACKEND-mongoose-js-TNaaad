var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect("mongodb://localhost/code/", (err) => {
    console.log(err ? err : ('Connected.. 😺'));
})

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.listen(3000, () => {
    console.log('Server is lisetening on port 3000');
})