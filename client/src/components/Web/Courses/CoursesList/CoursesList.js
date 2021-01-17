import React from "react";
import { Row, Col, Card, Button, Rate, notification } from "antd";
import { getCoursesDataUdemyApi } from "../../../../api/course";
import "./CoursesList.scss";

export default function CoursesList(props) {
  const { courses } = props;

  return (
      <div className='courses-list' >
          <Row>
              <h1>hola</h1>
          </Row>
      </div>
  )
}

function MostrarCourse(props) {
  const { course } = props;
  console.log(course);

  return <p> === HOLA ===</p>;
}


// { courses.map(course => (
//     <Col md={8} className='courses-list_course'>
//         <MostrarCourse key={course._id}> course={course} </MostrarCourse>
//     </Col>
  
// )) }