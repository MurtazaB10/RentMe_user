import { ActionTypes } from "../constants/action_types";

const intialState = {
  user: [],
};
export const userReducer = (state = intialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
