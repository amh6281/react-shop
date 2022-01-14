export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
// amount는 초기값이자 앞으로 축적될 값들이 저장될 인수
// reduce는 배열의 모든 값을 합산
// basket 배열에서 item의 price를 합산하기 위해 reduce 사용

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
