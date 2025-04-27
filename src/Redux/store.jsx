import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from "./Slices/portfolioSlice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice,
  },
});
