// src/redux/oneboxSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Thread {
  id: string;
  subject: string;
  body: string;
  // Add other properties as needed
}

interface OneboxState {
  threads: Thread[];
}

const initialState: OneboxState = {
  threads: [],
};

const oneboxSlice = createSlice({
  name: "onebox",
  initialState,
  reducers: {
    setThreads(state, action: PayloadAction<Thread[]>) {
      state.threads = action.payload;
    },
    deleteThread(state, action: PayloadAction<string>) {
      state.threads = state.threads.filter(
        (thread) => thread.id !== action.payload
      );
    },
    // Add other actions as needed
  },
});

export const { setThreads, deleteThread } = oneboxSlice.actions;

export default oneboxSlice.reducer;
