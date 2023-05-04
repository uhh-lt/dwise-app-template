import { useQuery } from "@tanstack/react-query";
import { useAuthUser } from "react-auth-kit";
import { projectsQuery } from "./queries";

export function Projects() {
  // react-auth-kit
  const auth = useAuthUser();

  // react-query
  const { data: projects } = useQuery(projectsQuery(auth()?.id));

  return <div>Hello from Projects! {projects?.length}</div>;
}
