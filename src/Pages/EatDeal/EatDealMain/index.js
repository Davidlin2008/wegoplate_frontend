import React, { useEffect, useState } from "react";
import "./index.scss";
import EatDealImage from "../../../../src/Components/EatDealImage";
import styled from "styled-components";
import EatDealModal from "../../../../src/Components/EatDealModal";
import NavBar from "../../../../src/Components/NavBar";
import { useAsync } from "react-async";
import { withRouter } from "react-router-dom";

const EatDealMain = props => {
  const [result, setResult] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch("http://10.58.7.97:8000/restaurant/eat_deal")
      .then(res => res.json())
      .then(res => setResult(res.result));
  }, []);

  const append = a => {
    setResult(a);
  };

  const goToDetail = a => {
    props.history.push(`/EatDetail/${a}`);
  };

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

    z-index: 101;

    color: #ff7100;
    font-weight: 600;
    opacity: 10;
    cursor: pointer;
    font-size: 12px;
    @media (max-width: 768px) {
      width: 18%;
    }
  `;

  if (result === undefined) {
    return <></>;
  }
  console.log(result);

  return (
    <div className="eat_main">
      <NavBar></NavBar>
      <div className="areaNav">
        <EatBtn onClick={openModal}>지역 선택</EatBtn>
      </div>
      <EatDealModal append={append} isOpen={modal} close={closeModal} />
      <DealBlock>
        {result.map((el, index) => (
          <EatDealImage
            onclick={() => goToDetail(el.eat_deal_id)}
            key={index}
            id={el.eat_deal_id}
            title={el.title}
            restId={el.restaurant_id}
            image={el.image.images}
            menu={el.menu}
            discount={el.discount_rate}
            price={el.price}
            disPrice={el.discounted_price}
          />
        ))}
      </DealBlock>
    </div>
  );
};

export default withRouter(EatDealMain);
