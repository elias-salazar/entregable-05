import { configureStore } from "@reduxjs/toolkit";
import userNameSlice from "./slices/userName";

export default configureStore({
  reducer: {
    userName: userNameSlice,
  },
});
