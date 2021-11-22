import { Layout as AntdLayout } from "antd";
import React, { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Drawer from "./Drawer";

const { Content } = AntdLayout;

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed((state) => !state);

  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <Drawer collapsed={collapsed} />
      <AntdLayout className="site-layout" style={{ marginLeft: 230 }}>
        <Header />
        <Content
          style={{
            overflow: "hidden",
            marginBottom: "1.5rem",
          }}
        >
         {children}
        </Content>
        <Footer />
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
