import { useQuery } from "@tanstack/react-query";
import { useAuthUser } from "react-auth-kit";
import { projectsQuery } from "./queries";
import { Card, CardActionArea, CardActions, CardContent, Container, Grid, Toolbar, Typography } from "@mui/material";
import { ProjectRead } from "@/api/openapi";
import { Link } from "@tanstack/router";

export function Projects() {
  // react-auth-kit
  const userData = useAuthUser()();

  // react-query
  const { data: projects } = useQuery(projectsQuery(userData?.id));

  return (
    <Container maxWidth="xl">
      <Toolbar sx={{ p: "0px !important" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          All Projects {(userData && `of ${userData.first_name} ${userData.last_name}`) || ""}
        </Typography>
      </Toolbar>
      <Grid container spacing={2}>
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Container>
  );
}

interface ProjectCardProps {
  project: ProjectRead;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Grid item>
      <Card sx={{ width: 420 }}>
        <CardActionArea component={Link} to="/example" search={{}} params={{}}>
          <CardContent sx={{ padding: "0px !important" }}>
            <Typography variant="body2" color="text.primary" bgcolor="lightgray" p={2} height={200}>
              {project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography
            variant="subtitle1"
            component={Link}
            to="/example"
            search={{}}
            params={{}}
            sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
          >
            {project.title}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}
