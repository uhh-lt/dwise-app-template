import { AlertProps } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SnackbarEvent {
  text: string;
  severity: AlertProps["severity"];
  duration: number;
}

export interface SnackbarState extends SnackbarEvent {
  open: boolean;
}

const initialState: SnackbarState = {
  open: false,
  text: "",
  severity: "success",
  duration: 1000,
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    show: (state, action: PayloadAction<SnackbarEvent>) => {
      state.open = true;
      state.duration = action.payload.duration;
      state.text = action.payload.text;
      state.severity = action.payload.severity;
    },
    hide: (state) => {
      state.open = false;
    },
  },
});

export const SnackbarActions = snackbarSlice.actions;
export const SnackbarReducer = snackbarSlice.reducer;
