import React, { useEffect } from "react";
import styled from "styled-components";

const ToastView = ({ toggle }) => {
  const generateRandom = function(min, max) {
    const ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
  };

  useEffect(() => {
    setTimeout(toggle, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DivToastWrap onClick={toggle}>
      <SpanRandomPeople>
        현재 {generateRandom(10, 100)}명이 보고 있습니다.
      </SpanRandomPeople>
    </DivToastWrap>
  );
};

export default ToastView;

const DivToastWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: rgb(255, 169, 38);
  left: 50%;
  transform: translate(-50%, -50%);
  top: 120px;
  z-index: 100;
  opacity: 0;
  text-align: center;
  animation: fadeIn 8s 3s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const SpanRandomPeople = styled.span`
  color: white;
  font-size: 30px;
  display: inline-block;
  margin-top: 30px;
`;
