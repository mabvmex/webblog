import React from 'react';
import { Layout, Tabs } from 'antd';
import { Redirect } from 'react-router-dom';
import RegisterForm from '../../../components/Admin/RegisterForm';

import Logo from "../../../assets/img/png/logo-white.png";
import "./SignIn.scss";

export default function AdminSignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Miguel Barrera" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span> Entrar </span>} key="1">
              Componente LoginForm
            </TabPane>
            <TabPane tab={<span> Nuevo Usuario </span>} key="2">
            <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}