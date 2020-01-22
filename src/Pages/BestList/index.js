import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Index from "../../Components/Nav";
import { API_URL } from "../../config";

const BestList = () => {
  const [date, setData] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/restaurant/toplist`)
      .then(res => res.json())
      .then(res => setData(res.toplists));
  }, []);

  const bestListmap = date.map((el, index) => (
    <LiItem>
      <DivEachList>
        <ImgRst src={el.image} />
        <Divdim />
        <DivTextWrap>
          <SpanMainTitle>{el.title}</SpanMainTitle>
          <SpanSubTitle>{el.description}</SpanSubTitle>
        </DivTextWrap>
      </DivEachList>
    </LiItem>
  ));

  return (
    <>
      <Index />
      <DivMainContainer>
        <Divinner>
          <H1Title>믿고 보는 맛집 리스트</H1Title>
          <UlBestList>{bestListmap}</UlBestList>
        </Divinner>
      </DivMainContainer>
    </>
  );
};

export default BestList;

const DivMainContainer = styled.div`
  margin-top: 60px;
  background-color: #f7f7f7;
  padding: 38px 0 36px 0;
`;

const Divinner = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

const H1Title = styled.h1`
  font-size: 1.438rem;
  color: #ff792a;
  line-height: 1.2em;
`;

const UlBestList = styled.ul`
  overflow: hidden;
  list-style: none;
`;

const LiItem = styled.li`
  display: inline-block;
  width: 50%;
  padding-top: 32px;
  padding-right: 15px;
  margin: -4px;
`;

const DivEachList = styled.div`
  width: 550px;
  height: 260px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const ImgRst = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const Divdim = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  right: 0;
`;

const DivTextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85%;
  transform: translate(-50%, -50%);
`;

const SpanMainTitle = styled.div`
  font-size: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  text-align: center;
  color: #ffffff;
  line-height: 1.2em;
`;

const SpanSubTitle = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  text-align: center;
  color: #ffffff;
  line-height: 1.2em;
`;
