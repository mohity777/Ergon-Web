import React  from "react";
import styles from "./SQDashboard.module.css";
import DropdownPicker from "../../DropdownPicker";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const SQDashboard = ({ children }) =>  {
    return (
      <div style={{marginTop: '0.3rem'}}>
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
                style={{
                  background: "#EFF0F6",
                  borderRadius: "0.4rem",
                  marginRight: "0.5rem",
                  width: "fit-content",
                }}
              />
              <button
                style={{
                  backgroundColor: "#2F49D1",
                  color: "white",
                  fontSize: "0.65rem",
                  fontWeight: 400,
                  width: "7rem",
                  borderRadius: "0.3rem",
                  lineHeight: "normal",
                }}
              >
                Create New RFQ
              </button>
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
              <DropdownPicker title="All dates" items={[]} />
              <span style={{ width: "1rem" }} />
              <DropdownPicker title="All Categories" items={[]} />
              <span style={{ width: "1rem" }} />
              <DropdownPicker title="Status" items={[]} />
            </div>
          </div>
        </div>
        <div
          className="site-layout-background"
          style={{ margin: "0px 1.5rem" }}
        >
          {children}
        </div>
      </div>
    );
}

export default SQDashboard;