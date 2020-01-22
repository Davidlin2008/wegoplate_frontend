import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fetchData from "../../../Utils/Fetch";
import { API_URL } from "../../../config";

const RstList = props => {
  const [data, setData] = useState([]);

  // const moreOnClick = () => {
  //   fetchData(`http://localhost:3000/data/.json`).then(res => {
  //     // setRating(ratingReview.concat(res.reviewContent));
  //   });
  // };

  // useEffect(() => {
  //   fetch("http://localhost:3000/Data/toplist.json")
  //     .then(res => res.json())
  //     .then(res => setData(res.rst))
  //     .catch(err => console.log(err));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    fetch(`${API_URL}/restaurant/toplist/${props.params}`)
      .then(res => res.json())
      .then(res => setData(res.restaurants))
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data[0] === undefined) return <></>;
  return (
    <DivListWrap>
      <UlRstList>
        {data.map((el, index) => (
          <LiEachRst key={index}>
            <DivWithReview>
              <DivImgWrap>
                <ImgRstImg src={el.image} />
              </DivImgWrap>
              <DivWidth>
                <DivInfoWrapper>
                  <div>
                    <p>
                      <SpanRstName>{el.name}</SpanRstName>
                      <SpanRate>{el.rate}</SpanRate>
                    </p>
                    <p>
                      <SpanAddress>{el.address}</SpanAddress>
                    </p>
                  </div>
                  <div>
                    <ButtonStar />
                    <SpanWannaGo>가고싶다</SpanWannaGo>
                  </div>
                </DivInfoWrapper>
                <DIvFlexWrap>
                  <DivReviwerImg img={el.user_image} />
                  <PcontentWrapper>
                    <SpanReviewerName>{el.user_nickname}</SpanReviewerName>
                    {el.user_review}
                  </PcontentWrapper>
                </DIvFlexWrap>
              </DivWidth>
            </DivWithReview>
          </LiEachRst>
        ))}
      </UlRstList>
      <DivMoreReview>더보기</DivMoreReview>
    </DivListWrap>
  );
};

export default RstList;

const DivListWrap = styled.div`
  width: 860px;
  margin: 0 auto;
  padding: 0 30px;
`;

const UlRstList = styled.ul`
  margin-top: 5px;
`;

const LiEachRst = styled.li`
  padding: 28px 0;
  border-bottom: 1px solid #dbdbdb;
`;

const DivWithReview = styled.div`
  display: flex;
  min-height: 238px;
  padding: 30px 0;
`;

const ImgRstImg = styled.img`
  height: 238px;
  width: 238px;
  margin-right: 30px;
`;

const DivImgWrap = styled.div`
  height: 238px;
  width: 238px;
  margin-right: 30px;
`;

const SpanRstName = styled.span`
  font-size: 1.8rem;
  line-height: 1.3em;
  color: #555;
`;

const DivWidth = styled.div`
  width: 100%;
`;

const SpanRate = styled.span`
  color: #ff792a;
  line-height: 1em;
  font-size: 1.8rem;
  line-height: 1.3em;
  margin-left: 10px;
`;

const SpanAddress = styled.span`
  font-size: 1.063rem;
  margin-top: 6px;
  color: #9b9b9b;
  line-height: 1.3em;
`;

const ButtonStar = styled.button`
  background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png?fit=around|*:*&crop=*:*;*,*&output-format=png&output-quality=80");
  background-position: -935px -583px;
  width: 32px;
  height: 32px;
  margin-left: 3px;
`;

const SpanWannaGo = styled.span`
  font-size: 0.7rem;
  color: #9b9b9b;
  margin-top: 6px;
  display: block;
`;

const DivInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DIvFlexWrap = styled.div`
  margin-top: 15px;
`;

const PcontentWrapper = styled.p`
  line-height: 25px;
`;

const DivReviwerImg = styled.div`
  margin: 0 10px 0px 0;
  float: left;
  background-image: url(${({ img }) => img});
  height: 35px;
  width: 35px;
  border-radius: 35px;
  background-size: cover;
  background-position: 50% 50%;
`;

const SpanReviewerName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const DivMoreReview = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #fe7100;
  min-width: 130px;
  height: 72px;
  cursor: pointer;
  justify-content: center;
  &:before {
    display: inline-block;
    background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_mobile@2x.png?fit=around|*:*&crop=*:*;*,*&output-format=png&output-quality=80");
    background-size: 635px 609px;
    background-position: -588px -539px;
    width: 22px;
    height: 22px;
    content: "";
    margin-right: 17px;
  }
  &:after {
    display: inline-block;
    background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_mobile@2x.png?fit=around|*:*&crop=*:*;*,*&output-format=png&output-quality=80");
    background-size: 635px 609px;
    background-position: -588px -539px;
    width: 22px;
    height: 22px;
    content: "";
    margin-left: 17px;
  }
`;
