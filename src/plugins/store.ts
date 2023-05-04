import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "@/routes/Example/exampleSlice";
import { SnackbarReducer } from "@/components/Snackbar";
import { SettingsReducer } from "@/components/Settings";

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    snackbar: SnackbarReducer,
    settings: SettingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
