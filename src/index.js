import React from "react";
import ReactDOM from "react-dom";
import "./Styles/Common.scss";
import Routes from "./Routes";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";

const store = createStore(rootReducer, composeWithDevTools()); // 스토어 생성 및 개발자도구 툴 적용

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
