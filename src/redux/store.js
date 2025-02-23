import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flightSlice";
import detailReducer from "./slices/detail.Slice";

export default configureStore({
  reducer: {
    flight: flightReducer,
    detail: detailReducer,
  },
});
