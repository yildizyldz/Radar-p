import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  işLoading: true,
  error: null,
  flights: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  extraReducers: (build) => {},
});
export default flightSlice.reducer;
