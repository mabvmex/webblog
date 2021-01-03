const express = require('express');
const CourseController = require('../controllers/course');
const middleware_auth = require('../middleware/autenticated');

const api = express.Router();

api.post('/add-course', [middleware_auth.ensureAuth], CourseController.addCourse);
api.get('/get-courses', CourseController.getCourses);
api.delete('/delete-course/:id', [middleware_auth.ensureAuth], CourseController.deleteCourse);

module.exports = api;
