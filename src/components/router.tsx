import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PublicRoute } from "@components/router-guards";
import { NudgeDashboard } from "@components/dashboard";

// Lazy load route components for code splitting
const StatsDashboard = lazy(() =>
  import("@components/stats-dashboard").then((m) => ({
    default: m.StatsDashboard,
  }))
);
const LoginPage = lazy(() =>
  import("@components/login").then((m) => ({ default: m.LoginPage }))
);
const Leads = lazy(() =>
  import("@components/leads").then((m) => ({ default: m.Leads }))
);
const Lines = lazy(() =>
  import("@components/line").then((m) => ({ default: m.Lines }))
);
const EngagementPlan = lazy(() =>
  import("@components/engagement-plan").then((m) => ({
    default: m.EngagementPlan,
  }))
);

// Loading fallback component
const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "1rem",
      color: "var(--nudge-color-black-shade02)",
    }}
  >
    Loading...
  </div>
);

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
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <StatsDashboard />
          </Suspense>
        ),
      },
      {
        path: "leads",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Leads />
          </Suspense>
        ),
      },
      {
        path: "line",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Lines />
          </Suspense>
        ),
      },
      {
        path: "lens",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <EngagementPlan />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Suspense fallback={<LoadingFallback />}>
          <LoginPage />
        </Suspense>
      </PublicRoute>
    ),
  },
]);
