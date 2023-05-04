import { BottomNavigationBar, TopNavigationBar } from "@/components/Navigation";
import { Outlet } from "@tanstack/router";

export function TopBottomNavigationLayout() {
  return (
    <>
      <TopNavigationBar />
      <Outlet />
      <BottomNavigationBar />
    </>
  );
}
