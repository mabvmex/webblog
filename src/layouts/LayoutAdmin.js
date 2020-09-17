import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import MenuTop from '../components/Admin/MenuTop';
import AdminSider from '../components/Admin/AdminSider';

import './LayoutAdmin.scss';

export default function LayoutAdmin(props) {
  const { routes } = props;
  const [ menuCollapsed, setMenuCollapsed ] = useState(false);
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <AdminSider menuCollapsed = { menuCollapsed } />
      <Layout className='layout-admin' style = {{ marginLeft: menuCollapsed ? "80px" : "200px" }}>
        <Header className='layout-admin__header'>
          <MenuTop menuCollapsed = { menuCollapsed }  setMenuCollapsed = { setMenuCollapsed }/>
        </Header>
        <Content className='layout-admin__content'>
          <LoadRoutesAdmin routes={routes} />
        </Content>
        <Footer className='layout-admin__footer'>Miguel Barrera - 2020</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutesAdmin({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
