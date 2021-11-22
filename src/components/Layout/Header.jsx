import React, { memo } from "react"
import { Layout } from "antd";
import NotificationIcon from "../../dist/img/Seller/notificationIcon.png";
import ProfileIcon from "../../dist/img/Seller/profileIcon.png";
import SunIcon from "../../dist/img/Seller/sun.png";

const { Header: AntdHeader } = Layout;

const Header = props => {
    return (
      <AntdHeader
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
      </AntdHeader>
    );
}

export default memo(Header);