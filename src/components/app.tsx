import { RouterProvider } from "react-router-dom";
import { router } from "@components/router";

export const App = () => {
  return <RouterProvider router={router} />;
};
