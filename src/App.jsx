import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import SubTopicQuestion from "./pages/subtopicQuestion/SubTopicQuestion";
import Nopage from "./pages/nopage/Nopage";
import ScrollToTop from "./component/scrolltotop/ScrollToTop";
import { DEFAULTUSER, USERAPI } from "./utils/constants";
import axios from "axios";
import TietLoader from "./component/Loader/Loader";

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/:topic/:subTopic/:id" element={<PrivateRoutes />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

const PrivateRoutes = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { topic, subTopic, id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      if (
        id === "free" &&
        topic === "general_english_mock_test" &&
        subTopic === "1"
      ) {
        localStorage.setItem("user", JSON.stringify(DEFAULTUSER));

        setIsAuthorized(true);
        setIsLoading(false);
        return;
      }

      try {
        await axios.get(`${USERAPI}/users/find/${id}`);
        setIsAuthorized(true);
        setIsLoading(false);
        console.log("User is authorized for mock test");
      } catch (err) {
        setIsAuthorized(false);
        setIsLoading(false);
        console.log("User not found or not authorized for mock test");
        localStorage.clear();
      }
    };

    fetchUser();
  }, [id,subTopic,topic]);

  if (isLoading) {
    return <TietLoader />; // You can replace this with a loader component
  }

  return isAuthorized ? <SubTopicQuestion /> : <Navigate to="/notfound" />;
};

export default App;
