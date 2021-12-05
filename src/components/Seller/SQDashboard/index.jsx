import React from "react";
import styles from "./SQDashboard.module.css";
import DropdownPicker from "../../DropdownPicker";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const SQDashboard = ({ children }) => {
  return (
    <div style={{ marginTop: "0.3rem" }}>
      <div className={styles.dashboard}>
        <div className={styles.searchRow}>
          <h5 style={{ fontWeight: 600 }}>SQ</h5>
          <div style={{ display: "flex" }}>
            <Input
              bordered={false}
              size="small"
              placeholder="Enter Keywords..."
              prefix={
                <SearchOutlined
                  style={{ color: "grey", marginRight: "0.2rem" }}
                />
              }
              className={styles.searchInput}
            />
            <button className={styles.createRFQbtn}>Create New RFQ</button>
          </div>
        </div>
        <div className={styles.filterRow}>
          <div className={styles.tabs}>
            <span style={{ marginRight: "0.7rem", color: "#0061F7" }}>
              Open quotes
            </span>
            <span style={{ marginRight: "0.7rem", color: "#767676" }}>
              Accepted quotes
            </span>
            <span style={{ color: "#767676" }}>Completed</span>
          </div>
          <div className={styles.filters}>
            <DropdownPicker placeholder="All dates" items={[]} />
            <span style={{ width: "1rem" }} />
            <DropdownPicker placeholder="All Categories" items={[]} />
            <span style={{ width: "1rem" }} />
            <DropdownPicker placeholder="Status" items={[]} />
          </div>
        </div>
      </div>
      <div className="site-layout-background" style={{ margin: "0px 1.5rem" }}>
        {children}
      </div>
    </div>
  );
};

export default SQDashboard;
