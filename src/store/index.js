import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";
import axios from '../config/axios'

let cartItems = [];
let auth={}
if (localStorage.getItem("auth")) {
  // console.log(localStorage.getItem("auth"))
  auth = JSON.parse(localStorage.getItem("auth"));

  cartItems = auth.profile.cart.products.slice();

} else {
  cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
}
const initState = {
  cart: { items: cartItems },
  auth: auth 
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  initState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
