import { Route } from "@tanstack/router";
import { rootRoute } from "..";
import { Logout } from "./Logout";

export const logoutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/logout",
  component: Logout,
});
