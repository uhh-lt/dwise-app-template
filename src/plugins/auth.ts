import { UserRead } from "@/api/openapi";
import "react-auth-kit";

// Register your router for maximum type safety
declare module "react-auth-kit" {
  export function useAuthUser(): () => UserRead | null;
}
