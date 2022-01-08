import React, { useState } from "react";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 15, color: 'white'}} spin />;

const ButtonWithLoader = ({
  btnStyle,
  btnClassName,
  onClick,
  text,
  children,
}) => {
  const [loading, setLoading] = useState(false);

  const onPress = async () => {
    if (!onClick) return;
    setLoading(true);
    await onClick();
    setLoading(false);
  };

  return (
    <button
      onClick={onPress}
      style={{ cursor: "pointer", ...btnStyle }}
      className={btnClassName}
    >
      {loading ? <Spin indicator={antIcon}/> : children ? children : text}
    </button>
  );
};

export default ButtonWithLoader;
