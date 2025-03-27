import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("login") ||
      location.pathname.includes("register")
    )
  ) {
    return <Navigate to="/login"></Navigate>;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("login") ||
      location.pathname.includes("register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="admin/dashboard" />;
    } else {
      return <Navigate to="shop" />;
    }
  }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/notAuth"></Navigate>;
  }

  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard"></Navigate>;
  }

  return <div>{children}</div>;
};

export default CheckAuth;
