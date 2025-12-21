import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StatsDashboard } from "@components/stats-dashboard";
import { LoginPage } from "@components/login";
import { PublicRoute, AuthGuard } from "@components/router-guards";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthGuard>
              <StatsDashboard />
            </AuthGuard>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
