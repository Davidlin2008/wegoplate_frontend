import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Header = () => {
  const [topData, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/Data/toplist.json")
      .then(data => data.json())
      .then(data => setData(data.header));
  }, []);

  if (topData === undefined) return <></>;
  return (
    <DivHeaderWrap>
      <DivHeadTitle>
        <PDateClick>
          {topData.click} 클릭 | {topData.date}
        </PDateClick>
        <H1Title>{topData.title}</H1Title>
        <H2subTitle>{topData.subtitle}</H2subTitle>
      </DivHeadTitle>
    </DivHeaderWrap>
  );
};

export default Header;

const DivHeaderWrap = styled.div`
  margin-top: 61px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #f7f7f7;
`;

const DivHeadTitle = styled.div`
  margin: 0 auto;
  padding: 48px 30px 20px 30px;
  width: 860px;
`;

const PDateClick = styled.p`
  margin-top: 20px;
  font-size: 0.875rem;
  line-height: 1.2em;
  color: #9b9b9b;
  text-align: center;
`;

const H1Title = styled.h1`
  margin-top: 18px;
  font-size: 2.563rem;
  line-height: 1.2em;
  text-align: center;
`;

const H2subTitle = styled.h2`
  font-size: 1.2rem;
  margin: 20px auto 30px;
  color: #9b9b9b;
  line-height: 1.2em;
  text-align: center;
`;
