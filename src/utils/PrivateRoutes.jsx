import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { useParams } from "react-router-dom";
import { DEFAULTUSER, USERAPI } from "./constants";
import axios from "axios";
import CuetLoader from "../component/Loader/Loader";

const PrivateRoutes = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { subject, topic, subTopic, id } = useParams();

  useEffect(() => {
    localStorage.removeItem("timeTaken");
    localStorage.removeItem("optionsUI");
    localStorage.removeItem("questionStatus");
    localStorage.removeItem("timeTaken");
    localStorage.removeItem("user");
    localStorage.removeItem("timeForEachQues");

    const fetchUser = async () => {
      if (
        id === "free" &&
        (subject === "general_english" || subject === "general_test") &&
        subTopic === "1" &&
        topic === "mock_test"
      ) {
        localStorage.setItem("user", JSON.stringify(DEFAULTUSER));

        setIsAuthorized(true);
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${USERAPI}/users/find/${id}`);
        // console.log("response", response);
        localStorage.setItem("user", JSON.stringify(response.data));

        setIsAuthorized(true);
        setIsLoading(false);
        // console.log("User is authorized for mock test");
      } catch (err) {
        setIsAuthorized(false);
        setIsLoading(false);
        // console.log("User not found or not authorized for mock test");
        localStorage.clear();
      }
    };

    fetchUser();
  }, [id, subTopic, subject, topic]);

  if (isLoading) {
    return <CuetLoader />;
  }

  return isAuthorized ? <Outlet /> : <Navigate to="/notfound" />;
};

export default PrivateRoutes;
