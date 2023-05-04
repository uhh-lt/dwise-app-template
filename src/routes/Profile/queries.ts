import { UserService } from "@/api/openapi";

export const userQuery = () => ({
  queryKey: ["user", "me"],
  queryFn: async () => UserService.getMe(),
});
