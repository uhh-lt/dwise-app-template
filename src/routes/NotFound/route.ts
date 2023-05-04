import { Route } from "@tanstack/router";
import { rootRoute } from "..";
import { NotFound } from "./NotFound";

export const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});
