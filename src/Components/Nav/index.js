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
          <li className="navbar_list">
            <Link to="/eat_deal">EAT딜</Link>
          </li>
          <li className="navbar_list">
            <Link to="/top_lists">맛집 리스트</Link>
          </li>
          <li className="navbar_list">
            <Link to="/mango_picks">망고 스토리</Link>
          </li>
          <li>
            <span onClick={clickMobileNav}>x</span>
          </li>
        </ul>
        <ul className="navbar_lists mobile">
          <li className="hamburger_li">
            <div className="hamburger" onClick={clickMobileNav}>
              {/* <div className={`hamburger ${this.state. ? 'active' : ''}`}> */}
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
