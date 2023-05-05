import { OpenAPI } from "@/api/openapi";
import { SettingsDialog } from "@/components/Settings";
import { SnackbarDialog } from "@/components/Snackbar";
import { RouterDevtools } from "@/plugins/router";
import { Outlet } from "@tanstack/router";

// init OpenAPI
OpenAPI.BASE = import.meta.env.VITE_SERVER || "";
OpenAPI.TOKEN = localStorage.getItem(import.meta.env.VITE_AUTH_KEY || "_auth") || undefined;

export function Root() {
  OpenAPI.TOKEN = localStorage.getItem(import.meta.env.VITE_AUTH_KEY || "_auth") || undefined;
  return (
    <>
      <Outlet />
      {/* make dialogs available everywhere */}
      <SnackbarDialog />
      <SettingsDialog />

      <RouterDevtools />
    </>
  );
}
