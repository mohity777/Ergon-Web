import { AlignLeftOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useWindowSize } from "../../customHooks";
import NotificationIcon from "../../dist/img/Seller/notificationIcon.png";
import ProfileIcon from "../../dist/img/Seller/profileIcon.png";
import SunIcon from "../../dist/img/Seller/sun.png";
import {
  toggleDrawer,
  toggleSideMenu
} from "../../store/actions/drawerActions";
import { setUser } from "../../store/actions/userActions";
import styles from "./Layout.module.css";

const { Header: AntdHeader } = Layout;

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [width] = useWindowSize();
  const { drawer: { sideMenuCollapsed }, user } = useSelector((state) => state);

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
      <h6 style={{ fontWeight: 700, fontSize: '0.9rem', marginLeft: '0.8rem' }}>{user?.company?.companyName}</h6>
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
