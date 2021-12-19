import React, { useState } from "react";
import styles from "./SQDashboard.module.css";
import DropdownPicker from "../../DropdownPicker";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Modal from "../../Modal/Modal";
import { useHistory } from "react-router-dom";

const SQDashboard = ({ children, tabs, activeIndex, headline }) => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const createRfq = () => {
    setVisible(true);
  };

  const closeRfq = () => {
    setVisible(false);
  };

  const onPressTab = (item) => {
      history.push(item.path);
  }

  return (
    <div style={{ marginTop: "0.3rem" }}>
      <div className={styles.dashboard}>
        <div className={styles.searchRow}>
          <h5 style={{ fontWeight: 600 }}>{headline}</h5>
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
            <button onClick={createRfq} className={styles.createRFQbtn}>
              Create New RFQ
            </button>
          </div>
        </div>
        <div className={styles.filterRow}>
          <div className={styles.tabs}>
            {tabs?.map((item, index) => (
              <span
                onClick={() => onPressTab(item)}
                style={{
                  marginRight: "0.7rem",
                  color: activeIndex === index ? "#0061F7" : "black",
                  cursor: "pointer",
                }}
              >
                {item.name}
              </span>
            ))}
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
      <Modal visible={visible} closeModal={closeRfq} />
    </div>
  );
};

export default SQDashboard;
