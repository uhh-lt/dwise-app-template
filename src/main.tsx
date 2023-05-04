import "@/main.css";
import theme from "@/plugins/mui.ts";
import queryClient from "@/plugins/query.ts";
import { store } from "@/plugins/store";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/router";
import React from "react";
import { AuthProvider } from "react-auth-kit";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { router } from "./plugins/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Redux Toolkit */}
    <Provider store={store}>
      {/* React Query */}
      <QueryClientProvider client={queryClient}>
        {/* React MUI */}
        <ThemeProvider theme={theme}>
          {/* React Auth Kit */}
          <AuthProvider authType={"localstorage"} authName={import.meta.env.VITE_AUTH_KEY}>
            <CssBaseline />
            {/* React Router */}
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} toggleButtonProps={{ style: { marginLeft: "100px" } }} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
