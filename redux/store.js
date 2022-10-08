import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
// import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    // applyMiddleware: applyMiddleware,
  },
});
