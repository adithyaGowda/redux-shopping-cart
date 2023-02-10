import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      const { message, type, open } = action.payload;
      state.notification = {
        message: message,
        type: type,
        open: open,
      };
    },
  },
});

export const { showNotification } = uiSlice.actions;

export default uiSlice;
