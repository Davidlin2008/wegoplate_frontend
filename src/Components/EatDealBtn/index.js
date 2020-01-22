// @flow strict

import  React from 'react';
import styled, { css } from "styled-components";
import "./index.scss";
const EatDealBtn=()=> {
    const Btn = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 30px;
    background-color: white;
    color: ${props => props.color};
    border: ${props => props.border};
  `;
    return (
        <Btn id={id} ></Btn>
    );
};

exportconst EatDealBtn;