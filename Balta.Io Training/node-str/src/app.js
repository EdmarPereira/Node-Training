'use strict' // força o javascript a ser mais criterioso no caso de esquecer ;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// carregas as rotas do projeto
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false
}));





app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;