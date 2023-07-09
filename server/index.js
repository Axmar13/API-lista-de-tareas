const express = require('express');
const morgan = require('morgan');

const app = express();
require('./db.js');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(require('./routes.js'));

app.listen(3030, ()=>{console.log('Servidor encendido')});