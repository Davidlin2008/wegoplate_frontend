
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Modal = ({ isOpen, close }) => {
  const [obj, setObj] = useState([]);
  const [objj, setobjj] = useState([]);
  const [result, setResult] = useState([]);
  const [changeNum, setChangeNum] = useState(13);
  const [gyungi, setGyungi] = useState([]);

  useEffect(() => {
    fetch("http://10.58.7.97:8000/restaurant/eat_deal_location", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => setResult(res.result));
    fetch("http://10.58.7.97:8000/restaurant/eat_deal_location?city=5", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => setGyungi(res.result));
  }, []);

  const handleToggle = index => {
    let newObj = [...obj];

    newObj[index][index] = !newObj[index][index];
    setObj(newObj);
  };

  const handleToggleTwo = index => {
    let newObj = [...objj];

    newObj[index][index] = !newObj[index][index];
    setobjj(newObj);
  };
  console.log(obj);
  console.log(objj);
  const handleSub = () => {
    const q = [];
    if (changeNum === 13) {
      obj.map((el, index) => {
        if (el[index] === true) {
          q.push(el[index]);
        }
        return q.join("&");
      });
    } else if (changeNum === 5) {
      objj.map((el, index) => {
        if (el[index] === true) {
          q.push(el[index]);
        }
        return q.join("&");
      });
    }
    fetch("http://10.58.7.97:8000/restaurant/eat_deal_location", {
      method: "POST",
      body: JSON.stringify({})
    })
      .then(res => res.json())
      .then(res => res);
  };

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


    border-top: 1px solid #c7c7c7;

  `;
  const AreaKinds = styled.li`
    width: 20%;
    height: 51px;



  `;
  const AreaKindsBtn = styled.button`
    width: 100%;
    height: 51px;
    font-size: 13px;
    color: #c7c7c7;
    border:none;
    ${props =>
      (props.className === 13 &&
        css`
          color: red;
          border-top: 3px solid orange;
        `) ||
      (props.className &&
        css`
          color: #c7c7c7;
        `)}

    background-color: white;
    margin-left: 0px;
  `;

  const AreaKindsTwo = styled(AreaKindsBtn)`
    border: none;
    ${props =>
      (props.className === 5 &&
        css`
          color: red;
          border-top: 3px solid orange;
        `) ||
      (props.className &&
        css`
          color: #c7c7c7;
        `)};
  `;

  const BtnKinds = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
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

    
    width: 48%;

    margin-bottom: 15px;
    margin-left: 0px;
  `;
  const Btn = styled.button`
    width: 100%;
    height: 50px;
    margin-left:10px;
    border-radius: 30px;
    background-color: white;
    color: #7f7f7f;
    ${props =>
      props.color &&
      css`
        color: orange;
      `};
    border: 1px solid #7f7f7f;
    ${props =>
      props.border &&
      css`
        border: 1px solid orange;
      `}
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

  
  const func = () => {
    if (changeNum === 13) {
      return result.map((el, index) => {
        if (obj.length < result.length) {
          obj.push({ [index]: false });
        }
        return (
          <BtnLi>
            <Btn
              onClick={() => handleToggle(index)}
              border={obj[index][index]}
              color={obj[index][index]}
              id={el.id}
            >
              {el.state}
            </Btn>
          </BtnLi>
        );
      });
    } else if (changeNum === 5) {
      return gyungi.map((el, index) => {
        if (objj.length < gyungi.length) {
          objj.push({ [index]: false });
        }
        return (
          <BtnLi>
            <Btn
              onClick={() => handleToggleTwo(index)}
              border={objj[index][index]}
              color={objj[index][index]}
              id={el.id}
            >
              {el.state}
            </Btn>
          </BtnLi>
        );
      });
    }
  };

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

                <AreaKindsBtn
                  onClick={() => setChangeNum(13)}
                  className={changeNum}
                >
                  서울-강남,강북
                </AreaKindsBtn>
              </AreaKinds>
              <AreaKinds>
                <AreaKindsTwo
                  onClick={() => setChangeNum(5)}
                  className={changeNum}
                >
                  경기도
                </AreaKindsTwo>
              </AreaKinds>
            </Area>
            <MiddleBox>
              <BtnKinds>{func()}</BtnKinds>
            </MiddleBox>
            <TopBottom>
              <Apply onClick={handleSub}>적용</Apply>

              <Delete>지우기</Delete>
            </TopBottom>
          </ModalView>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
