import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";
import styled, { css } from "styled-components";
import fetchData from "../../../Utils/Fetch";
import ReviewList from "../ReviewList";
import Media from "../../../Utils/Media";
import { API_URL } from "../../../config";

const DetailReview = forwardRef((props, ref) => {
  const [data, setData] = useState({});
  const [reviewFilter, setFilter] = useState({
    all: "true",
    good: "false",
    soso: "false",
    bad: "false"
  });
  const [ratingReview, setRating] = useState([]);
  const [number, setNumber] = useState({});

  useEffect(() => {
    fetchData("http://localhost:3000/data/data.json").then(res => {
      setData(res.review);
      // setRating(res.reviewContent);
    });
  }, []);

  useEffect(() => {
    fetchData(`http://10.58.7.97:8000/restaurant/${props.params}/review`).then(
      res => {
        setRating(res);
        setNumber(res);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stateCheck = () => {
    if (reviewFilter.all) return 4;
    else if (reviewFilter.good) return 1;
    else if (reviewFilter.soso) return 2;
    else if (reviewFilter.bad) return 3;
  };

  const onClick = (key, num) => {
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
    fetchData(`${API_URL}/restaurant/${props.params}/review?taste=${num}`).then(
      res => {
        setRating(res);
      }
    );
  };

  /// 유알엘 뒤에 붙일것

  // 데이터 받을때 테스트 해보기 현재 누른상태 체크해야함
  // const id = useRef(1);
  // const setId = n => {
  //   id.current = n;
  // };
  useImperativeHandle(ref, () => ({
    moreOnClick() {
      console.log(ratingReview);
      fetchData(
        `http://10.58.7.97:8000/restaurant/${
          props.params
        }/review?taste=${stateCheck()}&offset=${ratingReview.offset + 1}`
      ).then(res => {
        const copy = Object.assign({}, ratingReview);
        if (copy.result !== res.result) {
          const concatArr = copy.result.concat(res.result);
          copy.result = concatArr;
          copy.offset = res.offset;
        }
        setRating(copy);
      });
    }
  }));

  return (
    <DivReviewContainer>
      <HeaderReviewHeader>
        <div>
          <H2ReviewTitle>리뷰</H2ReviewTitle>
          <SpanReviewAllCount>({number.total_count})</SpanReviewAllCount>
        </div>
        <UlReviewFilter>
          <LiReviewList>
            <ButtonFilterBtn
              filter={reviewFilter.all}
              onClick={() => onClick("all", 4)}
            >
              전체
              <SpanFilterCount>({number.total_count})</SpanFilterCount>
            </ButtonFilterBtn>
          </LiReviewList>
          <LiReviewList>
            <ButtonFilterBtn
              filter={reviewFilter.good}
              onClick={() => onClick("good", 1)}
            >
              맛있다
              <SpanFilterCount>({number.good_count})</SpanFilterCount>
            </ButtonFilterBtn>
          </LiReviewList>
          <LiReviewList>
            <ButtonFilterBtn
              filter={reviewFilter.soso}
              onClick={() => onClick("soso", 2)}
            >
              괜찮다
              <SpanFilterCount>({number.soso_count})</SpanFilterCount>
            </ButtonFilterBtn>
          </LiReviewList>
          <LiReviewList>
            <ButtonFilterBtn
              filter={reviewFilter.bad}
              onClick={() => onClick("bad", 3)}
              last={true}
            >
              별로<SpanFilterCount>({number.bad_count})</SpanFilterCount>
            </ButtonFilterBtn>
          </LiReviewList>
        </UlReviewFilter>
      </HeaderReviewHeader>
      <ReviewList rate={ratingReview.result} />
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
