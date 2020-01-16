import { combineReducers } from "redux";
import showToast from "./Toast";

const rootReducer = combineReducers({
  showToast
});

export default rootReducer;
// 이번엔 리듀서 함수가 하나라서 안넣어도 되지만 여러개 일경우 컴바인리듀서 안에 리듀서 함수들을 넣어서 하나의 루트 리듀서로 합쳐야함
// showToast, reducer1, reducer2 ....
