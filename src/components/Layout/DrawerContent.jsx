import React from "react";
import { Menu } from "antd";
import styles from "./Layout.module.css";
import Logo from "../../dist/img/Seller/logo.png";
import { DRAWER_ITEMS } from "../../utils/constants";
import { useLocation, useHistory } from "react-router-dom";
import { getMenuItemKey } from "../../utils/functions";

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
              {item.name == "SQ" && <h5 className={styles.system}>SYSTEM</h5>}
            </>
          );
        })}
      </Menu>
    </div>
  );
};

export default DrawerContent;
