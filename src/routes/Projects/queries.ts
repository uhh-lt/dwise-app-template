/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { UserService } from "@/api/openapi";

export const projectsQuery = (userId: number | undefined) => ({
  queryKey: ["projects", userId],
  queryFn: async () => UserService.getUserProjects({ userId: userId! }),
  options: {
    enabled: !!userId,
  },
});
