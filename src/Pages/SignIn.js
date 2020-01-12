import React, { useState } from "react";
import "./SignIn.scss";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = e => {
    setId(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleChange = async => {
    fetch("", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        password: password
      })
    })
      .then(res => res.json())
      .then(res => localStorage.setItem("access_token", res.access_token));
    this.props.history.push("/");
  };

  console.log("아이디:" + id);
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
          value={id}
          onChange={onChangeId}
          placeholder="아이디"
        ></input>
        <input
          type="password"
          className="sign_input border"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호"
        ></input>
        <button type="button" className="sign_button" onClick={handleChange}>
          로그인
        </button>
        <div className="line"></div>
        <Link to="/signup" className="linkSignUp">
          <span>회원가입</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
