import React from "react";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import SubTopicQuestion from "./pages/subtopicQuestion/SubTopicQuestion";
import Nopage from "./pages/nopage/Nopage";
import ScrollToTop from "./component/scrolltotop/ScrollToTop";
import PrivateRoutes from "./utils/PrivateRoutes";


const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route
              path="/:topic/:subTopic/:id"
              element={<SubTopicQuestion />}
            />
          </Route>
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
