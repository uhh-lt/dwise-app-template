import { topBottomNavigationLayoutRoute } from "@/layouts";
import { Route } from "@tanstack/router";
import { Example } from "./Example";

export const exampleRoute = new Route({
  getParentRoute: () => topBottomNavigationLayoutRoute,
  path: "/example",
  component: Example,
});
