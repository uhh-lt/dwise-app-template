import { Route } from "@tanstack/router";
import { requireAuthLayoutRoute } from "..";
import { TopNavigationLayout } from "./TopNavigationLayout";

export const topNavigationLayoutRoute = new Route({
  id: "topNavigation",
  getParentRoute: () => requireAuthLayoutRoute,
  component: TopNavigationLayout,
});
