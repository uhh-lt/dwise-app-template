import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "@tanstack/router";

export function ErrorBoundary({ error, info }: { error: Error; info: { componentStack: string } }) {
  return (
    <Container maxWidth="md">
      <Typography variant={"h3"} gutterBottom mt={3} textAlign="center">
        {error.message}
      </Typography>
      <code
        style={{
          maxHeight: "50vh",
          overflow: "auto",
          display: "block",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      >
        {info.componentStack}
      </code>

      <Typography variant={"body1"} gutterBottom mt={3} textAlign="center">
        Sorry for the inconvenience! Go back to projects?
      </Typography>
      <Box display="flex" mt={5}>
        <Button
          component={Link}
          to="/projects"
          params={{}}
          search={{}}
          variant="contained"
          color="primary"
          sx={{ mx: "auto" }}
        >
          Return to projects
        </Button>
      </Box>
    </Container>
  );
}
