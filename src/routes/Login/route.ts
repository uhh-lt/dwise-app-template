import { Route } from "@tanstack/router";
import { rootRoute } from "..";
import { Login } from "./Login";

interface LoginSearch {
  from: string | undefined;
}

export const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  validateSearch: (search: Record<string, unknown>): LoginSearch => {
    // see here for more info: https://tanstack.com/router/v1/docs/guide/search-params#validating-search-params
    return {
      from: search.from ? String(search.from) : undefined,
    };
  },
  component: Login,
});
