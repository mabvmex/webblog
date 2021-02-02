const express = require('express');
const postController = require('../controllers/post');
const middleware_auth = require('../middleware/autenticated');

const api = express.Router();

api.post('/add-post', [middleware_auth.ensureAuth], postController.addPost );

module.exports = api;