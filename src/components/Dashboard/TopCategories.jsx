import React from "react";

const data = [
  {
    title: "Fabrication",
    value: "8.2k",
    subTitle: "Dailiy lifestyle articles",
    subValue: "+472",
    color: "#5F2EEA",
  },
  {
    title: "Fabrication",
    value: "8.2k",
    subTitle: "Dailiy lifestyle articles",
    subValue: "+472",
    color: "#0061F7",
  },
  {
    title: "Fabrication",
    value: "8.2k",
    subTitle: "Dailiy lifestyle articles",
    subValue: "+472",
    color: "#F26464",
  },
  {
    title: "Fabrication",
    value: "8.2k",
    subTitle: "Dailiy lifestyle articles",
    subValue: "+472",
    color: "#4BDE97",
  },
  {
    title: "Fabrication",
    value: "8.2k",
    subTitle: "Dailiy lifestyle articles",
    subValue: "+472",
    color: "#F26464",
  },
  {
    title: "Fabrication",
    value: "8.2k",
    subTitle: "Dailiy lifestyle articles",
    subValue: "+472",
    color: "#4BDE97",
  },
  {
    title: "Fabrication",
    value: "8.2k",
    subTitle: "Dailiy lifestyle articles",
    subValue: "+472",
    color: "#F26464",
  },
  {
    title: "Fabrication",
    value: "8.2k",
    subTitle: "Dailiy lifestyle articles",
    subValue: "+472",
    color: "#4BDE97",
  },
];

const TopCategories = (props) => {
  return (
    <div style={{ display: "flex", backgroundColor: "white",flexGrow:1, padding: '0.8rem', flexDirection: 'column', overflowY: 'scroll' }}>
      <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Top categories</span>
      <span style={{ fontWeight: 400, fontSize: '0.74rem', color: '#B9B9B9', marginBottom: '1.2rem' }}>28 Categories, 200 Quotes</span>
      <div style={{ height: 280 }}>
      {data.map(item => (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0.3rem 0', borderBottom: '1 solid #EEEEEE' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <span style={{ fontWeight: 600, fontSize: '0.76rem' }}>{item.title}</span>
          <span style={{ fontWeight: 600, fontSize: '0.76rem' }}>{item.value}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.2rem 0rem'}}>
          <span style={{ fontWeight: 400, color: '#B9B9B9', fontSize: '0.72rem' }}>{item.subTitle}</span>
          <div style={{ padding: '0rem 0.2rem', position: 'relative', borderRadius: 5 }}>
            <div style={{ position: 'absolute', opacity: 0.15, top: 0, bottom: 0, left: 0, right: 0, backgroundColor: item.color, borderRadius: 5 }}/>
            <span style={{ fontWeight: 500, color: item.color, fontSize: '0.6rem' }}>{item.subValue}</span>
          </div>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
};

export default TopCategories;
