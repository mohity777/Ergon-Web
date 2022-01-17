import React from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";

const GlobalLoader = () => {
  const { loading } = useSelector((state) => state.globalLoader);
  
  if (loading)
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          display: 'flex',
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 10,
        }}
      >
        <Spin tip="Loading..." style={{ color: "white" }} />
      </div>
    );

  return null;
};

export default GlobalLoader;
