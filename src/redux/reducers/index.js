import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default reducers;
