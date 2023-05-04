import { RootRoute } from "@tanstack/router";
import { Root } from "./Root";
import { RouterContext } from "@/plugins/router";

export const rootRoute = RootRoute.withRouterContext<RouterContext>()({
  component: Root,
});
