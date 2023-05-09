import { RouterContext } from "@/plugins/router";
import { RootRoute } from "@tanstack/router";
import { ErrorBoundary } from "./ErrorBoundary";
import { Root } from "./Root";

export const rootRoute = RootRoute.withRouterContext<RouterContext>()({
  component: Root,
  errorComponent: ErrorBoundary,
});
