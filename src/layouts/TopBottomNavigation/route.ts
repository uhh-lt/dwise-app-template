import { rootRoute } from "@/routes";
import { Route } from "@tanstack/router";
import { TopBottomNavigationLayout } from "./TopBottomNavigationLayout";

export const topBottomNavigationLayoutRoute = new Route({
  id: "topBottomNavigation",
  getParentRoute: () => rootRoute,
  component: TopBottomNavigationLayout,
});
