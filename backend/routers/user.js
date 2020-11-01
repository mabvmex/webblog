const express = require('express');
const UserController = require('../controllers/user');

const api = express.Router();

api.post('/signup', UserController.signUp);
api.post('/signin', UserController.signIn);
api.get('/users', UserController.getUsers);

module.exports = api;