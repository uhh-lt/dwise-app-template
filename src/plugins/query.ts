import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // see https://tkdodo.eu/blog/react-query-error-handling
      useErrorBoundary: true,
      // only server errors will go to the error boundary
      // useErrorBoundary: (error) => error.response?.status >= 500,
    },
  },
}); // React Query

export default queryClient;
