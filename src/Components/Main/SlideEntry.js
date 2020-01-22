import React from "react";
import styled from "styled-components";
import { size } from "./Styled";

const Wrapper = styled.div`
  @media only screen and (min-width: ${size.tablet}) {
    min-width: 250px;
    width: 30%;
  }
  @media only screen and (max-width: 996px) {
    width: 40%;
    min-width: 250px;
  }
  @media only screen and (max-width: ${size.tablet}) and (min-width: ${size.mobile}) {
    width: 100%;
    background-size: 160%;
  }
  background-image: url(${props => props.data.image});
  background-position: center;
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.3);
  background-size: 155%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1, 1, 1;
  width: 33.33%;
  height: 200px;
  margin: 15px;
  font-size: 1.7rem;
`;
const SmallFont = styled.div`
  font-size: 1.3rem;
`;
const P = styled.p`
  margin: 10px;
  text-align: center;
  color: white;
  text-shadow: 6px 6px 16px rgba(0, 0, 0, 0.9);
`;

export default function SlideEntry(props) {
  return (
    <Wrapper
      data={props.data}
      onClick={() => props.history.push(`toplist/${props.data.id}`)}
    >
      <P>{props.data.title}</P>
      <SmallFont>
        <P>{props.data.description}</P>
      </SmallFont>
    </Wrapper>
  );
}
