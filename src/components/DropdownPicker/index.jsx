import { Select } from "antd";
import React, { memo, useEffect, useState } from "react";
import styles from "./DropdownPicker.module.css";

const { Option } = Select;

const DropdownPicker = ({
  items,
  placeholder,
  onChange,
  labelExactractor,
  valueToSet,
  disabled,
  showArrow,
  valueExtractor,
  className
}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (valueToSet) {
      setState(valueToSet);
    }
  }, [valueToSet]);

  const onChangePicker = (val) => {
    setState(val);
    onChange(val);
  };

  return (
    <Select
      className={`${styles.dropdown} ${className}`}
      onChange={onChangePicker}
      placeholder={placeholder}
      disabled={disabled}
      showArrow={showArrow}
      value={state}
    >
      {items?.map((item, i) => (
        <Option key={i} value={valueExtractor ? item[valueExtractor] : item}>
          {labelExactractor ? item[labelExactractor] : item}
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
