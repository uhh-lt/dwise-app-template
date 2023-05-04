import { rootRoute } from "@/routes";
import { Route } from "@tanstack/router";
import { RequireAuthLayout } from "./RequireAuthLayout";

export const requireAuthLayoutRoute = new Route({
  id: "auth",
  getParentRoute: () => rootRoute,
  component: RequireAuthLayout,
});
