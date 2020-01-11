import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fetchData from "../../../Utils/Fetch";

const ImgModal = ({ handdleToggle }) => {
  const [imgList, setList] = useState([]);
  const [leftPx, setLeft] = useState(0);
  const [rstData, setRst] = useState({});

  useEffect(() => {
    fetchData("http://localhost:3000/Data/Data.json").then(data => {
      setList(data.slideImg);
      setRst(data.rstData);
    });
  }, []);

  const moveImg = px => {
    if (leftPx <= 0 && (imgList.length - 1) * -714 < leftPx) setLeft(px);
    else {
      setLeft(0);
    }
  };

  const imgMap = imgList.map((el, index) => (
    <WrapDiv>
      <MapImg src={el.link} />
    </WrapDiv>
  ));

  const navImgMap = imgList.map((el, index) => (
    <ImgNavList key={index} src={el.link} />
  ));

  return (
    <>
      <ModalContainer>
        <PictureArea>
          <ImgForm>
            <Wrapper>
              <AbsolDiv left={leftPx}>{imgMap}</AbsolDiv>
              <MoveBtn onClick={() => moveImg(leftPx + 714)} />
              <MoveBtn
                onClick={() => moveImg(leftPx - 714)}
                first={-935}
                second={-332}
                left={660}
              />
            </Wrapper>
          </ImgForm>
          <DivNavWrap>{navImgMap}</DivNavWrap>
        </PictureArea>
        <InfoArea>
          <DivHeader>{rstData.name}</DivHeader>
          <DivProfile>
            <div>
              <ImgProfile src={rstData.writerImg} />
              <SpanWriterName>{rstData.reviewWriter}</SpanWriterName>
            </div>
            <div>
              <DivSmileImg />
              <PReview>괜찮다</PReview>
            </div>
          </DivProfile>
          <DivContent>
            <PText>{rstData.text}</PText>
            <PDate>{rstData.date}</PDate>
          </DivContent>
          <ButtonClose onClick={handdleToggle} />
        </InfoArea>
      </ModalContainer>
      <BlackScreen onClick={handdleToggle} />
    </>
  );
};

export default ImgModal;

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  z-index: 1001;
`;

const PictureArea = styled.div`
  width: 70%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 30px 0;
`;

const InfoArea = styled.div`
  width: 335px;
  height: 100%;
  background-color: white;
  position: relative;
`;

const ImgForm = styled.div`
  width: 714px;
  height: 685px;
  margin: 0 auto;
  position: relative;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const AbsolDiv = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => left}px;
  display: flex;
  height: 100%;
  transition: left 0.5s ease;
`;

const MapImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const BlackScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 1000;
  background-color: black;
`;

const MoveBtn = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ left }) => left || 0}px;
  margin-top: -16px;
  cursor: pointer;
  background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png?fit=around|*:*&crop=*:*;*,*&output-format=png&output-quality=110");
  background-position: ${({ first }) => first || -935}px
    ${({ second }) => second || -281}px;
  width: 28px;
  height: 45px;
  opacity: 0.5;
  margin-left: 10px;

  &:hover {
    opacity: 1;
  }
`;

const WrapDiv = styled.div`
  width: 714px;
`;

const DivHeader = styled.div`
  padding: 8px 14px;
  font-size: 0.8rem;
  border-radius: 0 4px 0 0;
  color: #555;
  border-bottom: 1px solid #f2f2f2;
  text-align: left;
`;

const DivProfile = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 16px 0;
`;

const ImgProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const SpanWriterName = styled.span`
  font-size: 0.85rem;
  margin: 5px 0 0 5px;
`;

const DivSmileImg = styled.div`
  background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_mobile@2x.png?fit=around|*:*&crop=*:*;*,*&output-format=png&output-quality=80");
  background-size: 635px 609px;
  background-position: -210px -539px;
  width: 30px;
  height: 30px;
  display: inline-block;
`;

const PReview = styled.p`
  color: #ff792a;
  font-size: 0.75rem;
  text-align: center;
`;

const DivContent = styled.div`
  padding: 0 16px;
  margin-top: 16px;
`;

const PText = styled.p`
  font-size: 0.85rem;
  letter-spacing: 0.2px;
  line-height: 1.2rem;
  color: rgba(51, 51, 51, 0.8);
`;

const PDate = styled.p`
  margin-top: 20px;
  font-size: 0.75rem;
  color: #777;
`;

const DivNavWrap = styled.div`
  cursor: pointer;
  margin-top: 3%;
  display: flex;
`;

const ImgNavList = styled.img`
  margin-left: 3px;
  width: 65px;
  height: 65px;
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: -40px;
  display: inline-block;
  background-size: 635px 609px;
  background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_mobile@2x.png?fit=around|*:*&crop=*:*;*,*&output-format=png&output-quality=80");
  background-position: -28px -587px;
  width: 21px;
  height: 21px;
  background-color: transparent;
  border: none;
`;
