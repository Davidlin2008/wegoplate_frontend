import React, { useState, useEffect } from "react";
import fetchData from "../../../Utils/Fetch";
import styled from "styled-components";
import { API_URL } from "../../../config";

const NearbyList = props => {
  const [nearby, setNearby] = useState([]);
  // useEffect(() => {
  //   fetchData("http://localhost:3000/Data/Data.json").then(data => {
  //     setNearby(data.nearby);
  //   });
  // }, []);

  useEffect(() => {
    fetchData(`${API_URL}/restaurant/${props.params}/near`).then(data => {
      setNearby(data.result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return nearby.map((el, index) => (
    <DivNearByRst key={index}>
      <ImgNearByRst src={el.img.images} />
      <DivNearByContent>
        <div>
          <SpanNearByName>{el.title}</SpanNearByName>
          <SpanNearByRate>{el.avg}</SpanNearByRate>
        </div>
        <DivInfoList>
          <SpanInfoLabel>음식 종류:</SpanInfoLabel>
          <SpanInfoValue>{el.food}</SpanInfoValue>
        </DivInfoList>
        <DivInfoList>
          <SpanInfoLabel>위치:</SpanInfoLabel>
          <SpanInfoValue>{el.location}</SpanInfoValue>
        </DivInfoList>
        <DivInfoList>
          <SpanInfoLabel>가격대:</SpanInfoLabel>
          <SpanInfoValue>{el.price}</SpanInfoValue>
        </DivInfoList>
      </DivNearByContent>
    </DivNearByRst>
  ));
};

export default NearbyList;

const DivNearByRst = styled.div`
  padding: 15px 0 15px 0;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
`;

const ImgNearByRst = styled.img`
  width: 103px;
  height: 103px;
`;

const DivNearByContent = styled.div`
  margin-left: 8px;
`;

const SpanNearByName = styled.span`
  font-size: 18px;
  line-height: 1.27;
  color: #555555;
`;

const SpanNearByRate = styled.span`
  margin-left: 5px;
  font-size: 19px;
  line-height: 1;
  color: #ff792a;
`;

const DivInfoList = styled.div`
  font-size: 12px;
  margin: 9px 0;
`;

const SpanInfoLabel = styled.span`
  color: #9b9b9b;
`;

const SpanInfoValue = styled.span`
  margin-left: 5px;
`;
