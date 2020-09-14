import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic( props ) {
  const { routes } = props; //  (1) Lo mismo que  esto
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu Sider Basic User</h2>
      <Layout>
        <Content>
          <LoadRoutesBasic routes={ routes } />
        </Content>
        <Footer> Miguel Barrera - (2020) Basic Users</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutesBasic({ routes }) {
  //  (1) Lo mismo que  esto
  // console.log(routes);
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