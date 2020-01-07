import React from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

function index(props) {
  return (
    <nav className="nav">
      <h1 className="logo">
        <NavLink to="/">
          <span></span>
        </NavLink>
      </h1>
      <div className="ul_wrapper">
        <ul className="navbar_lists">
          <li className="navbar_list">
            <Link to="/eat_deal">EAT딜</Link>
          </li>
          <li className="navbar_list">
            <Link to="/top_lists">맛집 리스트</Link>
          </li>
          <li className="navbar_list">
            <Link to="/mango_picks">망고 스토리</Link>
          </li>
        </ul>
        <ul className="navbar_lists mobile">
          <li>
            <div className="hamburger">
              {/* <div className={`hamburger ${this.state. ? 'active' : ''}`}> */}
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </li>
        </ul>
        <span className="human_icon"></span>
      </div>
    </nav>
  );
}

export default index;
