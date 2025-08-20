import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    userRole: userReducer, //userRoll是给这块 state取得名字，对应的是userSlice.reducer
  },
});

export default store;
