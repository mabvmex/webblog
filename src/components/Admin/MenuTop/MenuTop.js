import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import PersonalLogo from "../../../assets/img/png/logo-white.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
      <Link to = {'admin/perreoIntenso'}>
        <img className="menu-top__left-logo" src={ PersonalLogo } alt="Miguel Barrera" />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          { menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
          {/* <Icon type = {menuCollapsed ? 'menu-unfold': 'menu-fold'} /> */}
        </Button>
        </Link>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("Click-login/logout")}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
