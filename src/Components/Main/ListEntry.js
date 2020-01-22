import React from "react";
import styled from "styled-components";
import { g, orange, size } from "./Styled";

const Wrapper = styled.div`
  @media only screen and (min-width: ${size.tablet}) {
    width: 100%;
  }
  @media only screen and (max-width: 996px) {
    width: 50%;
    min-width: 250px;
  }
  @media only screen and (max-width: ${size.tablet}) and (min-width: ${size.mobile}) {
    width: 100%;
    background-size: 105%;
    margin: 20px 4%;
  }
  background-image: url(${props => props.data.image});
  background-position: center;
  background-size: 160%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1, 1, 1, 1;
  width: 100%;
  height: 200px;
  font-size: 1.3rem;
`;
const ListEntryWrapper = styled.div`
  margin: 10px;
  @media only screen and (min-width: ${size.web}) {
    width: 23%;
    min-width: 250px;
  }
  @media only screen and (min-width: ${size.tablet}) {
    width: 23%;
    min-width: 250px;
  }
  @media only screen and (max-width: ${size.tablet}) and (min-width: ${size.mobile}) {
    width: 70%;
    min-width: 300px;
  }
`;
const InfoWrapper = styled.div`
  display: block;
  position: relative;
  margin-left: 20px;
  margin-top: 5px;
`;

const Name = styled.div`
  position: relative;
  display: inline-block;
  font-size: 1.3rem;
  color: #555555;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.3em;
  max-width: 64%;
`;
const Rate = styled.div`
  display: inline-block;
  color: ${orange};
  margin-left: 15px;
  font-size: 1.5rem;
`;
const Info = styled.div`
  color: ${g};
  font-size: 0.9rem;
  line-height: 1.3em;
`;

export default function ListEntry(props) {
  return (
    <ListEntryWrapper>
      <Wrapper
        data={props.data}
        onClick={() => props.history.push(`restaurant/${props.data.id}`)}
      ></Wrapper>
      <InfoWrapper>
        <Name>{props.data.name}</Name>
        <Rate>{props.data.grade}</Rate>
        <Info>
          {props.data.state} - {props.data.food}
        </Info>
      </InfoWrapper>
    </ListEntryWrapper>
  );
}
