import { Route } from "@tanstack/router";
import { requireAuthLayoutRoute } from "..";
import { TopBottomNavigationLayout } from "./TopBottomNavigationLayout";

export const topBottomNavigationLayoutRoute = new Route({
  id: "topBottomNavigation",
  getParentRoute: () => requireAuthLayoutRoute,
  component: TopBottomNavigationLayout,
});
