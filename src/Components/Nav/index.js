import React, { useState } from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";
import Modal from "./NavModal/Modal";
import useModal from "./NavModal/useModal";

function Index(props) {
  const { isShowing, toggle } = useModal();

  const [isNavOpen, clickNav] = useState(false);

  function clickMobileNav() {
    clickNav(!isNavOpen);
  }
  return (
    <nav className="nav">
      <h1 className="logo">
        <NavLink to="/">
          <span></span>
        </NavLink>
      </h1>
      <div className="ul_wrapper">
        <ul className={`navbar_lists ${isNavOpen ? "open" : ""}`}>
          <li className="list_logo">
            <span className="mobile_logo"></span>
          </li>
          <li className={`navbar_list mobile`}>
            <Link to="/">홈</Link>
          </li>
          <li className="navbar_list">
            <Link to="/eatdeal">EAT딜</Link>
          </li>
          <li className="navbar_list">
            <Link to="/toplist">맛집 리스트</Link>
          </li>
          <li className="navbar_list close_button">
            <span className="x_button" onClick={clickMobileNav}>
              &times;
            </span>
          </li>
        </ul>
        <ul className="navbar_lists mobile">
          <li className="hamburger_li">
            <div className="hamburger" onClick={clickMobileNav}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </li>
        </ul>
        <span className="human_icon" onClick={toggle}></span>
        <Modal isShowing={isShowing} hide={toggle} />
      </div>
    </nav>
  );
}

export default Index;
