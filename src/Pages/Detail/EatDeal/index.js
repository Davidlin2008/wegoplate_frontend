import React, { useState, useEffect } from "react";
import fetchData from "../../../Utils/Fetch";
import styled from "styled-components";

const EatDeal = () => {
  const [slide, setSlide] = useState(0);
  const [eatData, setData] = useState([]);

  useEffect(() => {
    fetchData("http://localhost:3000/Data/Data.json").then(res => {
      setData(res.eatDeal);
    });
  }, []);

  const slideList = eatData.map((el, index) => (
    <DivEachCard key={index}>
      <IgEatDeal url={el.url} />
      <PFoodName>{el.name}</PFoodName>
      <SpanSalePercent>{el.saleper}</SpanSalePercent>
      <SpanCurrentPrice>{el.cureentPrice}</SpanCurrentPrice>
      <SpanPrevPrice>{el.prevPrice}</SpanPrevPrice>
    </DivEachCard>
  ));

  const handdleMove = value => {
    if (slide <= 0 && slide > (eatData.length - 2) * -312) {
      setSlide(value);
    } else {
      setSlide(0);
    }
  };

  if (eatData.length === 0) return null;
  return (
    <DivRstMain>
      <DivEatLeft>
        <PDealLabel>EAT딜</PDealLabel>
      </DivEatLeft>
      <DivEatRight>
        <DivRightHeader>
          <SpanSectionTitle>
            할인된 가격으로 인기 메뉴를 맛볼 수 있는 기회!
          </SpanSectionTitle>
        </DivRightHeader>
        <DivHiddenWrapper>
          <DivSliderContainer left={slide}>{slideList}</DivSliderContainer>
          <ButtonToLeft
            onClick={() => {
              handdleMove(slide + 312);
            }}
          />
          <ButtonToRight
            onClick={() => {
              handdleMove(slide - 312);
            }}
          />
        </DivHiddenWrapper>
      </DivEatRight>
    </DivRstMain>
  );
};

export default EatDeal;

const DivRstMain = styled.div`
  border-top: 1px solid #dbdbdb;
  display: flex;
  border-bottom: 1px solid #e9e9e9;
`;

const DivEatLeft = styled.div`
  position: relative;
  display: block;
  width: 100px;
  margin-right: 10px;
  padding-top: 22px;
  &:before {
    background-color: rgba(20, 203, 178, 0.6);
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    display: block;
    width: 100px;
    height: 3px;
  }
`;

const PDealLabel = styled.p`
  color: #14cbb2;
  font-size: 14px;
  font-weight: bold;
`;

const DivEatRight = styled.div`
  width: 680px;
`;

const DivRightHeader = styled.div`
  margin: 20px 0;
`;

const SpanSectionTitle = styled.span`
  margin-right: 8px;
  font-size: 15px;
  font-weight: bold;
  color: #4f4f4f;
`;

const DivHiddenWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 680px;
  height: 235px;
`;

const DivSliderContainer = styled.div`
  display: flex;
  position: absolute;
  left: ${({ left }) => left}px;
  transition: left 0.5s ease-in-out;
`;

const DivEachCard = styled.div`
  margin: 0 12px 20px 0;
`;

const IgEatDeal = styled.img`
  display: inline-block;
  width: 300px;
  height: 162px;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const PFoodName = styled.p`
  display: block;
  margin-top: 10px;
  margin-right: 1px;
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0;
  word-break: break-all;
  color: #7f7f7f;
`;

const SpanSalePercent = styled.span`
  margin-right: 10px;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0;
  color: #14cbb2;
`;

const SpanCurrentPrice = styled.span`
  margin-right: 4px;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0;
  color: #4f4f4f;
`;

const SpanPrevPrice = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  text-decoration: line-through;
  color: #cbcbcb;
`;

const ButtonToLeft = styled.button`
  background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/pc-eat-deal-prev-arrow.svg");
  width: 21px;
  height: 36px;
  background-size: cover;
  position: absolute;
  background-color: transparent;
  border: none;
  top: 30%;
`;

const ButtonToRight = styled.button`
  background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/pc-eat-deal-next-arrow.svg");
  width: 21px;
  height: 36px;
  background-size: cover;
  position: absolute;
  background-color: transparent;
  border: none;
  top: 30%;
  right: 0;
`;
