import { topBottomNavigationLayoutRoute } from "@/layouts";
import { Route } from "@tanstack/router";
import { Example2 } from "./Example2";

export const example2Route = new Route({
  getParentRoute: () => topBottomNavigationLayoutRoute,
  path: "/example2",
  component: Example2,
});
