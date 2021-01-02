const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = Schema({  // Id de curso de udemy
    idCourse: {
        type: Number,
        unique: true,
        require: true
    },
    link: String,
    coupon: String,
    price: Number,
    order: Number
});

module.exports = mongoose.model('Course', CourseSchema);