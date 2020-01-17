import React, { useState } from "react";
import "./SignUp.scss";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const SignUp = props => {
  const [nick_name, setNick_name] = useState("");
  const [idCheck, setIdCheck] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const OverLab = styled.button`
    position: absolute;
    right: 1px;
    width: 20%;
    height: 40px;
    font-size: 10px;
    border: 1px solid #888888;
    background: linear-gradient(to left, red, #ff7100);
    color: white;
  `;
  const Div = {
    display: "flex",
    position: "relative"
  };
  const chkEmail = function(str) {
    const regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    return regExp.test(str) ? true : false;
  };
  const emailOverLab = () => {
    if (chkEmail(email) === false) {
      alert("이메일 형식이 올바르지 않습니다");
    } else {
      alert("사용가능한 이메일 형식입니다.");
    }
  };
  const nickNameOverLab = () => {
    const chkNickname = function(str) {
      const regNm = /^[가-힣,a-zA-Z]{2,15}|[a-zA-Z]{2,15}\s[a-zA-Z]{2,15}$/;
      return regNm.test(str) ? true : false;
    };
    const inputNickName = {
      nick_name: nick_name
    };
    if (chkNickname(nick_name) === false) {
      alert("닉네임형식이 올바르지 않습니다");
    } else {
      fetch("http://13.125.34.234:8000/user/nickname", {
        method: "POST",
        body: JSON.stringify(inputNickName)
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === "POSSIBLE") {
            alert("사용가능 한 닉네임입니다.");
            setIdCheck(nick_name);
          } else {
            alert("이미 존재하는 닉네임입니다.");
            console.log(res.message);
          }
        });
    }
  };
  console.log(nick_name);
  console.log(email);

  const onChangeId = e => {
    const nickName = /^[가-힣,a-zA-Z]{2,15}|[a-zA-Z]{2,15}\s[a-zA-Z]{2,15}$/;
    setNick_name(e.target.value);
    setIdError(nickName.test(e.target.value) === false);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
    setPwError(e.target.value.length < 8);
  };
  const onChangeRePassword = e => {
    setRePassword(e.target.value);
    setPasswordError(e.target.value !== password);
  };

  const onChangeEmail = e => {
    const emailtest = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    setEmail(e.target.value);
    setEmailError(emailtest.test(e.target.value) === false);
  };
  const onClick = () => {
    let string = false;
    let num = false;
    for (let i = 0; i < password.length; i++) {
      if (password.charAt(i) >= "0" && password.charAt(i) <= "9") {
        num = true;
      } else if (password.charAt(i) >= "a" && password.charAt(i) <= "z") {
        string = true;
      }
    }

    if (
      password === repassword &&
      password.length >= 8 &&
      string === true &&
      num === true &&
      email &&
      nick_name &&
      nick_name.length < 11 &&
      nick_name === idCheck &&
      chkEmail(email) === true
    ) {
      fetch("http://13.125.34.234:8000/user", {
        method: "POST",
        body: JSON.stringify({
          nick_name: idCheck,
          password: password,
          email: email
        })
      })
        .then(res => res.json())

        .then(alert("회원가입이 완료되었습니다."))
        .then(props.history.push("./"));
    } else {
      alert("입력값 혹은 중복,형식체크를 확인해주세요");
    }
  };

  return (
    <div className="sign_up">
      <div className="sign_box">
        <div className="name">
          <span>Sign Up</span>
        </div>
        <div className="sign_item">
          <span>이메일</span>
          <div style={Div}>
            <input
              className={`signUp_input ${
                email.length > 0 && emailError ? "border" : ""
              }`}
              placeholder="E-mail"
              value={email}
              onChange={onChangeEmail}
            ></input>
            <OverLab onClick={emailOverLab}>형식체크</OverLab>
          </div>
          {emailError && (
            <span className="event">이메일 주소를 다시 확인해주세요.</span>
          )}
        </div>
        <div className="sign_item">
          <span>닉네임</span>
          <div style={Div}>
            <input
              className={`signUp_input ${
                nick_name.length > 0 && idError ? "border" : ""
              }`}
              value={nick_name}
              onChange={onChangeId}
              placeholder="닉네임"
            ></input>
            <OverLab onClick={nickNameOverLab}>중복체크</OverLab>
          </div>
          {idError && (
            <span className="event">
              2~10자리의 한글 소,대문자 숫자만 사용 가능합니다.
            </span>
          )}
        </div>

        <div className="sign_item">
          <span>비밀번호</span>
          <input
            type="password"
            className={`signUp_input ${
              password.length > 0 && password.length < 8 ? "border" : ""
            }`}
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호"
          ></input>
          {pwError && (
            <span className="event">
              영문숫자 혼합 8자이상의 비밀번호를 사용하세요.
            </span>
          )}
        </div>
        <div className="sign_item">
          <span>비밀번호 재확인</span>
          <input
            className={`signUp_input ${
              repassword !== password ? "border" : ""
            }`}
            type="password"
            value={repassword}
            onChange={onChangeRePassword}
            placeholder="비밀번호 확인"
          ></input>
          {passwordError && (
            <span className="event">비밀번호가 일치하지 않습니다.</span>
          )}
        </div>

        <button type="button" className="signUp_button" onClick={onClick}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
