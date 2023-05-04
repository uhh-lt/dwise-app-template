import { Route } from "@tanstack/router";
import { rootRoute } from "..";
import { Register } from "./Register";

export const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});
