const Course = require('../models/course');

function addCourse(req, res) {
    const body = req.body;
    const course = new Course(body);
    course.order = 1000;
    
    course.save((err, courseStored) => {
        if (err) {
            res.status(400).send({
                code: 400,
                message: "El curso que estás creando ya existe"
            })
        } else {
            if(!courseStored) {
                res.status(400).send({
                    code: 400,
                    message: "No se ha podido crear el curso"
                });
            } else {
                res.status(200).send({
                    code: 200,
                    message: "El curso ha sido creado exitosamente"
                });
            }
        }
    });
}

module.exports = {
    addCourse
}