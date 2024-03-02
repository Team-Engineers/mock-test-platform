import React from "react";
import {
  Route,
  BrowserRouter,
  Routes,
  useParams,
} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import SubTopicQuestion from "./pages/subtopicQuestion/SubTopicQuestion";
import PrivateRoutes from "./utils/PrivateRoutes";
import Nopage from "./pages/nopage/Nopage";
import ScrollToTop from "./component/scrolltotop/ScrollToTop";
import { DEFAULTUSER, USERAPI } from "./utils/constants";
import axios from "axios";
// import { DEFAULTUSER, USERAPI } from "./utils/constants";
// import axios from "axios";

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route
              path="/:topic/:subTopic/:id"
              element={<SubTopicQuestionWithId />}
            />
          </Route>
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

const SubTopicQuestionWithId = () => {
  const { subTopic, id } = useParams();
  let accessible = false;

  const fetchUser = async () => {
    if (id === "free" && subTopic === "1") {
      localStorage.setItem("user", JSON.stringify(DEFAULTUSER));
      accessible = true;
    } else {
      try {
        const response = await axios.get(`${USERAPI}/users/find/${id}`);
        localStorage.setItem("user", JSON.stringify(response.data));
        accessible = true;
      } catch (err) {
        accessible = false;

        localStorage.clear();
      }
    }
  };
  fetchUser();

  return accessible ? <SubTopicQuestion /> : <Nopage />;
};

export default App;
