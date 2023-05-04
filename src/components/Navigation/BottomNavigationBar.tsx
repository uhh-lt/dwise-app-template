import SearchIcon from "@mui/icons-material/Search";
import BottomNavigation, { BottomNavigationProps } from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "@tanstack/router";

export function BottomNavigationBar(props: Omit<BottomNavigationProps, "showLabels" | "value">) {
  return (
    <BottomNavigation showLabels {...props}>
      <BottomNavigationAction
        label="Example"
        icon={<SearchIcon />}
        component={Link}
        to={`/example`}
        search={{}}
        params={{}}
        activeProps={{ className: "Mui-selected" }}
      />
      <BottomNavigationAction
        label="Example2"
        icon={<SearchIcon />}
        component={Link}
        to={`/example2`}
        search={{}}
        params={{}}
        activeProps={{ className: "Mui-selected" }}
      />
    </BottomNavigation>
  );
}
