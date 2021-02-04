const express = require('express');
const postController = require('../controllers/post');
const middleware_auth = require('../middleware/autenticated');

const api = express.Router();

api.post('/add-post', [middleware_auth.ensureAuth], postController.addPost );
api.get('/get-posts', postController.getPosts);
api.put('/update-post/:id', [middleware_auth.ensureAuth], postController.updatePosts);
api.delete('/delete-post/:id', [middleware_auth.ensureAuth], postController.deletePost);

module.exports = api;