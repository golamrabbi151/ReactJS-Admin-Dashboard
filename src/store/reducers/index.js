import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from './cartReducer'

export default combineReducers({
  cart: cartReducer,
  auth: authReducer
});
