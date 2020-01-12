import React, { useState, useEffect } from "react";
import styled from "styled-components";

const OtherTopList = () => {
  const [otherList, setOther] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/other.json")
      .then(res => res.json())
      .then(res => setOther(res.other));
  }, []);

  const otherMap = otherList.map((el, index) => (
    <LiTopRst key={index}>
      <ImgRstImg src={el.img} />
      <DivRstInfo>
        <PRstName>
          {el.name} <SpanRstRate>{el.rate}</SpanRstRate>
        </PRstName>
        <PDetailInfo>{el.info}</PDetailInfo>
      </DivRstInfo>
    </LiTopRst>
  ));
  return (
    <DivMainContainer>
      <SpanTopHeader>
        2020 강북 인기 맛집 TOP 100에 있는 다른 식당
      </SpanTopHeader>
      <UlRstList>{otherMap}</UlRstList>
    </DivMainContainer>
  );
};

export default OtherTopList;

const DivMainContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  padding: 33px 0;
`;

const SpanTopHeader = styled.span`
  font-size: 1.438rem;
  line-height: 1.2em;
  color: #ff792a;
`;

const UlRstList = styled.ul`
  margin-top: 20px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const LiTopRst = styled.li`
  position: relative;
  padding-bottom: 35px;
  width: 50%;
  &:nth-child(odd) {
    padding-right: 17px;
  }
  &:nth-child(even) {
    padding-left: 17px;
  }
`;

const ImgRstImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const DivRstInfo = styled.div`
  padding-top: 9px;
`;

const PRstName = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #555;
  line-height: 1.3em;
`;

const SpanRstRate = styled.span`
  margin-left: 5px;
  font-size: 1.37rem;
  color: #ff792a;
  padding-top: 1px;
`;

const PDetailInfo = styled.p`
  margin-top: 6px;
  font-size: 0.9rem;
  color: #9b9b9b;
  line-height: 1.3em;
`;
