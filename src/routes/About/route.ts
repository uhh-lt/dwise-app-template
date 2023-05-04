import { Route } from "@tanstack/router";
import { rootRoute } from "..";
import { About } from "./About";

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
