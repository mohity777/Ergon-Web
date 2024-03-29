import { Menu } from "antd";
import React, { memo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Logo from "../../dist/img/Seller/logo.png";
import { DRAWER_ITEMS } from "../../utils/constants";
import { getMenuItemKey } from "../../utils/functions";
import styles from "./Layout.module.css";

const DrawerContent = ({ containerClass, onPressMenuItem }) => {
  const location = useLocation();
  const history = useHistory();

  const onPressItem = (item) => {
    history.push(item.to);
    onPressMenuItem && onPressMenuItem();
  };

  return (
    <div className={containerClass}>
      <div className={styles.drawerHeader}>
        <img src={Logo} className={styles.logo} />
        <span>
          <h5 className={styles.headline}>Ergons</h5>
          <h5 className={styles.headline}>Tech</h5>
        </span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[getMenuItemKey(location.pathname)]}
      >
        {DRAWER_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <>
              <Menu.Item
                onClick={() => onPressItem(item)}
                key={item.key}
                icon={<Icon />}
              >
                {item.name}
              </Menu.Item>
            </>
          );
        })}
      </Menu>
    </div>
  );
};

export default memo(DrawerContent);
