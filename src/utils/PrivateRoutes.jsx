import React from "react";
import { Navigate, Outlet } from "react-router";
import { DEFAULTUSER, USERAPI } from "./constants";
import { useParams } from "react-router-dom";
import axios from "axios";

const PrivateRoutes = () => {
  const { subTopic, id } = useParams();
  let accessibleRoute = false;

  const fetchUser = async () => {
    if (id === "free" && subTopic === "1") {
      localStorage.setItem("user", JSON.stringify(DEFAULTUSER));
      accessibleRoute = true;
    } else {
      try {
        const response = await axios.get(`${USERAPI}/users/find/${id}`);
        localStorage.setItem("user", JSON.stringify(response.data));
        accessibleRoute = true;
      } catch (err) {
        accessibleRoute = false;

        localStorage.clear();
      }
    }
  };
  fetchUser();
  return accessibleRoute ? <Outlet /> : <Navigate to="/notfound" />;
};

export default PrivateRoutes;
