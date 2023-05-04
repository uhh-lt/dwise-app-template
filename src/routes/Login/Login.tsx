import { ApiError, UserRead, UserService } from "@/api/openapi";
import { ErrorMessage } from "@hookform/error-message";
import { AccountCircle } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import { Link, useNavigate, useSearch } from "@tanstack/router";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { loginRoute } from "./route";

type LoginFormValues = {
  user: string;
  password: string;
};

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormValues>();

  // react-auth-kit
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();

  // router
  const navigate = useNavigate();
  const { from } = useSearch({ from: loginRoute.id });

  // form handling
  const handleLogin: SubmitHandler<LoginFormValues> = async (data) => {
    // TODO: improve backend route! it shoud return expires_in and the user data
    UserService.login({ formData: { username: data.user, password: data.password } })
      .then((authData) => {
        if (
          signIn({
            token: authData.access_token,
            expiresIn: 600,
            tokenType: authData.token_type,
            authState: {
              email: "dummy@dwts.org",
              created: "01-01-2023",
              first_name: "John",
              last_name: "Doe",
              id: 1,
              password: "pass",
              updated: "01-01-2023",
            } as UserRead,
            // refreshToken: res.data.refreshToken, // Only if you are using refreshToken feature
            // refreshTokenExpireIn: res.data.refreshTokenExpireIn, // Only if you are using refreshToken feature
          })
        ) {
          setTimeout(() => {
            navigate({ to: from || "/projects", replace: true, search: {}, params: {} });
          }, 1);
        } else {
          const msg = "An unexpected error occurred...";
          setError("user", {
            message: msg,
          });
          setError("password", {
            message: msg,
          });
        }
      })
      .catch((e: ApiError) => {
        let msg = "Server is not available!";
        if (e.status === 403) {
          msg = "User and password do not match!";
        }
        setError("user", {
          message: msg,
        });
        setError("password", {
          message: msg,
        });
      });
  };
  const handleError: SubmitErrorHandler<LoginFormValues> = (data) => console.error(data);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" component="div" align="center">
        {import.meta.env.VITE_APP_NAME}
      </Typography>
      {isAuthenticated() ? (
        <>
          Hi! You are already logged in :)
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
              Go to projects
            </Button>
          </Box>
        </>
      ) : (
        <Card sx={{ width: 450 }} raised component={"form"} onSubmit={handleSubmit(handleLogin, handleError)}>
          <CardContent>
            <Typography variant="h5" component="div" align="center">
              Welcome!
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <AccountCircle sx={{ color: "action.active", mr: 1 }} fontSize="medium" />
              <TextField
                variant="outlined"
                fullWidth
                placeholder="User"
                {...register("user", { required: "User is required" })}
                error={Boolean(errors.user)}
                helperText={<ErrorMessage errors={errors} name="user" />}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <LockIcon sx={{ color: "action.active", mr: 1 }} fontSize="medium" />
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Password"
                type="password"
                {...register("password", { required: "Password is required" })}
                error={Boolean(errors.password)}
                helperText={<ErrorMessage errors={errors} name="password" />}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Button color="primary" component={Link} to="/register" search={{}} params={{}}>
              Create Account
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="contained" color="success" type="submit">
              Login
            </Button>
          </CardActions>
        </Card>
      )}
    </Box>
  );
}
