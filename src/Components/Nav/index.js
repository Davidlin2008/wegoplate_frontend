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
        <li className="navbar_list">
          <span></span>
        </li>
      </ul>
    </nav>
  );
}

export default index;
