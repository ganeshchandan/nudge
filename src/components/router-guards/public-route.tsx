import type { RootState } from "@stores";
import { type FC, type PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  redirectTo?: string;
}

export const PublicRoute: FC<PropsWithChildren<PublicRouteProps>> = ({
  children,
  redirectTo = "/dashboard",
}) => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.applicationConfig.user
  );

  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};
