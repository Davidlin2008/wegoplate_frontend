import React, { useEffect, useState } from "react";
import Slide from "../Components/Main/Slide";
import List from "../Components/Main/List";

// api로직추가
export default function Main() {
  const [slide, setSlide] = useState([]);
  const [list, setList] = useState([]);

  // const fetchSlide = async () => {
  //   const res = await fetch("http://10.58.7.97:8000/restaurant/topic/1");
  //   const data = await res.json();
  //   setSlide(data.top_list)
  // }
  // const fetchList = async () => {
  //   const res = await fetch("http://10.58.7.97:8000/restaurant/topic/1");
  //   const data = await res.json();
  //   setList(data.어쩌고)
  // }

  // useEffect(() => {
  //   fetchSlide();
  //   fetchList();
  // }, [])
  //훅스쓰면서 호출 보기
  //탭관리
  return (
    <main>
      <Slide title={"믿고보는 맛집 리스트"} datas={slide} />
      <List title={"EAT딜을 판매중인 식당"} datas={list} />
    </main>
  );
}
