import React  from "react";
import styles from "./SQDashboard.module.css";
import DropdownPicker from "../../DropdownPicker";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import ModalKeep from "../../Modals/ModalKeep";

const SQDashboard = (props) =>  {
    return (
      <div style={{marginTop: '0.3rem'}}>
        <div className={styles.dashboard}>
          <div className={styles.searchRow}>
            <h5 style={{ fontWeight: 600 }}>{props.suppliers ? props.suppliers :props.rfq?props.rfq :props.rfqs} <p style={{marginTop:"10px",fontWeight:"700"}}>{props.rfqs?props.fabricationScrew:""}</p></h5>
            
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
              <button
                className={styles.createRFQbtn}
              >
              <ModalKeep/>
              </button>
            </div>
          </div>
          <div className={styles.filterRow}>
            <div className={styles.tabs}>
              <span style={{ marginRight: "0.7rem", color: "#0061F7" }}>
                {props.mysuppliers? props.mysuppliers : props.allquotes?props.allquotes:"Open Quotes"}(0)
              </span>
              <span style={{ marginRight: "0.7rem", color: "#767676" }}>
              {props.findsuppliers? props.findsuppliers : props.approvedquotes? props.approvedquotes:"Accepted Quotes"}(0)
              </span>
              <span style={{ marginRight: "0.7rem", color: "#767676" }}>{props.receivednda? props.receivednda:"Completed Quotes"}(0)</span>
              <span style={{ color: "#767676" }}>{props.rfqdetail}</span>
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
          {props.children}
        </div>
      </div>
    );
}

export default SQDashboard;