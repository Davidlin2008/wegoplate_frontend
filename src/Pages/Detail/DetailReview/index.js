import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from "react";
import styled, { css } from "styled-components";
import fetchData from "../../../Utils/Fetch";
import ReviewList from "../ReviewList";
import Media from "../../../Utils/Media";

const DetailReview = forwardRef((props, ref) => {
  const [data, setData] = useState({});
  const [reviewFilter, setFilter] = useState({
    all: "true",
    good: "false",
    soso: "false",
    bad: "false"
  });
  const [ratingReview, setRating] = useState([]);

  useEffect(() => {
    fetchData("http://localhost:3000/data/data.json").then(res => {
      setData(res.review);
      setRating(res.reviewContent);
    });
  }, []);

  const onClick = key => {
    setFilter({
      all: "false",
      good: "false",
      soso: "false",
      bad: "false"
    });
    setFilter({
      [key]: "true"
    });
    setRating([]);
    // 데이터 받을시 각자 다른  엔드포인트로 하면 되지않을까????ㅜ
    setRating([]);
    fetchData(`http://localhost:3000/data/${key}.json`).then(res => {
      setRating(res.reviewContent);
    });
  };

  const stateCheck = () => {
    if (reviewFilter.all) return "all";
    else if (reviewFilter.good) return "good";
    else if (reviewFilter.soso) return "soso";
    else if (reviewFilter.bad) return "bad";
  };
  /// 유알엘 뒤에 붙일것

  // 데이터 받을때 테스트 해보기 현재 누른상태 체크해야함
  useImperativeHandle(ref, () => ({
    moreOnClick() {
      fetchData(`http://localhost:3000/data/${stateCheck()}.json`).then(res => {
        setRating(ratingReview.concat(res.reviewContent));
      });
    }
  }));

  return (
    <DivReviewContainer>
      <HeaderReviewHeader>
        <div>
          <H2ReviewTitle>리뷰</H2ReviewTitle>
          <SpanReviewAllCount>({data.count})</SpanReviewAllCount>
        </div>
        <UlReviewFilter>
          <LiReviewList>
            <ButtonFilterBtn
              filter={reviewFilter.all}
              onClick={() => onClick("all")}
            >
              전체<SpanFilterCount>({data.count})</SpanFilterCount>
            </ButtonFilterBtn>
          </LiReviewList>
          <LiReviewList>
            <ButtonFilterBtn
              filter={reviewFilter.good}
              onClick={() => onClick("good")}
            >
              맛있다<SpanFilterCount>({data.good})</SpanFilterCount>
            </ButtonFilterBtn>
          </LiReviewList>
          <LiReviewList>
            <ButtonFilterBtn
              filter={reviewFilter.soso}
              onClick={() => onClick("soso")}
            >
              괜찮다<SpanFilterCount>({data.soso})</SpanFilterCount>
            </ButtonFilterBtn>
          </LiReviewList>
          <LiReviewList>
            <ButtonFilterBtn
              filter={reviewFilter.bad}
              onClick={() => onClick("bad")}
              last={true}
            >
              별로<SpanFilterCount>({data.bad})</SpanFilterCount>
            </ButtonFilterBtn>
          </LiReviewList>
        </UlReviewFilter>
      </HeaderReviewHeader>
      <ReviewList rate={ratingReview} />
    </DivReviewContainer>
  );
});

export default DetailReview;

const DivReviewContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  border-bottom: 1px solid #dbdbdb;
  ${Media.small`
    width: 100%;
  `}
`;

const HeaderReviewHeader = styled.header`
  margin-bottom: 14px;
  display: flex;
`;

const H2ReviewTitle = styled.h2`
  display: inline-block;
  margin-right: 5px;
  font-size: 19px;
  line-height: 1.2;
  color: #4f4f4f;
`;

const SpanReviewAllCount = styled.span`
  font-size: 19px;
  line-height: 1.2;
  color: #7f7f7f;
`;

const UlReviewFilter = styled.ul`
  display: flex;
  margin-left: auto;
`;

const LiReviewList = styled.li`
  display: flex;
  align-items: center;
`;

const ButtonFilterBtn = styled.button`
  padding-right: 3px;
  font-size: 16px;
  border: none;
  color: #9b9b9b;
  margin: 0;
  padding: 0;
  &:after {
    content: "|";
    margin: 0 7px;
    color: #9b9b9b;
  }
  ${({ filter }) =>
    filter === "true" &&
    css`
      color: #ff792a;
    `}
  ${({ last }) =>
    last &&
    css`
      &:after {
        content: "";
      }
    `}
`;

const SpanFilterCount = styled.span`
  font-size: 16px;
`;
