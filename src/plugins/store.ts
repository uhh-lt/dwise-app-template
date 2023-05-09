import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "@/routes/Example/exampleSlice";
import { SettingsReducer } from "@/components/Settings";

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    settings: SettingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
