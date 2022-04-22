import { ActionTypes } from "../constants/action_types";

export const addToCartAction = (cart) => {
  console.log(cart);
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: cart,
  };
};

export const removeFromCartAction = (id) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    id: id,
  };
};
