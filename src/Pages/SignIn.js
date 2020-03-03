import React, { useState } from "react";
import "./SignIn.scss";
import kakao from "../Images/ct.JPG";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KakaoLogin from "react-kakao-login";
import { withRouter } from "react-router-dom";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const responseKakao = res => {
    fetch("http://13.125.34.234:8000/user/kakao", {
      method: "POST",
      body: JSON.stringify(),
      headers: { Authorization: res.response.access_token }
    })
      .then(res => res.json())
      .then(res => localStorage.setItem("access_token", res.access_token));
    console.log(res);
    console.log(res.response.access_token);
  };
  const responseFail = err => {
    console.log(err);
  };

  const onChangeId = e => {
    setEmail(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleClick = async => {
    if (email.length <= 0 && password.length <= 0) {
      alert("이메일 혹은 비밀번호를 입력해주세요");
    } else {
      fetch("http://10.58.7.97:8000/user/signin", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === "POSSIBLE") {
            alert("로그인 완료.");

            console.log(res);
            localStorage.setItem("access_token", res.access_token);
            props.history.push("./");
          } else {
            alert("아이디 혹은 비밀번호를 확인해주세요");
            console.log(res);
          }
        });
    }
  };
  const Spans = styled.span`
    color: black;
    margin-top: 15px;
  `;
  const KakaoButton = styled(KakaoLogin)`
    display: flex;
    width: 30%;
    height: 50px;
    margin-top: 10px;
    border-radius: 30px;
    margin-bottom: 15px;
    border: none;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    background-color: #ffe700;

    font-weight: 600;
    img {
      margin-right: 15px;
    }
    @media (max-width: 768px) {
      width: 40%;
    }
  `;
  const col = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  const kakaob = {
    borderRight: "1px solid black"
  };
  console.log("아이디:" + email);

  console.log("패스워드:" + password);
  return (
    <div className="login_Block">
      <div className="login">
        <div className="name">
          <span>LOGIN</span>
        </div>
        <input
          type="text"
          className="sign_input border"
          value={email}
          onChange={onChangeId}
          placeholder="Email"
        ></input>
        <input
          type="password"
          className="sign_input border"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호"
        ></input>

        <button type="button" className="sign_button" onClick={handleClick}>
          로그인
        </button>
        <div className="line"></div>
        <Link to="/signup" className="linkSignUp">
          <span>회원가입</span>
        </Link>

        <Spans>또는</Spans>
        <div style={col}>
          <KakaoButton
            jsKey="5158dfef9fc5025b8a39aaa96b34ee83"
            onSuccess={responseKakao}
            onFailure={responseFail}
            getProfile="true"
          >
            <img src={kakao} style={kakaob} alt="kakao"></img>
            카카오톡으로 시작하기
          </KakaoButton>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
