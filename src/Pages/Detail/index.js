import React, { useEffect } from "react";
import Imgslide from "./Imgslide";
import DetailMain from "./DetailMain";
import { toggle } from "../../modules/Toast";
import ToastContainer from "../../containers/ToastContainer";
import { useSelector, useDispatch } from "react-redux";

const Detail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggle());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const check = useSelector(state => state.showToast.show);
  return (
    <div>
      {check && <ToastContainer />}
      <Imgslide />
      <DetailMain />
    </div>
  );
};

export default Detail;
