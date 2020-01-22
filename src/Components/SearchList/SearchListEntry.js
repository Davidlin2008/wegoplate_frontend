import React from "react";
import styled from "styled-components";
import { g, orange } from "./Styled";

const Wrapper = styled.div`
  width: 100%;
  min-width: 200px;
  min-height: 300px;
  background-size: 105%;
  margin: 20px 4%;
  background-image: url(${props => props.data.image});
  background-position: center;
  background-size: 160%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1, 1, 1, 1;
  height: 200px;
  font-size: 1.3rem;
`;
const ListEntryWrapper = styled.div`
  width: 40%;
  margin: 40px;
  min-width: 300px;
  cursor: pointer;
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

export default function SearchListEntry(props) {
  return (
    <ListEntryWrapper
      data={props.data}
      onClick={() => props.history.push(`detail/${props.data.id}`)}
    >
      <Wrapper data={props.data}></Wrapper>
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
