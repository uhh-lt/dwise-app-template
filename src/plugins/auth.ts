import { UserRead } from "@/api/openapi";
import "react-auth-kit";

declare module "react-auth-kit" {
  export function useAuthUser(): () => UserRead | null;
}
