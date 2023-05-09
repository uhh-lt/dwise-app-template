import { OpenAPI } from "@/api/openapi";
import { SettingsDialog } from "@/components/Settings";
import { RouterDevtools } from "@/plugins/router";
import { CustomToaster } from "@/plugins/toast";
import { Outlet } from "@tanstack/router";

// init OpenAPI
OpenAPI.BASE = import.meta.env.VITE_SERVER || "";
OpenAPI.TOKEN = localStorage.getItem(import.meta.env.VITE_AUTH_KEY || "_auth") || undefined;

export function Root() {
  OpenAPI.TOKEN = localStorage.getItem(import.meta.env.VITE_AUTH_KEY || "_auth") || undefined;
  return (
    <>
      <Outlet />
      <CustomToaster />
      {/* make dialogs available everywhere */}
      <SettingsDialog />

      <RouterDevtools />
    </>
  );
}
