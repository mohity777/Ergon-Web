import React, { memo } from "react";
import { Drawer as AntdDrawer } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { toggleDrawer } from "../../store/actions/drawerActions";
import DrawerContent from "./DrawerContent";
import styles from "./Layout.module.css";

const Drawer = (props) => {
  const dispatch = useDispatch();
  const { drawerVisible } = useSelector((state) => state.drawer);

  return (
    <AntdDrawer
      placement="left"
      onClose={() => dispatch(toggleDrawer())}
      visible={drawerVisible}
    >
      <DrawerContent containerClass={styles.drawerContainer} onPressMenuItem={() => dispatch(toggleDrawer())}/>
    </AntdDrawer>
  );
};

export default memo(Drawer);
