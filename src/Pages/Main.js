import React from "react";
import Slide from "../Components/Main/Slide";
import List from "../Components/Main/List";
import { slide, list, highrate, eatdealing } from "../Components/Main/data";

export default function Main() {
  // , { useEffect, useState }
  // const [slide, setSlide] = useState([]);
  // const [list, setList] = useState([]);
  // const []

  // const fetchSlide = async () => {
  //   const res = await fetch("http://10.58.7.97:8000/restaurant/topic/1");
  //   const data = await res.json();
  //   setSlide(data.top_list);
  // };
  // const fetchList = async () => {
  //   const res = await fetch("http://10.58.7.97:8000/restaurant/topic/4");
  //   const data = await res.json();
  //   setList(data.top_list);
  // };
  // const fetchList = async () => {
  //   const res = await fetch("");
  //   const data = await res.json();
  //   setList(data.result);
  // };

  // useEffect(() => {
  //   fetchSlide();
  //   fetchList();
  // }, []);
  //훅스쓰면서 호출 보기
  //탭관리
  return (
    <main>
      <Slide title={"믿고보는 맛집 리스트"} datas={slide} />
      <List title={"EAT딜을 판매중인 식당"} datas={eatdealing} />
      <List title={"평점이 높은 인기 식당"} datas={highrate} />
      <Slide title={"메뉴별 인기 맛집"} datas={list} />
    </main>
  );
}
