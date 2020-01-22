import React from "react";
import ListEntry from "./ListEntry";
import styled from "styled-components";
import { orange, size } from "./Styled";

const Section = styled.section`
  cursor: pointer;
  border-bottom: solid 1px #dbdbdb;
  margin-top: 10px;
  @media only screen and (min-width: ${size.tablet}) {
    display: flex;
    flex-wrap: wrap;
    height: 610px;
    overflow: hidden;
  }
  @media only screen and (max-width: ${size.tablet}) and (min-width: ${size.mobile}) {
    display: flex;
    flex-direction: column;
    height: 716px;
    overflow: hidden;
    padding-bottom: 40px;
  }
`;
const ListContainer = styled.div`
  @media only screen and (max-width: ${size.web}) and (mix-width: ${size.tablet}) {
    height: 550px;
  }
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 4%;
`;

const H2 = styled.h2`
  position: relative;
  margin: 10px auto 25px 100px;
  top: 0;
  display: block;
  color: ${orange};
  font-weight: lighter;
`;

export default function List(props) {
  return (
    <Section>
      <H2>{props.title}</H2>
      <ListContainer className="ListContainer">
        {props.datas.map((data, key) => (
          <ListEntry data={data} key={key} {...props} />
        ))}
      </ListContainer>
    </Section>
  );
}
