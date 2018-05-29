var express = require("express")
var app = express();

app.get('/', function(req, res){
    res.send('This is the home page')
});

app.get('/contact', function(req, res){
    res.send('This is the contact us page')
});

app.get('/profile/:id', function(req, res){
    res.send('You resquested the id: ' + req.params.id);
});

app.listen(3000);