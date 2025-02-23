import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions";

const initialState = {
  işLoading: true,
  error: null,
  flights: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.işLoading = true;
    });
    builder.addCase(getFlights.rejected, (state, action) => {
      state.işLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.işLoading = false;
      state.error = null;
      state.flights = action.payload;
    });
  },
});
export default flightSlice.reducer;
