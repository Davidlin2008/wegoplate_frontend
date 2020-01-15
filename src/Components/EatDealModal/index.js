import React, { useState } from "react";
import styled, { css } from "styled-components";

const Modal = ({ isOpen, close }) => {
  const ModalView = styled.div`
    position: fixed;
    z-index: 1000;
    opacity: 100;
    width: 50.5%;
    height: 731px;
    border-top: 1px solid #888888;
    background-color: white;
    top: 61px;
    @media (max-width: 810px) {
      width: 100%;
    }
  `;
  const TopBottom = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    width: 100%;
    height: 60px;
  `;

  const Xbtn = styled.button`
    position: absolute;
    width: 6%;
    height: 45px;
    font-size: 20px;
    right: 1px;
    border: none;
    background-color: white;
    color: #c7c7c7;
  `;
  const AreaSelect = styled.span`
    margin-left: auto;
    margin-right: auto;
    color: #7f7f7f;
  `;
  const Area = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 51px;
    border-top: 2px solid #c7c7c7;
  `;
  const AreaKinds = styled.li`
    width: 20%;
    height: 51px;
    border-top: 3px solid #ff7100;
  `;
  const AreaKindsBtn = styled.button`
    width: 100%;
    height: 51px;
    font-size: 13px;
    color: #7f7f7f;
    background-color: white;
    border: none;
    margin-left: 0px;
    ${props =>
      props.change &&
      css`
        color: red;
      `}
  `;
  const BtnKinds = styled.ul`
    width: 100%;
    height: 75%;
    list-style: none;
    margin-top: 5px;
    padding: 0;
  `;
  const BtnLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-bottom: 15px;
    margin-left: 0px;
  `;
  const Btn = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 30px;
    border: 1px solid #c7c7c7;
    color: #c7c7c7;
    background-color: white;
  `;
  const MiddleBox = styled.div`
    overflow-y: auto;
    display: flex;
    width: 100%;
    height: 76%;
    margin-top: 10px;
  `;
  const Apply = styled.button`
    width: 11%;
    height: 45px;
    color: white;
    background-color: #ff7100;
    border-radius: 30px;
    border: none;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 810px) {
      width: 20%;
    }
  `;
  const Delete = styled.button`
    position: absolute;
    right: 1px;
    height: 40px;
    font-size: 10px;
    color: #7f7f83;
    background-color: white;
    border: none;
  `;
  const [btnNum, setBtnNum] = useState(0);
  const ApplyChange = () => {};
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <ModalView>
            <TopBottom>
              <AreaSelect>지역 선택</AreaSelect>
              <Xbtn onClick={close}>X</Xbtn>
            </TopBottom>
            <Area>
              <AreaKinds>
                <AreaKindsBtn change={true}>서울-강남</AreaKindsBtn>
              </AreaKinds>
              <AreaKinds>
                <AreaKindsBtn>서울-강북</AreaKindsBtn>
              </AreaKinds>
              <AreaKinds>
                <AreaKindsBtn>경기도</AreaKindsBtn>
              </AreaKinds>
            </Area>
            <MiddleBox>
              <BtnKinds>
                <BtnLi>
                  <Btn>전체</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강남역</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
              </BtnKinds>
              <BtnKinds>
                <BtnLi>
                  <Btn>전체</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강남역</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
                <BtnLi>
                  {" "}
                  <Btn>강동구</Btn>
                </BtnLi>
              </BtnKinds>
            </MiddleBox>
            <TopBottom>
              <Apply onClick={close}>적용</Apply>
              <Delete>지우기</Delete>
            </TopBottom>
          </ModalView>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
