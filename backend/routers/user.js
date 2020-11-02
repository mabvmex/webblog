const express = require('express');
const UserController = require('../controllers/user');
const middleware_auth = require('../middleware/autenticated');

const api = express.Router();

api.post('/signup', UserController.signUp);
api.post('/signin', UserController.signIn);
api.get('/users', [middleware_auth.ensureAuth], UserController.getUsers);

module.exports = api;