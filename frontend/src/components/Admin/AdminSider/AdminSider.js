import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';

import './AdminSider.scss';

export default function AdminSider( props ) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;
  return (
    <Sider className="admin-sider" theme = 'dark' collapsed = { menuCollapsed }>
      <Menu theme = "dark" mode = "inline" defaultSelectedKeys = {["1"]}>
        <Menu.Item key = "1">
          <Link to = {'/admin'}>
          <HomeOutlined/>
            <span className = "nav-text"> home </span>
          </Link>
        </Menu.Item>
        <Menu.Item key='2'>
            <Link to = {'/admin/menu-web'}>
            <MenuOutlined/>
                <span className = 'nav-text'> Menu Web</span>
            </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
