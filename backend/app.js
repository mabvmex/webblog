const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { API_VERSION} = require('./config');

//Carga de rutas
const userRoutes = require('./routers/user');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Header HTTP
//

// Router Basic
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;