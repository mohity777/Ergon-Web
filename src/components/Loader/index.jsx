import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return(
     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',height: '100%'}}>
       <Spin tip="Loading..." style={{color: 'black'}}/>
     </div>
    ) 
}

export default Loader;