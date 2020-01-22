import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Media from "../../../Utils/Media";
import { API_URL } from "../../../config";

const RelativeList = props => {
  const [relativeList, setList] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/data/other.json")
  //     .then(res => res.json())
  //     .then(res => setList(res.relative));
  // }, []);

  useEffect(() => {
    fetch(`${API_URL}/restaurant/${props.params}/toplist`)
      .then(res => res.json())
      .then(res => setList(res.result));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToBestList = a => {
    console.log(relativeList);
    props.history.push(`/bestlist`);
  };

  const relativeMap = relativeList.map((el, index) => (
    <LiEachRst key={index}>
      <DivCardDim onClick={() => goToBestList(index)} />
      <DivCardImg left={el.image} />
      <DivTextContainer>
        <PCardTitle>{el.title}</PCardTitle>
        <PCardDesc>{el.description}</PCardDesc>
      </DivTextContainer>
    </LiEachRst>
  ));

  return (
    <SectionContainer>
      <H2OtherTitle>관련 TOP 리스트</H2OtherTitle>
      <UlRstList>{relativeMap}</UlRstList>
    </SectionContainer>
  );
};

export default withRouter(RelativeList);

const SectionContainer = styled.section`
  padding: 33px 0;
`;

const H2OtherTitle = styled.h2`
  font-size: 1.438rem;
  line-height: 1.2em;
  color: #ff792a;
  margin-bottom: 20px;
`;

const UlRstList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LiEachRst = styled.li`
  position: relative;
  width: 365px;
  height: 180px;
  margin-bottom: 32px;
  ${Media.small`
    width: 100%;
  `}
`;

const DivCardDim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const DivCardImg = styled.div`
  background-image: url(${({ left }) => left}), url(${({ right }) => right});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const DivTextContainer = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  width: 85%;
  text-align: center;
  color: #ffffff;
`;

const PCardTitle = styled.p`
  font-size: 23px;
  line-height: 1.2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;

const PCardDesc = styled.p`
  padding: 0 50px;
  margin-top: 7px;
  font-size: 17px;
  line-height: 1.2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;
