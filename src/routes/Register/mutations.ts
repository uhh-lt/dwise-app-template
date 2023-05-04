import { UserService } from "@/api/openapi";
import { useMutation } from "@tanstack/react-query";

export const useRegisterMutation = () =>
  useMutation({
    mutationFn: UserService.register,
    onSuccess: (data, variables, context) => {
      console.log(data);
      console.log(variables);
      console.log(context);
    },
  });
