import { SnackbarActions } from "@/components/Snackbar";
import { ErrorMessage } from "@hookform/error-message";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "@tanstack/router";
import React, { useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "./mutations";

type RegisterFormValues = {
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
  confirm: string;
};

export function Register() {
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormValues>();

  // global client state - redux
  const dispatch = useDispatch();

  // router
  const navigate = useNavigate();

  // password
  const password = watch("password", "");

  // local client state
  const [showPassword, setShowPassword] = useState(false);

  // mutations
  const registerMutation = useRegisterMutation();

  // actions
  const handleShowPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(event.target.checked);
  };

  const handleRegistration: SubmitHandler<RegisterFormValues> = (data) => {
    registerMutation.mutate(
      {
        requestBody: {
          first_name: data.firstName,
          last_name: data.lastName,
          password: data.password,
          email: data.mail,
        },
      },
      {
        onSuccess: () => {
          dispatch(
            SnackbarActions.show({
              text: "Registration success! Redirecting to login...",
              severity: "success",
              duration: 1000,
            })
          );
          setTimeout(() => {
            navigate({ to: "/login", search: { from: undefined } });
          }, 1000);
        },
      }
    );
  };
  const handleError: SubmitErrorHandler<RegisterFormValues> = (data) => console.error(data);

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
      <Card sx={{ width: 450 }} raised>
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <CardContent>
            <Typography variant="h5" component="div" align="center">
              Create your D-WISE Account
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 1, mb: 0.5 }}>
              <TextField
                variant="outlined"
                fullWidth
                label="First name"
                type="text"
                {...register("firstName", { required: "First name is required" })}
                error={Boolean(errors.firstName)}
                helperText={<ErrorMessage errors={errors} name="firstName" />}
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Last name"
                type="text"
                {...register("lastName", { required: "Last name is required" })}
                error={Boolean(errors.lastName)}
                helperText={<ErrorMessage errors={errors} name="lastName" />}
              />
            </Stack>

            <TextField
              variant="outlined"
              fullWidth
              label="E-Mail"
              type="email"
              margin="dense"
              {...register("mail", { required: "E-Mail is required" })}
              error={Boolean(errors.mail)}
              helperText={<ErrorMessage errors={errors} name="mail" />}
            />

            <Stack direction="row" spacing={2} sx={{ mt: 1, mb: 0.5 }}>
              <TextField
                variant="outlined"
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password too short! (minimum 8 characters)",
                  },
                })}
                error={Boolean(errors.password)}
                helperText={<ErrorMessage errors={errors} name="password" />}
              />
              <TextField
                variant="outlined"
                label="Confirm"
                type={showPassword ? "text" : "password"}
                fullWidth
                {...register("confirm", {
                  required: "Password is required",
                  validate: (value) => value === password || "Passwords do not match!",
                })}
                error={Boolean(errors.confirm)}
                helperText={<ErrorMessage errors={errors} name="confirm" />}
              />
            </Stack>
            <FormHelperText sx={{ ml: 1.8 }}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </FormHelperText>
            <FormGroup sx={{ ml: 1 }}>
              <FormControlLabel
                control={<Checkbox value={showPassword} onChange={handleShowPasswordChange} />}
                label="Show Password"
              />
            </FormGroup>
          </CardContent>
          <CardActions>
            <Button color="primary" component={Link} to="/login" params={{}} search={{}}>
              Back
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <LoadingButton
              variant="contained"
              color="success"
              type="submit"
              disabled={registerMutation.isSuccess}
              loading={registerMutation.isLoading}
              loadingPosition="start"
              startIcon={<AppRegistrationIcon />}
            >
              Register
            </LoadingButton>
          </CardActions>
        </form>
      </Card>
    </Box>
  );
}
