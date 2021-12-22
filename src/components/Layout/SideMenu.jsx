import React, { memo } from "react";
import { Layout } from "antd";
import styles from "./Layout.module.css";
import DrawerContent from "./DrawerContent";
import { useSelector } from "react-redux";

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
