import React, { useEffect, useState } from "react";
import "./index.scss";
import EatDealImage from "../../../../src/Components/EatDealImage";
import styled from "styled-components";
import EatDealModal from "../../../../src/Components/EatDealModal";
import NavBar from "../../../../src/Components/NavBar";
const EatDealMain = () => {
  useEffect(() => {
    fetch("http://localhost:3000/data.json").then(data => {});
  }, []);
  const [eatArr, setEatArr] = useState([]);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  const DealBlock = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    overflow-x: hidden;
  `;

  const EatBtn = styled.button`
    position: absolute;
    width: 12%;
    height: 30px;
    margin-left: 15px;
    border-radius: 30px;
    border: 1px solid #ff7100;
    background-color: white;
    zindex: 101;
    color: #ff7100;
    font-weight: 600;
    opacity: 10;
    cursor: pointer;
    font-size: 12px;
    @media (max-width: 768px) {
      width: 18%;
    }
  `;
  return (
    <div className="eat_main">
      <NavBar></NavBar>
      <div className="areaNav">
        <EatBtn onClick={openModal}>지역 선택</EatBtn>
      </div>
      <EatDealModal isOpen={modal} close={closeModal} />
      <DealBlock>
        <EatDealImage />
        <EatDealImage />
        <EatDealImage />
        <EatDealImage />
        <EatDealImage />
        <EatDealImage />
        <EatDealImage />
        <EatDealImage />
      </DealBlock>
    </div>
  );
};

export default EatDealMain;
