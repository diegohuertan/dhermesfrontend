import React from "react";
import { Navigate } from "react-router-dom";

// Suponemos que tienes una función o un contexto para verificar la autenticación
import { useAuth } from "./Context";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/Login" />;
  }

  return element;
};

export default ProtectedRoute;
