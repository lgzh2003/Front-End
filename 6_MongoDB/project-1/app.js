var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Book = require('./Book.model');// the difference is we need to specify the location. However for the node-module we do not

var db = 'mongodb://localhost/bookstore';//bookstore is the database I use
mongoose.connect(db);//connnect to the db

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/',function (req,res) {
    res.send('welcome to the bookstore');// when user get in the index, will see this
});

app.get('/books',function (req,res) {
    console.log('show all the books in store');
    Book.find({}).exec(function (err,books) {   //when we find all the books, execute it and get the error or the findings
        if(err){
            res.send('error happens');
        }else{
            console.log(books);// shows in the terminal and console
            res.json(books);// shows in the page
        }
    });
});

app.get('/books/:id',function (req,res) {
    console.log('get one book');
    Book.findOne(
        {_id : req.params.id} // this req.params.id is /books/:id
    ).exec(function (err,book) {
        if(err){
            res.send('error happens, no such book id');
        }else {
            console.log(book);
            res.json(book);
        }
    });
});

app.post('/book',function (req,res) {
    var newBook = new Book();
    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.category = req.body.category;

    newBook.save(function (err,book) {
        if(err){
            res.send('error happens to add a book');
        }else{
            console.log(book);
            res.send(book);
        }
    });
});

app.put('/book/:id',function (req,res) {
    Book.findOneAndUpdate(
        {_id : req.params.id},
        {$set:{
                title: req.body.title,
                author: req.body.author,
                category: req.body.category
        }},
        {upset: true},
        function (err,newBook) {
            if(err){
                res.send('error happens when update');
            }else {
                console.log(newBook);
                res.send(newBook);
            }
        }
    );//Model.findOneAndUpdate(query, { name: 'jason borne' }, options, callback)
});

app.delete('/book/:id',function(req,res){
    Book.remove({_id:req.params.id},function (err,deletedBook) {
        if(err){
            res.send('error happens when delete');
        }else {
            console.log('delete a book:'+deletedBook);
            res.send('delete a book:'+deletedBook);
        }
    });
});

var port = 8080;
app.listen(port,function () {
    console.log('app is listening port 8080'); // call-back function to let us know app is working and listening
});


