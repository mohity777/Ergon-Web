import React, { useEffect, useState, useRef } from "react";
import SQDashboard from "../SQDashboard";
import { SQ_PARAMS_TAB_INDEX, SQ_TABS } from "../../../utils/constants";
import SQCardListing from "../SQCardListing";
import { useDispatch, useSelector } from "react-redux";
import { getSqs } from "../../../store/actions/sqActions";
import SqModal from "../SQModal";

const SQ = (props) => {
 const sqs = useSelector(state => state.sq.sqs);

 const [activeIndex, setActiveIndex] = useState(SQ_PARAMS_TAB_INDEX[`${new URLSearchParams(props.location.search).get('type')}`]);
 const [visible, setVisible] = React.useState(false);

 const selectedItem = useRef(null);

 const dispatch = useDispatch();

 useEffect(() => {
   setActiveIndex(SQ_PARAMS_TAB_INDEX[`${new URLSearchParams(props.location.search).get('type')}`])
 }, [props.location.search]);

 useEffect(()=>{
   dispatch(getSqs());
 },[])

  function closeModal() {
    setVisible(false);
    selectedItem.current = null;
  }

  const onApplyPressed = (item) => {
     selectedItem.current = item;
     setVisible(true);
  }

  return (
    <SQDashboard headline={'SQ'} activeIndex={activeIndex} tabs={SQ_TABS}>
      {sqs.map((item) => (
        <SQCardListing item={item} onApplyPressed={onApplyPressed} />
      ))}
      <SqModal visible={visible} closeModal={closeModal} item={selectedItem.current} />
    </SQDashboard>
  );
};

export default SQ;
