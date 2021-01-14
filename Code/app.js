var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var produtosRouter = require('./routes/produtosRoutes');
var servicosRouter = require('./routes/servicosRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/produtos', produtosRouter);
app.use('/api/servicos', servicosRouter);

module.exports = app;
