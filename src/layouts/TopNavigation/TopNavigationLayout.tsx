import { TopNavigationBar } from "@/components/Navigation";
import { Outlet } from "@tanstack/router";

export function TopNavigationLayout() {
  return (
    <>
      <TopNavigationBar />
      <Outlet />
    </>
  );
}
