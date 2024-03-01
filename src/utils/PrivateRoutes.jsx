import React from "react";
import { Navigate, Outlet } from "react-router";
import { DEFAULTUSER } from "./constants";
import { useParams } from "react-router-dom";

const PrivateRoutes = () => {
  const { id } = useParams();
  if (id === "free") {
    localStorage.setItem("user", JSON.stringify(DEFAULTUSER));
  }
  const isUserSignedIn = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    return userData?.name;
  };
  return isUserSignedIn() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
