import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Jno",
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    test: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { test } = portfolioSlice.actions;

export default portfolioSlice.reducer;
