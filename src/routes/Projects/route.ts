import { topNavigationLayoutRoute } from "@/layouts";
import { Route } from "@tanstack/router";
import { Projects } from "./Projects";
import { projectsQuery } from "./queries";

export const projectsRoute = new Route({
  getParentRoute: () => topNavigationLayoutRoute,
  path: "/projects",
  loader: async ({ context }) => {
    const query = projectsQuery(1);
    return context.queryClient.getQueryData(query.queryKey) ?? (await context.queryClient.fetchQuery(query));
  },
  component: Projects,
});
