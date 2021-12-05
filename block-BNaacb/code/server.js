var express = require('express');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/code", (err) => {
    console.log(err ? err : "Connected 🍭");
})

var app = express();

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})