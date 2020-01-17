import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [inputValue, setInputValue] = useState("");
  const [searchList, setSearchList] = useState([]);

  // const fetchSearchList = async () => {
  //   const res = await fetch(
  //     `http://10.58.4.10:8001/restaurant/keyword?text=${inputValue}`
  //   );
  //   const data = await res.json();
  //   setSearchList(data);
  // };

  const listA = () => {
    console.log(searchList);
    if (searchList.length === 0) return <></>;
    else {
      return searchList.result.map((list, key) => (
        <li className="keyword_list" key={key}>
          {list}
        </li>
      ));
    }
  };
  const onChangeInputValue = e => {
    setInputValue(e.target.value);
    console.log("input값 fetch로 보내는 중");
  };

  useEffect(() => {
    const fetchSearchList = async () => {
      const res = await fetch(
        `http://10.58.7.97:8000/restaurant/keyword?text=${inputValue}`
      );
      const data = await res.json();
      setSearchList(data);
    };
    fetchSearchList();
  }, [inputValue]);

  // const onChangeInputValue = e => {
  //   setInputValue(e.target.value);
  //   console.log("input값 fetch로 보내는 중");
  // };

  return (
    <header className="header">
      <div className="header_img">
        <div className="header_p_wrapper">
          <p>솔직한 리뷰, 믿을 수 있는 평점!</p>
          <p>망고플레이트</p>
          <div className="header_search">
            <span className="search_icon" />
            <input
              className="search"
              type="text"
              placeholder="식당 이름"
              onChange={onChangeInputValue}
            />
            {inputValue.length === 0 ? (
              <></>
            ) : (
              <div className="keyword_box">
                <ul className="keyword_lists">{listA()}</ul>
              </div>
            )}
            <input
              className="search_button"
              value="검색"
              type="submit"
              onClick={() => props.history.push(`/search?=${inputValue}`)}
            />
          </div>
          <Link to="/eat_deal">
            <img
              className="eat_deal_img"
              src={require("../../Images/eat.png")}
              alt="sad"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
