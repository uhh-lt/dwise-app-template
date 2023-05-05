import { Navigate, useRouter } from "@tanstack/router";
import React from "react";
import { useIsAuthenticated } from "react-auth-kit";

export function RequireAuthWrapper({ children }: { children: React.ReactElement }) {
  // react-auth-kit
  const isAuthenticated = useIsAuthenticated();

  // router
  const routerState = useRouter().state;

  if (!isAuthenticated()) {
    console.log(`Route ${routerState.currentLocation.pathname} Not authenticated!`);

    return <Navigate to="/login" replace={true} search={{ from: routerState.currentLocation.pathname }} />;
  } else {
    return <>{children}</>;
  }
}
