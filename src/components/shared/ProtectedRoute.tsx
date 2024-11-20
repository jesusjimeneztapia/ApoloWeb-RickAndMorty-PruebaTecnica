import { useAuthStore } from "@stores/auth.store";
import { FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

function useProtectedRoute() {
  const navigate = useNavigate();
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (!token) {
      navigate("/autenticacion", { replace: true });
    }
  }, [token]); // eslint-disable-line
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  useProtectedRoute();
  return <>{children}</>;
};

export default ProtectedRoute;
