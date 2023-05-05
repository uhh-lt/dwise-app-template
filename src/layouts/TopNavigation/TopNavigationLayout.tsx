import { TopNavigationBar } from "@/components/Navigation";
import { Box } from "@mui/material";
import { Outlet } from "@tanstack/router";
import { RequireAuthWrapper } from "../RequireAuth/RequireAuthWrapper";

export function TopNavigationLayout() {
  return (
    <RequireAuthWrapper>
      <Box className="flexContainer">
        <TopNavigationBar className="fixedContent" />
        <Box className="flexibleContent">
          <Outlet />
        </Box>
      </Box>
    </RequireAuthWrapper>
  );
}
