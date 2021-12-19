import React, { memo } from "react";
import { Select } from "antd";
import styles from "./DropdownPicker.module.css";

const { Option } = Select;

const DropdownPicker = ({ items, placeholder, onChange, label, value }) => {
  return (
    <Select
      className={`${styles.dropdown}`}
      onChange={onChange}
      placeholder={placeholder}
    >
      {items.map((item, i) => (
        <Option key={i} value={item?.[value]}>
          {item?.[label]}
        </Option>
      ))}
    </Select>
  );
};

export default memo(DropdownPicker);
// import React, { useMemo, useState } from "react";
// import { Menu, Dropdown, Button} from "antd";
// import { DownOutlined } from "@ant-design/icons";

// const DropdownPicker = ({items, title, onChange }) => {
//   const [value, setValue] = useState(null);

//   function handleMenuClick(e) {
//     setValue(items[e.key].label);
//     onChange && onChange();
//   }

//   const menu = useMemo(
//     () => (
//       <Menu onClick={handleMenuClick} style={{ width: "fit-content" }}>
//         {items.map((item) => (
//           <Menu.Item key={item.value}>{item.label}</Menu.Item>
//         ))}
//       </Menu>
//     ),
//     [handleMenuClick,items]
//   );

//   return (
//     <Dropdown overlay={menu} destroyPopupOnHide>
//       <div>
//         <Button style={{ color: value ? "black" : "lightgray" }}>
//           {value || title}
//           <DownOutlined
//             style={{
//               fontSize: 12,
//               display: "inline-block",
//               verticalAlign: "middle",
//             }}
//           />
//         </Button>
//       </div>
//     </Dropdown>
//   );
// };

// export default DropdownPicker;
