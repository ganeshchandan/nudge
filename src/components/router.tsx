import { createBrowserRouter, Navigate } from "react-router-dom";
import { StatsDashboard } from "@components/stats-dashboard";
import { LoginPage } from "@components/login";
import { AuthGuard, PublicRoute } from "@components/router-guards";
import { NudgeDashboard } from "@components/dashboard";
import { Leads } from "@components/leads";
import { Lines } from "@components/line";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <NudgeDashboard />
      </AuthGuard>
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
        element: <Lines />,
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
