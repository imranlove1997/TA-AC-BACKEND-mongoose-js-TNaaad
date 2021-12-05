var eexpress = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.listen("mongodb://localhost/code", (err) => {
    console.log(err ? err : "Connected");
})

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})