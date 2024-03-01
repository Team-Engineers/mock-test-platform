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

// {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTNjMDJmNjdiYzE0MTM2NWE2NGE2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwODk2Mzk1OSwiZXhwIjoxNzA5Mzk1OTU5fQ.vd_2XfE9tzwlh_R5deaWuwyeyGZfK1idFjt1g_R62W4","expiry":1709395960292}
export default PrivateRoutes;
