import SearchIcon from "@mui/icons-material/Search";
import BottomNavigation, { BottomNavigationProps } from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link, useRouter } from "@tanstack/router";

function calculateValue(path: string) {
  if (path.match(/project\/\d+\/search.*/i)) {
    return 0;
  } else if (path.match(/project\/\d+\/annotation.*/i)) {
    return 1;
  } else if (path.match(/project\/\d+\/analysis.*/i)) {
    return 2;
  } else if (path.match(/project\/\d+\/logbook.*/i)) {
    return 3;
  } else if (path.match(/project\/\d+\/autologbook.*/i)) {
    return 4;
  }
}

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
