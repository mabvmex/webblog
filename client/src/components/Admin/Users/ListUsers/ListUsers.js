// ¿Cuál es la diferencia entre Switch y switch?

import React, { useState, useEffect } from "react";
import { Switch, List, Avatar, Button } from "antd";
import { EditFilled, StopOutlined, DeleteFilled, CheckSquareFilled, } from "@ant-design/icons";
import noUserAvatar from "../../../../assets/img/png/no-avatar.png";
import Modal from "../../../Modal";
import EditUserForm from "../EditUSerForm";
import { getAvatarApi } from "../../../../api/user";
import "./ListUsers.scss";

export default function ListUsers(props) {
  const { usersActive, usersInactive, setReloadUsers } = props;
  const [viewUsersActives, setViewUsersActives] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitulo, setModalTitulo] = useState("");
  const [modalContent, setModalContent] = useState(null);

  return (
    <div className="list-users">
      <div className="list-users__switch">
        <Switch
          defaultChecked
          onChange={() => setViewUsersActives(!viewUsersActives)}
        />
        <span>
          {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
        </span>
      </div>

      {viewUsersActives ? (
        <UsersActive
          usersActive={usersActive}
          setIsVisibleModal={setIsVisibleModal}
          setModalContent={setModalContent}
          setModalTitulo={setModalTitulo}
          setReloadUsers={setReloadUsers}
        />
      ) : (
        <UsersInactive usersInactive={usersInactive} />
      )}

      <Modal
        title={modalTitulo}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

function UsersActive(props) {
  const { usersActive, setIsVisibleModal, setModalTitulo, setModalContent, setReloadUsers } = props;

  const editUser = (user) => {
    setIsVisibleModal(true);
    setModalTitulo(
      `Editar ${user.name ? user.name : "..."} ${
        user.lastname ? user.lastname : "..."
      }`
    );
    setModalContent(
      <EditUserForm user={user} setIsVisibleModal={setIsVisibleModal} setReloadUsers={setReloadUsers } />
    );
  };

  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={(user) => (
        <IndividualUserActive user={user} editUser={editUser} />
      )}
    />
  );
}

function IndividualUserActive(props) {
  const { user, editUser } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  return (
    <List.Item
      actions={[
        <Button onChange={Modal} type="primary" onClick={() => editUser(user)}>
          {" "}
          <EditFilled />{" "}
        </Button>,

        <Button type="primary" onClick={() => console.log("Detener usuario")}>
          {" "}
          <StopOutlined />{" "}
        </Button>,
        <Button type="danger" onClick={() => console.log("Eliminar usuario")}>
          {" "}
          <DeleteFilled />{" "}
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : noUserAvatar} />}
        title={`
            ${user.name ? user.name : "..."}
            ${user.lastname ? user.lastname : "..."}
            `}
        description={user.email}
      />
    </List.Item>
  );
}

function UsersInactive(props) {
  const { usersInactive } = props;

  return (
    <List
      className="users-inactive"
      itemLayout="horizontal"
      dataSource={usersInactive}
      renderItem={(user) => <IndividualUserInactive user={user} />}
    />
  );
}

function IndividualUserInactive(props) {
  const { user } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => console.log("Activar usuario")}>
          {" "}
          <CheckSquareFilled />{" "}
        </Button>,
        <Button type="danger" onClick={() => console.log("Eliminar usuario")}>
          {" "}
          <DeleteFilled />{" "}
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : noUserAvatar} />}
        title={`
            ${user.name ? user.name : "..."}
            ${user.lastname ? user.lastname : "..."}
            `}
        description={user.email}
      />
    </List.Item>
  );
}
