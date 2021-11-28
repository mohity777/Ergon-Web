import { Layout as AntdLayout } from "antd";
import React from "react";
import styles from "./Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Drawer from "./Drawer";

const { Content } = AntdLayout;

const Layout = ({ children }) => {
  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <SideMenu />
      <Drawer />
      <AntdLayout className={`site-layout ${styles.siteLayout}`}>
        <Header />
        <Content className={styles.content}>{children}</Content>
        <Footer />
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
