var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var produtosRouter = require('./routes/produtos');
var materiasprimasRouter = require('./routes/materiasprimas');

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/BackEnd';

const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('conectado no servidor');
}, (err) => {console.log(err);});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/produtos', produtosRouter);
app.use('/materiasprimas', materiasprimasRouter);

module.exports = app;
