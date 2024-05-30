import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const isAdmin = true;
  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
