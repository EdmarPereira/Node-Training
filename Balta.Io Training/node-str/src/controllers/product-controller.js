'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product'); 

// Get Produtos 
exports.get = (req, res, next) => {
    Product
        .find({
            active: true // filtro desejado
        }, 'title price slug') // retornar somente esses campos
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

// Get Produtos de acordo com o Slug
exports.getBySlug = (req, res, next) => {
    Product
        .findOne({  // se usar find ele retorna um array, nesse caso usa-se o método findOne
            slug: req.params.slug,
            active: true // filtro desejado
        }, 'title description price slug tags') // retornar somente esses campos
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

// Get Produtos de acordo com o Slug
exports.getById = (req, res, next) => {
    Product
        .findById(req.params.id) 
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

// Pesquisa por tags
exports.getByTag = (req, res, next) => {
    Product
        .find({  
            tags: req.params.tag,
            active: true // filtro desejado
        }, 'title description price slug tags') // retornar somente esses campos
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

// Gravar Produtos
exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product
        .save()
        .then(x => {
            res.status(201).send({message: 'Produto cadastrado com sucesso !!!'}); 
        }).catch(e => {
            res.status(400).send({message: 'Falha ao cadastrar o produto ', data: e}); 
        });
        
};

exports.put = (req, res, next) => {
    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
            }).then(x => {
            res.status(200).send({
                message: 'Produto cadastrado com sucesso !'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar o produto',
                data: e
            });
        });
};



exports.delete = (req, res, next) => {

    console.log('val a ser deletado ' + req.body.id)
    
    Product
    
    .findOneAndRemove(req.body.id)
    .then(x => {
        res.status(200).send({
            message: 'Produto removido com sucesso !'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao remover o produto',
            data: e
        });
    });
};

