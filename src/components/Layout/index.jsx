import { Layout as AntdLayout } from "antd";
import React from "react";
import styles from "./Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Drawer from "./Drawer";
import { useSelector } from "react-redux";

const { Content } = AntdLayout;

const Layout = ({ children }) => {
  const { sideMenuCollapsed } = useSelector((state) => state.drawer);

  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <SideMenu />
      <Drawer />
      <AntdLayout className={`site-layout ${sideMenuCollapsed ? styles.collapsedSiteLayout : styles.siteLayout}`}>
        <Header />
        <Content className={styles.content}>{children}</Content>
        <Footer />
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
