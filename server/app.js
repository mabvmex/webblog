const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { API_VERSION} = require('./config');

//Carga de rutas
const authRoutes = require('./routers/auth');
const userRoutes = require('./routers/user');
const menuRoutes = require('./routers/menu');
const newsletterRouter = require('./routers/newsletter');
const courseRoutes = require('./routers/courses');
const postRoutes = require('./routers/post');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Header HTTP
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
        );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Router Basic
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, menuRoutes);
app.use(`/api/${API_VERSION}`, newsletterRouter);
app.use(`/api/${API_VERSION}`, courseRoutes);
app.use(`/api/${API_VERSION}`, postRoutes);

module.exports = app;