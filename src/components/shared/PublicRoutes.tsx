import { useAuth } from "@/hooks/useAuth";
import type { FC } from "react";
import { Navigate } from "react-router";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;