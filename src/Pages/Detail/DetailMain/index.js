import React, { useState, useEffect, useRef } from "react";
import fetchData from "../../../Utils/Fetch";
import KaKaoMap from "../../../Components/KakaoMap";
import styled from "styled-components";
import NearbyList from "../NearbyList";
import EatDeal from "../EatDeal";
import DetailReview from "../DetailReview";
import OtherTopList from "../OtherTopList";
import RelativeList from "../RelativeList";
import Media from "../../../Utils/Media";
import { withRouter } from "react-router-dom";
import { API_URL } from "../../../config";

const DetailMain = props => {
  const [rstData, setData] = useState("");
  const [data, setList] = useState([]);
  const [intro, setIntro] = useState("");
  const [tagList, setTagList] = useState([]);
  const child = useRef();

  useEffect(() => {
    fetchData("http://localhost:3000/Data/Data.json").then(data => {
      setData(data.rstData);
      setIntro(data.rstIntro);
      // setTagList(data.tagList);
    });
  }, []);

  useEffect(() => {
    fetchData(`${API_URL}/restaurant/${props.params}/info`).then(data => {
      setList(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData(`${API_URL}/restaurant/${props.params}/tag`).then(data => {
      setTagList(data.result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToReview = () => {
    props.history.push(`/Review/${props.params}`);
  };

  const goToTopList = () => {
    props.history.push("/toplist");
  };
  const goToBestList = () => {
    props.history.push("/bestlist");
  };

  const tagMapList = tagList.map((el, index) => {
    return (
      <DivTagWrapper key={index}>
        <DivTagList>#{el.tag}</DivTagList>
      </DivTagWrapper>
    );
  });

  if (data.result === undefined) return <></>;

  const infoList = data.result.map((el, index) => {
    if (el.title !== "메뉴") {
      return (
        <div key={index}>
          <SpanInfoTitle>{el.title}</SpanInfoTitle>
          <SpanInfoDetail>{el.content[0]}</SpanInfoDetail>
        </div>
      );
    } else {
      const menuList = data.result[data.result.length - 1].content.map(
        (el, index) => (
          <DivMenu key={index}>
            <SpanMenuName>{el.menu}</SpanMenuName>
            <span>{el.price}</span>
          </DivMenu>
        )
      );
      return (
        <DivFlex key={index}>
          <SpanInfoTitle>메뉴</SpanInfoTitle>
          <DivWrapper>{menuList}</DivWrapper>
        </DivFlex>
      );
    }
  });

  return (
    <DivMainWrap>
      <DivContent>
        <SectionRstDetail>
          <Header>
            <DivRstTitle>
              <DivHeaderLeft>
                <span>{data.top.name}</span>
                <SpanRate>{data.top.star}</SpanRate>
              </DivHeaderLeft>
              <DivWrap>
                <ButtonReview onClick={goToReview}>
                  <IWriteimg />
                  <SpanReview>리뷰쓰기</SpanReview>
                </ButtonReview>
                <ButtonReview>
                  <IWant />
                  <SpanReview>가고싶다</SpanReview>
                </ButtonReview>
              </DivWrap>
            </DivRstTitle>
            <DivHeaderBot>
              <SpanView left={-974} right={-817}>
                {rstData.view}
              </SpanView>
              <SpanView left={-800} right={-648}>
                {rstData.reviewNum}
              </SpanView>
              <SpanView left={-828} right={-774}>
                {rstData.like}
              </SpanView>
            </DivHeaderBot>
          </Header>
          <DivInfoRst>{infoList}</DivInfoRst>
        </SectionRstDetail>
        <SectionIntro>
          <DivRstIntro>
            <SpanInfoTitle>{intro.intro}</SpanInfoTitle>
            <SpanRstIntro>{intro.content}</SpanRstIntro>
          </DivRstIntro>
          <EatDeal params={props.params} />
        </SectionIntro>
        <DetailReview ref={child} params={props.params} />
        <DivMoreReview onClick={() => child.current.moreOnClick()}>
          <SpanMore>더보기</SpanMore>
        </DivMoreReview>
        <OtherTopList params={props.params} />
        <RelativeList params={props.params} />
      </DivContent>
      <DivSide>
        <DivMapContainer>
          <KaKaoMap width={400} height={328} address={data.result[0].content} />
        </DivMapContainer>
        <DivRightBot>
          <SpanRightTitle>주변 인기 식당</SpanRightTitle>
          <NearbyList params={props.params} />
          <SectionTag>
            <SpanTagTitle>이 식당 관련된 태그</SpanTagTitle>
            {tagMapList}
          </SectionTag>
        </DivRightBot>
      </DivSide>
    </DivMainWrap>
  );
};

export default withRouter(DetailMain);

const DivMainWrap = styled.div`
  margin-top: 6px;
  display: flex;
  ${Media.small`
    width:100%
  `}
`;

const DivContent = styled.div`
  width: 800px;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: content-box;
  ${Media.small`
    width: 100%
  `};
`;

const DivSide = styled.div`
  width: 400px;
  background-color: #f6f6f6;
`;

const SectionRstDetail = styled.section`
  width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 30px 0 0;
  border-bottom: 1px solid #e9e9e9;
  ${Media.small`
    margin-top: 0;
    padding-top: 15px;
    width: 100%;
  `}
`;

const Header = styled.header`
  border-bottom: 1px solid #e9e9e9;
  position: relative;
  padding-bottom: 10px;
  ${Media.small`
    margin: 0 10px;
  `}
`;

const DivRstTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DivHeaderLeft = styled.div`
  font-size: 1.8rem;
  line-height: 46px;
`;

const SpanRate = styled.span`
  color: #ff792a;
  margin-left: 8px;
`;

const DivWrap = styled.div`
  display: flex;
`;

const ButtonReview = styled.button`
  margin: 0 19px 0 0;
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0;
`;

const IWriteimg = styled.i`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: 0 auto;
  background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/review_writing_icon.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  &:hover {
    background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/review_writing_active_icon2.png");
  }
`;

const SpanReview = styled.span`
  margin-top: 12px;
  font-size: 0.8rem;
  line-height: 1.3;
  color: #9b9b9b;
  &:hover {
    color: #ff792a;
  }
`;

const IWant = styled.i`
  margin: 0 auto;
  background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png?fit=around|*:*&crop=*:*;*,*&output-format=png&output-quality=80");
  width: 32px;
  height: 32px;
  background-position: -935px -583px;
`;

const DivHeaderBot = styled.div`
  margin: 5px 0 10px;
`;

const SpanView = styled.span`
  margin-right: 15px;
  font-size: 0.8rem;
  color: #9b9b9b;
  :before {
    background-image: url("https://mp-seoul-image-develop-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png?fit=around|*:*&crop=*:*;*,*&output-format=png&output-quality=80");
    background-position: ${({ left }) => left}px ${({ right }) => right}px;
    width: 19px;
    height: 13px;
    content: "";
    display: inline-block;
    margin: -4px 4px 0 0;
  }
`;

const DivInfoRst = styled.div`
  padding: 20px 0 60px;
  ${Media.small`
    padding: 10px 0 10px;
    width: 100%
  `}
`;

const SpanInfoTitle = styled.span`
  display: inline-block;
  width: 110px;
  font-size: 0.9rem;
  color: rgba(79, 79, 79, 0.6);
  line-height: 1.7;
  text-align: left;
  vertical-align: top;
  padding-right: 10px;
  padding-bottom: 5px;
`;

const SpanInfoDetail = styled.span`
  font-size: 0.9rem;
  color: #4f4f4f;
  line-height: 1.7;
  text-align: left;
  vertical-align: middle;
  padding-bottom: 5px;
`;

const DivMenu = styled.div`
  border-bottom: 1px solid #e9e9e9;
  display: inline-block;
  margin-bottom: 4px;
  font-size: 0.9rem;
  color: #4f4f4f;
  line-height: 1.7;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
`;

const SpanMenuName = styled.span`
  margin-right: 30px;
`;

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivFlex = styled.div`
  display: flex;
`;

const SectionIntro = styled.section`
  width: 800px;
  margin: 0 auto;
  ${Media.small`
    width: 100%
  `}
`;

const DivRstIntro = styled.div`
  margin: 20px 0;
`;

const SpanRstIntro = styled.span`
  font-size: 15px;
  line-height: 23px;
  text-align: left;
  color: #4f4f4f;
`;

const DivRightBot = styled.div`
  padding: 30px 24px 0 24px;
`;

const SpanRightTitle = styled.span`
  line-height: 1.2em;
  color: #ff792a;
  font-size: 1.438rem;
`;

const DivMapContainer = styled.div`
  width: 100%;
  height: 328px;
  cursor: pointer;
`;

const SectionTag = styled.section`
  padding: 33px 0;
`;

const SpanTagTitle = styled.span`
  display: block;
  font-size: 1.438rem;
  line-height: 1.2em;
  color: #ff792a;
`;

const DivTagWrapper = styled.div`
  padding-top: 10px;
  display: inline-block;
`;

const DivTagList = styled.div`
  margin: 15px 3px 0 3px;
  padding: 0 20px;
  font-size: 0.938rem;
  line-height: 38px;
  letter-spacing: 0em;
  display: inline-block;
  color: #6a6a6a;
  border: 1px solid #cbcbcb;
  border-radius: 50px;
  background-color: #fff;
`;

const DivMoreReview = styled.div`
  display: flex;
  align-items: center;
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

const SpanMore = styled.span`
  font-size: 19px;
  color: #ff792a;
`;
