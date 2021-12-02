import { Layout, Menu, Input, Button } from "antd";
import {
  DropboxOutlined,
  MailFilled,
  HomeFilled,
  FileTextFilled,
  PictureFilled,
  SnippetsFilled,
  EditFilled,
  SettingFilled,
  TeamOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import styles from "./SideMenu.module.css";
import DrawerLogo from "../../dist/img/Seller/drawerLogo.png";
import NotificationIcon from "../../dist/img/Seller/notificationIcon.png";
import ProfileIcon from "../../dist/img/Seller/profileIcon.png"
import SunIcon from "../../dist/img/Seller/sun.png";
import DropdownPicker from "../DropdownPicker";
import { Link } from "react-router-dom";
import ModalKeep from "../Modals/ModalKeep";
import Modale from "../Modal/Modal";

const { Header, Sider, Content, Footer } = Layout;

const SideMenu = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed((state) => !state);


  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={styles.drawer}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className={styles.drawerHeader}>
          <img src={DrawerLogo} className={styles.logo} />
          <span>
            <h5 className={styles.headline}>Erogan</h5>
            <h5 className={styles.subheadline}>Dashboard</h5>
          </span>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeFilled />}>
          <Link to='/'>
         Dashboard
         </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextFilled />}>
          <Link to='/RFQ'>
          RFQ
         </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DropboxOutlined />}>
          <Link to='/Suppliers'>
          Suppliers
         </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<PictureFilled />}>
          <Link to='/AllQuotes'>
          Company Profile
         </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<SnippetsFilled />}>
            <Link to='/SQCardListing'>
             SQ
            </Link>
          </Menu.Item>
          <h5 className={styles.system}>SYSTEM</h5>
          <Menu.Item key="6" icon={<MailFilled />}>
          <Link to='/RfqPostDeal'>
          Notifications
         </Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<EditFilled />}>
            Appearance
          </Menu.Item>
          <Menu.Item key="8" icon={<TeamOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="9" icon={<SettingFilled />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 230 }}>
        <Header
          className="site-layout-background"
          style={{
            padding: "0 1rem",
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "white",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={SunIcon} style={{ marginRight: "0.6rem" }} />
            <img src={NotificationIcon} style={{ marginRight: "0.6rem" }} />
            <img src={ProfileIcon} />
          </div>
        </Header>
        <Content
          style={{
            overflow: "hidden",
            marginTop: "0.3rem",
            marginBottom: "1.5rem",
          }}
        >
         
            <div className={styles.filterRow}>
             
            </div>
       
          <div
            className="site-layout-background"
            style={{ margin: "0px 1.5rem" }}
          >
            {children}
          </div>
        </Content>
        <Footer className={styles.footer}>
          <div>2021 © Elegant Dashboard - elegant-dashboard.com</div>
          <div>
            <span style={{ marginRight: 10, marginLeft: 10 }}>About</span>
            <span style={{ marginRight: 10 }}>Support</span>
            <span>Purchase</span>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SideMenu;
