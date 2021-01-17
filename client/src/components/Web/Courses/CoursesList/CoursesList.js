import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Rate, notification } from "antd";
import { getCoursesDataUdemyApi } from "../../../../api/course";
import "./CoursesList.scss";

export default function CoursesList(props) {
  const {courses} = props;

  console.log(courses)

  return (
      <div className='courses-list' >
          <Row>
              {courses.map(course => (
                <Col md={8} className='courses-list__course' key={course._id} >
                    <Course  course={course} />
                </Col>
               )) }
          </Row>
      </div>
  )
}

function Course(props) {
  const { course } = props;
  const [courseInfo, setCourseInfo] = useState({});

  useEffect(() => {
      getCoursesDataUdemyApi(course.idCourse)
        .then(response => {
            if(response?.code !== 200){
                notification['warning']({
                    message: response.message
                });
            } else {
                setCourseInfo(response.data)
            }
        })
        .catch(err => {
            notification['error']({
                message: 'Error del servidor, inténtelo más tarde'
            });
        })
  }, [course])

  return <p> {courseInfo.title} </p>;
}