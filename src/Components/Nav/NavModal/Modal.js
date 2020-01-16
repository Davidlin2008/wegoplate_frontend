import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../NavModal/modal.scss";
import { Link } from "react-router-dom";

const Modal = ({ isShowing, hide, isLoggedin }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {isLoggedin ? (
                <Link to="/" className="login_wrapper">
                  <span className="login_button">로그아웃</span>
                </Link>
              ) : (
                <Link to="/signin" className="login_wrapper">
                  <span className="login_button">로그인</span>
                </Link>
              )}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
