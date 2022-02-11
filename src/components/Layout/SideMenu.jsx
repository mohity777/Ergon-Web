import { Layout } from "antd";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import DrawerContent from "./DrawerContent";
import styles from "./Layout.module.css";

const { Sider } = Layout;

const SideMenu = (props) => {
    const { sideMenuCollapsed } = useSelector((state) => state.drawer);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={sideMenuCollapsed}
      className={sideMenuCollapsed ? styles.collapsedMenu : styles.menu}
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <DrawerContent />
    </Sider>
  );
};

export default memo(SideMenu);
