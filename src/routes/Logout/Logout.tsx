import { Box, Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "@tanstack/router";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";

export function Logout() {
  // react-auth-kit
  const signOut = useSignOut();
  const isAuthenticated = useIsAuthenticated();

  // router
  const navigate = useNavigate();

  // actions
  const handleLogout = () => {
    signOut();
    // Send user back to login page
    navigate({ to: "/login", replace: true });
  };

  if (!isAuthenticated()) {
    return (
      <Container maxWidth="md">
        <Typography variant={"h3"} gutterBottom mt={3} textAlign="center">
          Whoops!
        </Typography>
        <Typography variant={"h5"} gutterBottom mt={3} textAlign="center">
          You are not signed in.
        </Typography>
        <Typography variant={"body1"} gutterBottom mt={3} textAlign="center">
          Please click the button below to visit the login page.
        </Typography>
        <Box display="flex" mt={5}>
          <Button
            component={Link}
            to="/login"
            params={{}}
            search={{}}
            variant="contained"
            color="primary"
            sx={{ mx: "auto" }}
          >
            Login
          </Button>
        </Box>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="md">
        <Typography variant={"h3"} gutterBottom mt={3} textAlign="center">
          Bye!
        </Typography>
        <Typography variant={"h5"} gutterBottom mt={3} textAlign="center">
          Thanks for using {import.meta.env.VITE_APP_NAME}!
        </Typography>
        <Typography variant={"body1"} gutterBottom mt={3} textAlign="center">
          Please click the button below to log out.
        </Typography>
        <Box display="flex" mt={5}>
          <Button onClick={handleLogout} variant="contained" color="primary" sx={{ mx: "auto" }}>
            Logout
          </Button>
        </Box>
      </Container>
    );
  }
}
