import { TopNavigationBar } from "@/components/Navigation";
import { Box } from "@mui/material";
import { Outlet } from "@tanstack/router";

export function TopNavigationLayout() {
  return (
    <Box className="flexContainer">
      <TopNavigationBar className="fixedContent" />
      <Box className="flexibleContent">
        <Outlet />
      </Box>
    </Box>
  );
}
