import React, { memo, useEffect, useState } from "react";
import styles from "./CustomInput.module.css";

const CustomInput = ({
  onChange,
  onKeyUp,
  valueToSet,
  placeholder,
  label,
  containerClassName,
  inputClassName,
  labelClassName,
  children,
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (valueToSet != undefined && valueToSet != null) {
      setValue(valueToSet);
      onChange && onChange({ target: { value: valueToSet } });
    }
  }, [valueToSet]);

  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <div style={{ display: 'flex' }}>
        <h5 className={`${styles.label} ${labelClassName}`}>{label}</h5>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChange && onChange(e);
          }}
          onKeyUp={(e) => {
            onKeyUp && onKeyUp(e);
          }}
          placeholder={placeholder}
          className={`${styles.input} ${inputClassName}`}
        />
      </div>
      {children}
    </div>
  );
};

export default memo(CustomInput);
