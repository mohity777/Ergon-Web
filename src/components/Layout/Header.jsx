import React, { memo } from "react";
import { Layout } from "antd";
import NotificationIcon from "../../dist/img/Seller/notificationIcon.png";
import ProfileIcon from "../../dist/img/Seller/profileIcon.png";
import SunIcon from "../../dist/img/Seller/sun.png";
import styles from "./Layout.module.css";
import { AlignLeftOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleDrawer,
  toggleSideMenu,
} from "../../store/actions/drawerActions";
import { useWindowSize } from "../../customHooks";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { setUser } from "../../store/actions/userActions";

const { Header: AntdHeader } = Layout;

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [width] = useWindowSize();
  const { sideMenuCollapsed } = useSelector((state) => state.drawer);

  const SideMenuCollapseIcon = sideMenuCollapsed
    ? MenuUnfoldOutlined
    : MenuFoldOutlined;

  const logout = () => {
    localStorage.removeItem("token");  
    dispatch(setUser({token: null}))
    history.replace("/Login"); 
  }

  return (
    <AntdHeader className={`site-layout-background ${styles.header}`}>
      {width < 850 ? (
        <AlignLeftOutlined onClick={() => dispatch(toggleDrawer())} />
      ) : (
        <SideMenuCollapseIcon onClick={() => dispatch(toggleSideMenu())} />
      )}
      <div style={{ flex: 1 }} />
      <div>
        <img
          src={SunIcon}
          style={{ marginRight: "0.6rem", height: "2rem", width: "2rem" }}
        />
        <img
          src={NotificationIcon}
          style={{ marginRight: "0.6rem", height: "2rem", width: "2rem" }}
        />
        <img onClick={logout} src={ProfileIcon} style={{ height: "2rem", width: "2rem", cursor: 'pointer' }} />
      </div>
    </AntdHeader>
  );
};

export default memo(Header);
