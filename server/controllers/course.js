const course = require('../models/course');

function addCourse(req, res) {
    const body = req.body;
    const course = new course(body);
    
    course.order = 1000;
    console.log(course);
}

module.exports = {
    addCourse
}