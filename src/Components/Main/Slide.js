import React from "react";
import SlideEntry from "./SlideEntry";
import styled from "styled-components";
import { orange, size } from "./Styled";

const Section = styled.section`
  margin-top: 10px;
  margin-bottom: 20px;
  border-bottom: solid 1px #dbdbdb;
  @media only screen and (min-width: ${size.tablet}) {
    display: flex;
    flex-wrap: wrap;
    height: 550px;
    overflow: hidden;
  }
  @media only screen and (max-width: ${size.tablet}) and (min-width: ${size.mobile}) {
    display: flex;
    flex-direction: column;
    height: 550px;
    overflow: hidden;
  }
`;
const SlideContainer = styled.div`
  height: 440px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 5%;
`;

const H2 = styled.h2`
  display: block;
  position: relative;
  margin: 25px auto -15px 100px;
  top: 0;
  color: ${orange};
  font-weight: lighter;
`;
// const Button = styled.button`
//   width: 20px;
//   display: inline-block;
// `;
export default function Slide(props) {
  console.log(props.datas);
  return (
    <Section>
      <H2>{props.title}</H2>
      <SlideContainer className="SlideContainer">
        {props.datas.map((data, key) => (
          <SlideEntry data={data} key={key} />
        ))}
      </SlideContainer>
    </Section>
  );
}
