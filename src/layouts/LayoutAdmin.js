import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";

export default function LayoutAdmin( props ) {  // console.log(props);
  const { routes } = props; // console.log(routes);
  const { Header, Content, Footer } = Layout;
  
  return (
    <Layout>
      <h2>Menu Sider Admin </h2>
      <Layout>
        <Header> ... Header ...</Header>
        <Content>
          <LoadRoutesAdmin routes = { routes } />
        </Content>
        <Footer>Miguel Barrera - 2020</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutesAdmin({ routes }) { 
    // const { routes } = props
    //   console.log(props); 
  return (
  <Switch>
  { routes.map(( route, index ) => (
      <Route
      key = { index }
      path = { route.path }
      exact = { route.exact }
      component = { route.component }
      />
  ))}
  </Switch>
  );
}
