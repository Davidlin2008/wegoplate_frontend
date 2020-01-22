import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FooterContainer = styled.div`
  bottom: 0;
  width: 100%;
  height: 475px;
  color: white;
  background-color: #3e3e3e;
`;
const P = styled.div`
  margin: 50px;
  font-size: 0.875rem;
  line-height: 22px;
  color: #9b9b9b;
`;
const Logo = styled.img.attrs({
  src:
    "https://mp-seoul-image-production-s3.mangoplate.com/web/resources/mangoplate-gray-logo.svg"
})`
  width: 150px;
  height: 150px;
  margin: 20px 20px 20px 50px;
`;
const Sns = styled.div`
  right: 0;
  bottom: 250px;
  margin: 70px;
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 50px;
`;
const Blog = styled.span`
  display: block;
  width: 45px;
  height: 45px;
  background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png");
  background-position: -361px -866px;
`;
const Facebook = styled.span`
  display: block;
  width: 45px;
  height: 45px;
  background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png");
  background-position: -106px -866px;
`;
const Insta = styled.span`
  display: block;
  width: 45px;
  height: 45px;
  background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png");
  background-position: -259px -866px;
`;

export default function Footer(props) {
  return (
    <FooterContainer>
      <Wrapper>
        <Logo />
        <Sns>
          <Blog />
          <Facebook />
          <Insta />
        </Sns>
      </Wrapper>
      <P>
        ㈜ 망고플레이트
        <br />
        서울특별시 서초구 강남대로99길 53, 6층 (잠원동, 삼우빌딩) <br />
        대표이사: OH JOON HWAN(오준환)
        <br /> 사업자 등록번호: 211-88-92374 [사업자정보확인]
        <br />
        통신판매업 신고번호: 2014-서울강남-02615
        <br />
        고객센터: 02-565-5988 © 2020 MangoPlate Co., Ltd. All rights reserved.
      </P>
    </FooterContainer>
  );
}
