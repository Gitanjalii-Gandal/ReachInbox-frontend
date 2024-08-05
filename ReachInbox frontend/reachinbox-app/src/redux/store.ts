// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import oneboxReducer from "./oneboxSlice";

export const store = configureStore({
  reducer: {
    onebox: oneboxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
