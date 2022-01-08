import React, { useEffect, useState, useRef } from "react";
import SQDashboard from "../SQDashboard";
import { SQ_PARAMS_TAB_INDEX, SQ_TABS } from "../../../utils/constants";
import SQCardListing from "../SQCardListing";
import { useDispatch, useSelector } from "react-redux";
import { getSqsByStatus } from "../../../store/actions/sqActions";
import ApplySQModal from "../ApplySQModal";
import { useHistory } from "react-router-dom";
import { getRfs } from "../../../store/actions/rfqActions";

const SQ = (props) => {
 const sqs = useSelector(state => state.sq.sqs);

 const [activeIndex, setActiveIndex] = useState(SQ_PARAMS_TAB_INDEX[`${new URLSearchParams(props.location.search).get('type')}`]);
 const [visible, setVisible] = React.useState(false);

 const selectedItem = useRef(null);

 const dispatch = useDispatch();
 const history = useHistory();

 useEffect(() => {
   if(!props.location.search) return history.push({
      pathname: '/SQ',
      search: '?type=OPEN'
   });
   const type = new URLSearchParams(props.location.search).get('type');
   setActiveIndex(SQ_PARAMS_TAB_INDEX[`${type}`]);
   if(type == "OPEN") dispatch(getRfs());
   else dispatch(getSqsByStatus(type));
 }, [props.location.search]);

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
      <ApplySQModal visible={visible} closeModal={closeModal} item={selectedItem.current} />
    </SQDashboard>
  );
};

export default SQ;
