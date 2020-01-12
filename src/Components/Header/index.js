import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header_img">
          <div className="header_p_wrapper">
            <p>솔직한 리뷰, 믿을 수 있는 평점!</p>
            <p>망고플레이트</p>
            <div className="header_search">
              <span className="search_icon" />
              <label>
                <input className="search" type="text" placeholder="식당 이름" />
                <input className="search_button" value="검색" type="submit" />
              </label>
            </div>
            <Link to="/eat_deal">
              <img
                className="eat_deal"
                src={require("../../Images/eat.png")}
                alt="sad"
              />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
