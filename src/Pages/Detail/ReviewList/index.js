import React from "react";
import styled from "styled-components";

const ReviewList = ({ rate }) => {
  const ratingImg = index => {
    if (rate[index].rating === "good") return -714;
    else if (rate[index].rating === "soso") return -564;
    else return -514;
  };
  const ratingText = index => {
    if (rate[index].rating === "good") return "맛있다";
    else if (rate[index].rating === "soso") return "괜찮다";
    else return "나쁘다";
  };
  const imgList = index => {
    return rate[index].imgList.map((el, index) => (
      <ImgReviewImg key={index} src={el} />
    ));
  };

  return rate.map((el, index) => {
    // if (index < 5)
    return (
      <DivEachReview key={index}>
        <DivReviewerProfile>
          <ImgReviwerImg src={el.img} />
          <SpanReviwerName>{el.name}</SpanReviwerName>
          <DivReviwerStat>
            <SpanWriteStat left={-996} right={-600}>
              {el.write}
            </SpanWriteStat>
            <SpanWriteStat left={-998} right={-729}>
              {el.people}
            </SpanWriteStat>
          </DivReviwerStat>
        </DivReviewerProfile>
        <DivReviewContext>
          <PReviewDay>{el.time}</PReviewDay>
          <PReviewContext>{el.text}</PReviewContext>
          {imgList(index)}
        </DivReviewContext>
        <DivReviewRating>
          <DivReviewImg left={ratingImg(index)} />
          <SpanReviewText>{ratingText(index)}</SpanReviewText>
        </DivReviewRating>
      </DivEachReview>
    );
  });
};

export default ReviewList;

const DivEachReview = styled.div`
  padding: 20px 0 52px 0;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
`;

const DivReviewerProfile = styled.div`
  margin: 15px 35px 0 8px;
  display: flex;
  flex-direction: column;
`;

const ImgReviwerImg = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #dbdbdb;
`;

const SpanReviwerName = styled.span`
  margin-bottom: 2px;
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  color: #555555;
`;

const DivReviwerStat = styled.div`
  display: flex;
  justify-content: center;
`;

const SpanWriteStat = styled.span`
  margin-right: 2px;
  font-size: 11px;
  color: #cbcbcb;
  &:before {
    display: inline-block;
    content: "";
    margin: 0 2px 0 2px;
    background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png?fit=around|*:*&crop=*:*;*,*&output-format=png&output-quality=80");
    background-position: ${({ left }) => left}px ${({ right }) => right}px;
    width: 9px;
    height: 8px;
  }
`;

const DivReviewContext = styled.div`
  width: 605px;
`;

const PReviewDay = styled.p`
  font-size: 14px;
  line-height: 1.2;
  color: #9b9b9b;
`;

const PReviewContext = styled.p`
  font-size: 15px;
  line-height: 1.666;
`;

const ImgReviewImg = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 10px;
  margin: 17px 10px 0 0;
`;

const DivReviewRating = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const DivReviewImg = styled.div`
  background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png?fit=around|*:*&crop=*:*;*,*&output-format=png&output-quality=80");
  background-position: ${({ left }) => left}px -866px;
  width: 44px;
  height: 44px;
`;

const SpanReviewText = styled.span`
  font-size: 15px;
  color: #ff792a;
  margin-top: 10px;
  text-align: center;
`;
