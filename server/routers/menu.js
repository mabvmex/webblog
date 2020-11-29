const express = require('express');
const MenuController = require('../controllers/menu');
const middleware_auth = require ('../middleware/autenticated');

const api = express.Router();

api.post('/add-menu', [middleware_auth.ensureAuth], MenuController.addMenu);
api.get('/get-menu', MenuController.getMenu);
api.put('/update-menu/:id', [middleware_auth.ensureAuth], MenuController.updateMenu);

module.exports = api;