import React, { useEffect, useState } from "react";
import styled from "styled-components";
import food from "../../../Images/food.jpg";
import NavBar from "../../../../src/Components/NavBar";
import { Link } from "react-router-dom";
const EatDealDetail = () => {
  const DetailMain = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f7f7f7;
    z-index: 98;
  `;
  const FoodDetail = styled.div`
    display: flex;
    margin-top: 60px;
    flex-direction: column;
    align-items: center;
    width: 50%;

    z-index: 99;
    @media (max-width: 768px) {
      width: 100%;
    }
  `;
  const PaymentBtn = styled.button`
    width: 50%;
    position: fixed;
    bottom: 1px;
    height: 60px;
    background-color: #ff7100;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border: none;
    z-index: 100;
    margin-left: 0px;
    box-sizing: border-box;
    @media (max-width: 768px) {
      width: 100%;
    }
  `;
  const DetailImg = styled.div`
    width: 100%;
    height: 576px;
    background-image: url(${food});
    background-position-y: -200px;
  `;
  const FoodInfo = styled.div`
    width: 97%;
    height: 210px;
  `;
  const Empty = styled.div`
    width: 100%;
    height: 100px;
  `;
  const RestName = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    height: 50px;
    color: #4f4f4f;
    font-size: 20px;
  `;
  const LinkBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 111px;
    height: 22px;

    border-radius: 30px;
    color: #7f7f7f;
    font-size: 12px;
    background-color: #f3f3f3;
  `;
  const I = styled.i`
    width: 12px;
    height: 12px;
    background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/eat_deal_restaurant-info-v2.svg");
    margin-right: 3px;
  `;
  const NextImg = styled.i`
    width: 6px;
    height: 10px;
    background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/eat_deal_review_button_arrow.svg");
    margin-left: 3px;
  `;
  const Ptag = styled.p`
    width: 100%;
    height: 24px;
    font-size: 18px;
    color: #7f7f7f;
    margin: 0;
    padding: 0;
    margin-top: 25px;
  `;
  const Use = styled.span`
    font-size: 14px;
    color: #4f4f4f;
    font-weight: 700;
  `;
  const OriginalPrice = styled.span`
    margin-left: auto;
    color: #cbcbcb;
    font-size: 13px;
    text-decoration: line-through;
  `;
  const SalePrice = styled.span`
    position: absolute;
    right: 1px;
    font-size: 24px;
    color: #4f4f4f;
    font-weight: 700;
    margin-left: auto;
  `;
  const SalePercent = styled.span`
    position: absolute;
    font-size: 24px;
    color: #1fceb6;
    font-weight: 600;
    right: 110px;
  `;
  const SalePriceBlock = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 30px;
    align-items: center;
  `;
  const PriceBlock = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    width: 100%;
    height: 20px;
  `;
  const Line = styled.div`
    width: 97%;
    border-top: 1px solid #e9e9e9;
    margin-top: 30px;
  `;
  const Introduction = styled.section`
    width: 97%;
    h4 {
      margin: 0;
      margin-top: 20px;
      font-weight: 800;
    }
  `;
  const IntroUl = styled.ul`
    width: 97%;
    padding: 0;
    margin: 0;
    margin-left: 20px;
    margin-top: 10px;
    list-style: disc;
    li {
      font-size: 14px;
      color: #7f7f7f;
      margin-top: 10px;
      line-height: 1.5;
    }
  `;
  return (
    <DetailMain>
      <NavBar />
      <PaymentBtn>구매하기</PaymentBtn>
      <FoodDetail>
        <DetailImg />
        <FoodInfo>
          <RestName>
            <span>[광화문] 라그릴리아 광화문점</span>
          </RestName>
          <LinkBtn>
            <I />
            <span>식당 정보 보기</span>
            <NextImg />
          </LinkBtn>
          <Ptag>패밀리세트(3~4인)</Ptag>
          <div>
            <Use>사용기간:93일</Use>
            <span>(2020-01-12 ~ 2020-04-13)</span>
          </div>
          <PriceBlock>
            <OriginalPrice>₩81,200</OriginalPrice>
          </PriceBlock>
          <SalePriceBlock>
            <SalePercent>15%</SalePercent> <SalePrice>₩69,000</SalePrice>
          </SalePriceBlock>
        </FoodInfo>
        <Line />
        <Introduction>
          <h4>식당 소개</h4>
          <IntroUl>
            <li>
              라그릴리아는 이탈리어로 '그릴'이라는 뜻으로 정통 이탈리안 요리를
              새롭게 해석한 맛있는 요리와 소믈리에가 엄선한 와인과 맥주를 함께
              즐기실 수 있는 이탈리안 캐주얼 레스토랑입니다.
            </li>
          </IntroUl>
        </Introduction>
        <Introduction>
          <h4>메뉴 소개</h4>
          <IntroUl>
            <li>
              구성: 비프온더스톤 채끝등심 + 로얄 까르보나라 스파게티 + 해산물
              토마토 스파게티 + 프레쉬 그리너리 플랫피자
            </li>
            <li>
              비프온더스톤 채끝등심 : 뜨겁게 달구어 나온 돌 위에 스테이크를 올려
              즉석에서 불을 붙여 풍부한 향, 육즙 소리를 오감으로 느낄 수 있는
              라그릴리아 대표 메뉴
            </li>
            <li>
              로얄 까르보나라 스파게티 : 수란을 곁들인 진한 크림 소스의 로얄
              까르보나라 스파게티
            </li>
            <li>
              프레쉬 그리너리 플랫피자 : 얇은 플랫브레드 위에 프로슈토와
              방울토마토, 라디치오, 루꼴라 등 다양한야채를 올리고 화이트와인
              비네거와 발사믹소스로 맛을 살린 플랫 피자
            </li>
          </IntroUl>
        </Introduction>
        <Introduction>
          <h4>※ 유의사항 (꼭! 확인해주세요)</h4>
          <IntroUl>
            <li>사용 기간: 구매 시점으로부터 93일</li>
            <li>테이블 당 1매만 사용 가능합니다.</li>
            <li>
              로얄 까르보나라 스파게티 : 수란을 곁들인 진한 크림 소스의 로얄
              까르보나라 스파게티
            </li>
            <li>
              프레쉬 그리너리 플랫피자 : 얇은 플랫브레드 위에 프로슈토와
              방울토마토, 라디치오, 루꼴라 등 다양한야채를 올리고 화이트와인
              비네거와 발사믹소스로 맛을 살린 플랫 피자
            </li>
          </IntroUl>
        </Introduction>
        <Introduction>
          <h4>※환불 규정</h4>
          <IntroUl>
            <li>
              상품 사용 기간 내 환불 요청에 한해 구매 금액 전액 환불, 상품 사용
              기간 이후 환불 요청 건은 수수료 10%를 제외한 금액 환불을 원칙으로
              합니다.
            </li>
            <li>환불 기간 연장은 불가합니다.</li>
            <li>구매 후 93일 이내 환불 요청: 100% 환불</li>
            <li>구매 후 93일 이후 환불 요청: 90% 환불</li>
            <li>환불은 구매 시 사용하였던 결제수단으로 환불됩니다.</li>
          </IntroUl>
        </Introduction>
        <Introduction>
          <h4>문의</h4>
          <IntroUl>
            <li>cs@mangoplate.com</li>
          </IntroUl>
        </Introduction>
        <Empty />
      </FoodDetail>
    </DetailMain>
  );
};

export default EatDealDetail;
