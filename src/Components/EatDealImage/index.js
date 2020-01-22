// @flow strict

import React, { useState } from "react";
import "./index.scss";
import newImg from "../../Images/new.png";
import food from "../../Images/food.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EatDealImage = props => {
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
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 1px;
    padding-bottom: 10px;
  `;
  const SaleBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 1px;
    bottom: 1px;
    padding-bottom: 10px;
    padding-right: 10px;
  `;
  const Percent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 25px;
    border-radius: 0 7px 7px 0;
    background-clip: padding-box;
    background-color: #14cbb2;
    color: white;
    font-weight: 500;
  `;
  const SaleMoney = styled.span`
    margin-left: auto;
    color: white;
    font-size: 13px;
    text-decoration: line-through;
  `;
  const Money = styled.span`
    color: white;
    font-size: 20px;
    font-weight: 700;
  `;

  return (
    <div className="eat_deal">
      {/* <Link to="./eatdetail" id={props.id}> */}
      <div
        onClick={props.onclick}
        className="eat_img"
        style={{
          backgroundImage: `url(${props.image}`
        }}
      >
        <div style={eatImg}>
          <ImgStyle>
            <img src={newImg}></img>

            <Percent>
              <span>{props.discount}%</span>
            </Percent>
          </ImgStyle>
          <SaleBox>
            <SaleMoney>￦{props.disPrice}</SaleMoney>
            <Money>￦{props.price}</Money>
          </SaleBox>
        </div>
      </div>
      {/* </Link> */}
      <div className="explain">
        <div style={column}>
          <span className="area_name">{props.title}</span>
          <span className="food_explain">{props.menu}</span>
        </div>
      </div>
    </div>
  );
};

export default EatDealImage;
