import { requireAuthLayoutRoute, topBottomNavigationLayoutRoute, topNavigationLayoutRoute } from "@/layouts";
import {
  aboutRoute,
  exampleRoute,
  loginRoute,
  logoutRoute,
  notFoundRoute,
  profileRoute,
  projectsRoute,
  registerRoute,
  rootRoute,
  example2Route,
} from "@/routes";
import { Router } from "@tanstack/router";
import React from "react";
import queryClient from "./query";

const routeTree = rootRoute.addChildren([
  loginRoute,
  registerRoute,
  logoutRoute,
  aboutRoute,
  requireAuthLayoutRoute.addChildren([
    topBottomNavigationLayoutRoute.addChildren([exampleRoute, example2Route, profileRoute]),
    topNavigationLayoutRoute.addChildren([projectsRoute]),
  ]),
  notFoundRoute,
]);

export type RouterContext = {
  queryClient: typeof queryClient;
};

// Create the router using your route tree
export const router = new Router({
  routeTree,
  context: {
    queryClient,
  },
  onRouteChange: () => {
    console.log("Changed route!");
  },
});

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

// Devtools
export const RouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );
