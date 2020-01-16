import React, { useState } from "react";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";

const Review = props => {
  const [checkRate, setCheck] = useState("good");
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };
  const onClick = value => {
    setCheck(value);
  };

  const goToDetail = () => {
    props.history.push("/detail");
  };
  // localStorage.getItem("login_token");
  const sendtext = () => {
    fetch("http://10.58.6.147:8000/restaurant/1/review", {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTkwOH0.qwg9CXS2S__H3sXpmbg6uweD1fta2PFFLV3SCVs-29g"
      },
      body: JSON.stringify({
        restaurant_id: 1,
        content: text,
        star: checkRate
      })
    });
    // goToDetail();
  };

  return (
    <DivWriteContainer>
      <DivWritingHeader>
        <SpanTrueReview>솔직한 리뷰를 써주세요.</SpanTrueReview>
      </DivWritingHeader>
      <DivContentWrap>
        <DivRateSelect>
          <ButtonRateSelect onClick={() => onClick("good")}>
            <IgoodImg check={checkRate} />{" "}
            <SpanGoodText check={checkRate}>맛있다</SpanGoodText>
          </ButtonRateSelect>
          <ButtonRateSelect onClick={() => onClick("soso")}>
            <IsosoImg check={checkRate} />{" "}
            <SpanSosoText check={checkRate}>괜찮다</SpanSosoText>
          </ButtonRateSelect>
          <ButtonRateSelect onClick={() => onClick("bad")}>
            <IbadImg check={checkRate} />{" "}
            <SpanBadText check={checkRate}>나쁘다</SpanBadText>
          </ButtonRateSelect>
        </DivRateSelect>
        <TextareaReview
          maxLength="10000"
          value={text}
          onChange={onChange}
          placeholder="주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
        />
      </DivContentWrap>
      <PTextLength>{text.length} / 10,000</PTextLength>
      <DivBtnWrapper>
        <Buttoncancel onClick={goToDetail}>취소</Buttoncancel>
        <ButtonSubmit onClick={sendtext}>리뷰 올리기</ButtonSubmit>
      </DivBtnWrapper>
    </DivWriteContainer>
  );
};

export default withRouter(Review);

const DivWriteContainer = styled.div`
  width: 678px;
  margin: 101px auto 62px;
`;

const DivWritingHeader = styled.div`
  margin-bottom: 20px;
`;

const SpanTrueReview = styled.span`
  font-size: 20px;
  margin-left: 5px;
  color: #7f7f7f;
`;

const DivContentWrap = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 16px;
  width: 678px;
  margin-bottom: 15px;
  height: 240px;
`;

const DivRateSelect = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const ButtonRateSelect = styled.button`
  margin-right: 20px;
  color: #cbcbcb;
  /* color: #ff7100; */
  display: flex;
`;

const IgoodImg = styled.i`
  background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_recommend_face.svg");

  display: inline-block;
  width: 36px;
  height: 36px;
  margin-right: 8px;
  background-size: cover;
  ${({ check }) =>
    check === "good" &&
    css`
      background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_recommend_active_face.svg ");
    `}
`;

const IsosoImg = styled(IgoodImg)`
  background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_ok_face.svg");
  ${({ check }) =>
    check === "soso" &&
    css`
      background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_ok_active_face.svg");
    `}
`;

const IbadImg = styled(IgoodImg)`
  background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_not_recommend_face.svg");
  ${({ check }) =>
    check === "bad" &&
    css`
      background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_not_recommend_active_face.svg");
    `}
`;

const SpanGoodText = styled.span`
  font-size: 14px;
  margin-top: 8px;
  ${({ check }) =>
    check === "good" &&
    css`
      color: #fe7100;
    `}
`;

const SpanSosoText = styled.span`
  ${({ check }) =>
    check === "soso" &&
    css`
      color: #fe7100;
    `}
`;
const SpanBadText = styled.span`
  ${({ check }) =>
    check === "bad" &&
    css`
      color: #fe7100;
    `}
`;

const PTextLength = styled.p`
  font-size: 14px;
  color: #7f7f7f;
  text-align: right;
`;

const TextareaReview = styled.textarea`
  overflow: hidden;
  overflow-wrap: break-word;
  height: 150px;
  width: 100%;
  border: none;
  resize: none;
  ::placeholder {
    color: #cbcbcb;
  }
`;

const DivBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;

const Buttoncancel = styled.button`
  min-width: 140px;
  min-height: 50px;
  margin-right: 16px;
  padding-left: 14px;
  padding-right: 14px;
  border: 1px solid #7f7f7f;
  border-radius: 50px;
  font-size: 16px;
  color: #7f7f7f;
  text-align: center;
  background-color: #ffffff;
`;

const ButtonSubmit = styled.button`
  min-width: 140px;
  min-height: 50px;
  padding-left: 14px;
  padding-right: 14px;
  border: 1px solid #ff7100;
  border-radius: 50px;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  background-color: #ff7100;
`;
