// ¿Cuál es la diferencia entre Switch y switch?
import React, { useState, useEffect } from "react";
import { Switch, List, Avatar, Button, notification } from "antd";
import { EditFilled, StopOutlined, DeleteFilled, CheckSquareFilled } from "@ant-design/icons";
import noUserAvatar from "../../../../assets/img/png/no-avatar.png";
import Modal from "../../../Modal";
import EditUserForm from "../EditUserForm";
import { getAvatarApi, activateUserApi } from "../../../../api/user";
import { getAccessTokenApi } from '../../../../api/auth'
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
        <UsersInactive usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
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
        <IndividualUserActive user={user} editUser={editUser} setReloadUsers={setReloadUsers }/>
      )}
    />
  );
}

function IndividualUserActive(props) {
  const { user, editUser, setReloadUsers } = props;
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

  const desactivateUser = () => {
    const accessToken = getAccessTokenApi();

    activateUserApi(accessToken, user._id, false )
    .then(response => {
      notification['success']({
        message: response
      });
      setReloadUsers(true);
    })
    .catch(err => {
      notification['error']({
        message: err
      });
    });
  }

  return (
    <List.Item
      actions={[
        <Button onChange={Modal} type="primary" size='large' shape='circle'  onClick={() => editUser(user)}>
          <EditFilled />
        </Button>,
        
        <Button type='default' size='large' shape='circle' danger  onClick={desactivateUser} >
          <StopOutlined />
        </Button>,
        
        <Button type="danger" size='large' shape='circle'>
          <DeleteFilled />
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
  const { usersInactive, setReloadUsers } = props;

  return (
    <List
      className="users-inactive"
      itemLayout="horizontal"
      dataSource={usersInactive}
      renderItem={(user) => <IndividualUserInactive user={user} setReloadUsers={setReloadUsers} />}
    />
  );
}

function IndividualUserInactive(props) {
  const { user, setReloadUsers } = props;
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

  
  const activateUser = () => {
    const accessToken = getAccessTokenApi();

    activateUserApi(accessToken, user._id, true )
    .then(response => {
      notification['success']({
        message: response
      });
      setReloadUsers(true);
    })
    .catch(err => {
      notification['error']({
        message: err
      });
    });
  }

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={activateUser}>
          <CheckSquareFilled />
        </Button>,
        <Button type="danger" onClick={() => console.log("Eliminar usuario")}>
          
          <DeleteFilled />
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