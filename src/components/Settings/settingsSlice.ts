import { createSlice } from "@reduxjs/toolkit";

export interface SettingsState {
  isOpen: boolean;
}

const initialState: SettingsState = {
  isOpen: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    show: (state) => {
      state.isOpen = true;
    },
    hide: (state) => {
      state.isOpen = false;
    },
  },
});

export const SettingsActions = settingsSlice.actions;
export const SettingsReducer = settingsSlice.reducer;
