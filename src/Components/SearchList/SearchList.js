import React, { useState, useEffect } from "react";
import SearchListEntry from "./SearchListEntry";
import styled from "styled-components";
import { orange } from "./Styled";

const Section = styled.section`
  margin-top: 10px;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  flex-direction: column;
  padding-bottom: 40px;
`;
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 4%;
`;

const H1 = styled.h1`
  position: relative;
  margin: 95px auto 0px 100px;
  top: 0;
  display: block;
  color: ${orange};
  font-weight: lighter;
  font-size: 1.438rem;
`;

export default function SearchList(props) {
  console.log(props);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const fetchSearchList = async () => {
      const res = await fetch(
        `http://10.58.7.97:8000/restaurant/search/${props.location.search.slice(
          2
        )}`
      );
      const data = await res.json();
      console.log("하이", data);
      setSearchList(data.restaurant_list);
    };
    fetchSearchList();
  }, [props.history.search, props.location.search]);

  if (searchList === undefined) return <></>;
  return (
    <Section>
      <H1>맛집 인기 검색 순위</H1>
      <ListContainer className="ListContainer">
        {searchList.map((data, key) => (
          <SearchListEntry data={data} key={key} />
        ))}
      </ListContainer>
    </Section>
  );
}
