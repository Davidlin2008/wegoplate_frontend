import React from "react";
import { connect } from "react-redux";
import { toggle } from "../modules/Toast";
import ToastView from "../Components/ToastView";

const ToastContainer = toggle => {
  return <ToastView toggle={toggle} />;
};

const mapStateToProps = state => ({ show: state.showToast.show });
const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggle())
});

export default connect(mapStateToProps, mapDispatchToProps)(ToastContainer);
