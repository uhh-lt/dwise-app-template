import { BottomNavigationBar, TopNavigationBar } from "@/components/Navigation";
import { Box } from "@mui/material";
import { Outlet } from "@tanstack/router";

export function TopBottomNavigationLayout() {
  return (
    <Box className="flexContainer">
      <TopNavigationBar className="fixedContent" />
      <Box className="flexibleContent">
        <Outlet />
      </Box>
      <BottomNavigationBar className="fixedContent" />
    </Box>
  );
}
