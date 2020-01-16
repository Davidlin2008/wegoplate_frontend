const TOGGLE = "toast/TOGGLE"; // 액션 정의

export const toggle = () => ({ type: TOGGLE }); // 액션 생성자 함수

const initialState = {
  show: false
}; // 상태 기본값 설정

function showToast(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return {
        show: !state.show
      };
    default:
      return state;
  }
}
// 여기는 리듀서 함수 현재 상태 참조한 뒤 새로운 객체 생성 후 리턴

export default showToast;
