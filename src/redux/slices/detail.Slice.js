import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "../actions";

const initialState = {
  detailId: null,
  işLoading: false,
  error: null,
  info: null,
  route: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    open: (state, action) => {
      state.detailId = action.payload;
    },
    close: (state) => {
      state.detailId = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.işLoading = true;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.işLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.işLoading = false;
      state.error = null;
      state.info = action.payload;
      state.route = action.payload.trail;
    });
  },
});
export const { open, close } = detailSlice.actions;
export default detailSlice.reducer;
