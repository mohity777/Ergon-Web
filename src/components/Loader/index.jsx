import React from "react";
import { Spin } from "antd";

const Loader = ({ loading }) => {
    
    if(true) return(
     <div style={{zIndex: 300, overflow: 'scroll', backgroundColor: 'black', position: 'absolute', top:0, left:0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
       <Spin tip="Loading..." />
     </div>
    ) 

    return <></>
}

export default Loader;