const express = require('express');
const UserController = require('../controllers/user');
const multipart = require('connect-multiparty');
const middleware_auth = require('../middleware/autenticated');
const middleware_upload_avatar = multipart({ uploadDir: './uploads/avatar' })

const api = express.Router();

api.post('/signup', UserController.signUp);
api.post('/signin', UserController.signIn);
api.get('/users', [middleware_auth.ensureAuth], UserController.getUsers);
api.get('/users-active', [middleware_auth.ensureAuth], UserController.getUsersActive);
api.put('/upload-avatar/:id', [middleware_auth.ensureAuth, middleware_upload_avatar], UserController.uploadAvatar);
api.get('/get-avatar/:avatarName', UserController.getAvatar);
api.put('/update-user/:id', [middleware_auth.ensureAuth], UserController.updateUser);
api.put('/activate-user/:id', [middleware_auth.ensureAuth], UserController.activateUser);
api.delete('/delete-user/:id', [middleware_auth.ensureAuth], UserController.deleteUsers);
api.post('/signup-admin', [middleware_auth.ensureAuth], UserController.signUpAdmin);

module.exports = api;