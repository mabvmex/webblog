import React, { useState, useEffect } from "react";
import { getCoursesDataUdemyApi } from "../../../../api/course";
import { List, Button, Modal as ModalAnt, notification } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import DragSortableList from "react-drag-sortable";
import Modal from "../../../Modal";

import "./CoursesList.scss";

const { config } = ModalAnt;

export default function CoursesList(props) {
  const { courses, setReloadCourses } = props;
  const [listCourses, setListCourses] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const listCourseArray = [];
    courses.forEach((course) => {
      listCourseArray.push({
        content: <Course course={course} />,
      });
    });
    setListCourses(listCourseArray);
  }, [courses]);

  const onSort = (sortedList, dropEvent) => {
    console.log(sortedList);
  };

  return (
    <div className="courses-list">
      <div className="courses-list__header">
        <Button
          type="primary"
          shape="round"
          onClick={() => console.log("CREANDO CURSO")}
        >
          Nuevo curso
        </Button>
      </div>

      <div className="courses-list__items">
        {listCourses.length === 0 && (
          <h2 style={{ textAlign: "center", margin: 0 }}>
            No tienes cursos creados
          </h2>
        )}
        <DragSortableList items={listCourses} onSort={onSort} type="vertical" />
      </div>
    </div>
  );
}

function Course(props) {
  const { course } = props;
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    getCoursesDataUdemyApi(course.idCourse).then((response) => {
      if (response.code !== 200) {
        notification["warning"]({
          message: `El curso con el ID ${course.idCourse} no ha sido encontrado`,
        });
      }
      setCourseData(response.data);
    });
  }, [course]);

  if (!courseData) {
    return null;
  }

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => console.log("EDITANDO CURSO")}>
          <EditFilled />
        </Button>,
        <Button type="danger" onClick={() => console.log("ELIMINAR CURSO")}>
          <DeleteFilled />
        </Button>,
      ]}
    >
      <img
        src={courseData.image_100x100}
        alt={courseData.title}
        style={{ width: "100px", marginRight: "20px" }}
      />
      <List.Item.Meta
        title={`${courseData.title} | ID: ${course.idCourse}`}
        description={courseData.headline}
      />

    </List.Item>
  );
}
