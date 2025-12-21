import type { RootState } from "@stores";
import { type FC, type PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  redirectTo?: string;
}

export const AuthGuard: FC<PropsWithChildren<AuthGuardProps>> = ({
  children,
  redirectTo = "/login",
}) => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.applicationConfig.user
  );

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }
  return <>{children}</>;
};
