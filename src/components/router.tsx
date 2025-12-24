import { createBrowserRouter, Navigate } from "react-router-dom";
import { StatsDashboard } from "@components/stats-dashboard";
import { LoginPage } from "@components/login";
import { AuthGuard, PublicRoute } from "@components/router-guards";
import { NudgeDashboard } from "./dashboard";
import { Leads } from "./leads";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/dashboard",
    element: (
      // <AuthGuard>
      <NudgeDashboard />
      // </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="stats" replace />,
      },
      {
        path: "stats",
        element: <StatsDashboard />,
      },
      {
        path: "leads",
        element: <Leads />,
      },
      {
        path: "line",
        element: <>Line Page</>,
      },
      {
        path: "lens",
        element: <>Lens Page</>,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
]);
