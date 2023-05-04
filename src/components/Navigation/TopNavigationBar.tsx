import {
  AppBar,
  AppBarProps,
  Box,
  Button,
  Grid,
  LinearProgress,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useRouter } from "@tanstack/router";
import { useIsAuthenticated } from "react-auth-kit";
import { NavigationDrawer } from "./NavigationDrawer";
import { SettingsIconButton } from "../Settings";

export function TopNavigationBar(props: Omit<AppBarProps, "position">) {
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();

  return (
    <>
      {router.state.status === "pending" && (
        <LinearProgress color="primary" style={{ position: "fixed", top: 0, width: "100%" }} />
      )}
      <AppBar position="static" {...props}>
        <Toolbar disableGutters>
          <Grid container>
            <Grid item xs={2} sx={{ pl: 3 }}>
              <Stack direction="row" sx={{ alignItems: "center", height: "100%" }}>
                <NavigationDrawer />
                <Typography variant="h6" noWrap sx={{ display: { xs: "none", sm: "block" } }}>
                  {isAuthenticated() ? (
                    <Link href="/projects" color="inherit" underline="none">
                      {import.meta.env.VITE_APP_NAME_SHORT}
                    </Link>
                  ) : (
                    <>{import.meta.env.VITE_APP_NAME_SHORT}</>
                  )}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={10} sx={{ pr: 3 }}>
              <Stack direction="row" sx={{ alignItems: "center", height: "48px" }}>
                {/* {appBarContainerRef ? <Box sx={{ flexGrow: 1 }} ref={appBarContainerRef} /> : <Box sx={{ flexGrow: 1 }} />}
              {project.isSuccess && (
                <Typography variant="h6" noWrap sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}>
                  Project: {project.data?.title}
                </Typography>
              )} */}
                <Box sx={{ flexGrow: 1 }} />
                {!isAuthenticated() ? (
                  <Button color="inherit" component={RouterLink} to="/login" search={{}} params={{}}>
                    Login
                  </Button>
                ) : (
                  <Button color="inherit" component={RouterLink} to="/logout" search={{}} params={{}}>
                    Logout
                  </Button>
                )}
                <SettingsIconButton size="large" edge="end" color="inherit" sx={{ mr: 2 }} />
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
