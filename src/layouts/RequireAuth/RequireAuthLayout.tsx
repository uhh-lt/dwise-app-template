import { Navigate, Outlet, useRouter } from "@tanstack/router";
import { useIsAuthenticated } from "react-auth-kit";

export function RequireAuthLayout() {
  // react-auth-kit
  const isAuthenticated = useIsAuthenticated();

  // router
  const routerState = useRouter().state;

  console.log("RequireAuth", routerState.currentLocation.pathname, isAuthenticated());

  if (!isAuthenticated()) {
    console.log(`Route ${routerState.currentLocation.pathname} Not authenticated!`);

    return <Navigate to="/login" replace={true} search={{ from: routerState.currentLocation.pathname }} />;
  } else {
    return <Outlet />;
  }
}
