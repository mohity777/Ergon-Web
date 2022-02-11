import { FileTextOutlined, RiseOutlined } from "@ant-design/icons";
import React, { memo } from "react";
import { View } from 'react-native';

const data = [
  {
    title: "Total RFQs",
    value: 222,
  },
  {
    title: "Open RFQs",
    value: 22,
  },
  {
    title: "Closed RFQs",
    value: 222,
  },
  {
    title: "Total SQs",
    value: 222,
  },
  {
    title: "Open SQs",
    value: 22,
  },
  {
    title: "Closed SQs",
    value: 222,
  },
];

const RowComponent = memo(({ data, style }) => {
  return(
     <View style={[{flexDirection: 'row', flex:1}, style]}>
      {data.map((item, i) => (
        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', paddingHorizontal: '0.8rem', height: '100%', marginLeft: '0.5rem', borderRadius: '0.5rem', flexDirection: 'row' }}>
          <View style={{ height: '2.8rem', width: '2.8rem', borderRadius: '2.8rem', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(220,220,220)' }}>
            <View style={{ padding: '0.3rem', borderRadius: '0.2rem', backgroundColor: '#5887FF' }}>
              <FileTextOutlined style={{ color: 'white' , fontSize: '0.85rem'  }}/>
            </View>
          </View>
          <View style={{ flex: 1, paddingHorizontal: '0.5rem', alignItems: 'flex-start'}}>
            <h6 style={{ fontSize: '0.8rem', fontWeight: 600 }}>{item.value}</h6>
            <h6 style={{ color: '#B9B9B9', fontSize: '0.7rem', fontWeight: 400 }}>{item.title}</h6>
          </View>
       </View>
      ))}
    </View>
  )
})

const DashboardHeader = props => {
    return(
      <View style={{ flexDirection: 'row', width: '100%', height: '12.9rem', marginBottom: '1.5rem' }}>
       <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', width: '18%', borderRadius: '0.5rem' }}>
         <h5 style={{ fontWeight: 600, fontSize: '0.85rem' }}>Rs. 1.2 Cr</h5>
         <h5 style={{color: '#B9B9B9', fontSize: '0.7rem', fontWeight: 400 }}>Total Business</h5>
         <h5 style={{ color: '#4BDE97', fontSize: '0.7rem', marginTop: '0.5rem' }}><RiseOutlined style={{ fontSize: '0.75rem' }}/>4.07% <span style={{color: '#B9B9B9', fontWeight: 400 }}>Last Month</span></h5>
       </View>
       <View style={{ flex: 1, flexDirection: 'column'}}>
           <RowComponent data={data.slice(0,3)} />
           <RowComponent data={data.slice(3,7)} style={{ marginTop: '0.5rem' }}/>
       </View>
      </View>
    )
}

export default memo(DashboardHeader);