'use strict' // força o javascript a ser mais criterioso no caso de esquecer ;

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecção com db
mongoose.connect('mongodb://nodejs_balta1:nodejs_balta1@ds050559.mlab.com:50559/nodejs_balta')

// carregas as rotas do projeto
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;