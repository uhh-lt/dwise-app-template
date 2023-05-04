import { topBottomNavigationLayoutRoute } from "@/layouts";
import { Route } from "@tanstack/router";
import { Profile } from "./Profile";
import { userQuery } from "./queries";

export const profileRoute = new Route({
  getParentRoute: () => topBottomNavigationLayoutRoute,
  path: "/profile",
  loader: async ({ context }) => {
    const query = userQuery();
    return context.queryClient.getQueryData(query.queryKey) ?? (await context.queryClient.fetchQuery(query));
  },
  component: Profile,
});
