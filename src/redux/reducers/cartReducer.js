import { ActionTypes } from "../constants/action_types";

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const intialState = {
  cart: [],
};

export const cartReducer = (state = intialState, action) => {
  console.log("====================================");
  console.log(action);
  console.log("====================================");
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case ActionTypes.REMOVE_FROM_CART:
      const index = state.cart.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.cart];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        cart: newBasket,
      };

    default:
      return state;
  }
};
