import React, { useEffect } from "react";
import Imgslide from "./Imgslide";
import DetailMain from "./DetailMain";
import { toggle } from "../../modules/Toast";
import ToastContainer from "../../containers/ToastContainer";
import { useSelector, useDispatch } from "react-redux";
import Index from "../../Components/Nav";

const Detail = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggle());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const check = useSelector(state => state.showToast.show);
  console.log(props);
  return (
    <div>
      {check && <ToastContainer />}
      <Index />
      <Imgslide params={props.match.params.name} />
      <DetailMain params={props.match.params.name} />
    </div>
  );
};

export default Detail;
