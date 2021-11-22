import React, { memo } from "react";
import { Layout } from "antd";
import styles from "./Layout.module.css";

const { Footer: AntdFooter } = Layout;

const Footer = props => {
    return (
      <AntdFooter className={styles.footer}>
        <div>2021 © Elegant Dashboard - elegant-dashboard.com</div>
        <div>
          <span style={{ marginRight: 10, marginLeft: 10 }}>About</span>
          <span style={{ marginRight: 10 }}>Support</span>
          <span>Purchase</span>
        </div>
      </AntdFooter>
    );
}

export default memo(Footer);