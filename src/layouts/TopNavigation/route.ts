import { rootRoute } from "@/routes";
import { Route } from "@tanstack/router";
import { TopNavigationLayout } from "./TopNavigationLayout";

export const topNavigationLayoutRoute = new Route({
  id: "topNavigation",
  getParentRoute: () => rootRoute,
  component: TopNavigationLayout,
});
