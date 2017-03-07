var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var User = require('./models/User.model');// the difference is we need to specify the location. However for the node-module we do not

var controller = require('./controllers/User.controller');

var db = 'mongodb://localhost/bookstore';//bookstore is the database I use
mongoose.connect(db);//connnect to the db

app.use(express.static(path.join(__dirname,'views')));//it will locate where the index.html is.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.post('/', controller.register); //

var port = 8080;
app.listen(port,function () {
    console.log('app is listening port 8080'); // call-back function to let us know app is working and listening
});