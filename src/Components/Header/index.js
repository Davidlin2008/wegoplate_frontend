import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const [searchList, setSearchList] = useState([
    "어쩌고asdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁ",
    "어쩌고",
    "어쩌고",
    "어쩌고",
    "어쩌고",
    "어쩌고",
    "어쩌고",
    "어쩌고",
    "어쩌고",
    "어쩌고",
    "어쩌고",
    "어쩌고",
    "어쩌고",
    "어쩌고",
    "어쩌고"
  ]);

  // const fetchSearchList = async () => {
  //   const res = await fetch("");
  //   const data = await res.json();
  //   setSearchList(data.어쩌고);
  // };

  const onChangeInputValue = e => {
    // fetchSearchList();
    setInputValue(e.target.value);
    // fetch("http://:8000", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     inputValue: inputValue
    //   })
    // });
    // console.log("input값 fetch로 보내는 중");
  };

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
                <ul className="keyword_lists">
                  {searchList.map((list, key) => (
                    <li className="keyword_list" key={key}>
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <input
              className="search_button"
              value="검색"
              type="submit"
              onClick={onChangeInputValue}
            />
          </div>
          <Link to="/eat_deal">
            <img
              className="eat_deal"
              src={require("../../Images/eat.png")}
              alt="sad"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
