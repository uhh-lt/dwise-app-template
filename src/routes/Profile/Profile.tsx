import { useQuery } from "@tanstack/react-query";
import { userQuery } from "./queries";

export function Profile() {
  // react-query
  const { data: user } = useQuery(userQuery());

  return (
    <div>
      {user?.first_name} {user?.last_name}
    </div>
  );
}
