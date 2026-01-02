import { RouterProvider } from "react-router-dom";
import { router } from "@components/router";
import { ErrorBoundary } from "@components/common/error-boundary";

export const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
