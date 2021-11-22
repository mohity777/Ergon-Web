import React, { memo } from "react";
import { Layout as AntdLayout, Menu } from "antd";
import styles from "./Layout.module.css";
import DrawerLogo from "../../dist/img/Seller/drawerLogo.png";
import { Link } from "react-router-dom";
import { DRAWER_ITEMS } from "../../utils/constants";

const { Sider } = AntdLayout;

const Drawer = ({collapsed}) => {
  return (
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
        {DRAWER_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <>
              <Menu.Item key={item.key} icon={<Icon />}>
                <Link to={item.to}>{item.name}</Link>
              </Menu.Item>
              {item.key == "5" && <h5 className={styles.system}>SYSTEM</h5>}
            </>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default memo(Drawer);
