// @flow strict

import React, { useState } from "react";
import "./index.scss";
import newImg from "../../Images/new.png";
import food from "../../Images/food.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";
const EatDealImage = () => {
  const [sale, setSale] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const eatImg = {
    display: "flex",
    flexDirection: "row"
  };
  const column = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: "10px"
  };
  const ImgStyle = styled.div`
    position: absolute
    display: flex
    flex-Direction: column
    bottom: 1px
    padding-Bottom: 10px
  `;
  const SaleBox = styled.div`
    position: absolute
    display: flex
    flex-Direction: column
    right: 1px
    bottom: 1px
    padding-Bottom: 10PX
    padding-Right: 10px
  `;
  const Percent = styled.div`
    display: flex
    align-Items: center
    justify-Content: center
    width: 30%
    height: 25px
    border-Radius: 0 7px  7px 0
    background-Clip: padding-box
    background-Color: #14cbb2
    color: white
    font-Weight: 500
  `;
  const SaleMoney = styled.span`
    margin-Left: auto
    color: white
    font-Size: 13px
    text-Decoration: line-through
  `;
  const Money = styled.span`
   color: white
   font-size: 20px
   font-weight: 700`;
  return (
    <div className="eat_deal">
      <Link to="./detail">
        <div
          className="eat_img"
          style={{
            backgroundImage: `url(${food}`
          }}
        >
          <div style={eatImg}>
            <ImgStyle>
              <img src={newImg}></img>

              <Percent>
                <span>15%</span>
              </Percent>
            </ImgStyle>
            <SaleBox>
              <SaleMoney>￦6,000</SaleMoney>
              <Money>￦50,000</Money>
            </SaleBox>
          </div>
        </div>
      </Link>
      <div className="explain">
        <div style={column}>
          <span className="area_name">[광화문] 다만 프레르</span>
          <span className="food_explain">아쌈 밀크티 빙수 + 홍차세트</span>
        </div>
      </div>
    </div>
  );
};

export default EatDealImage;
