import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import SubTopicQuestion from "./pages/subtopicQuestion/SubTopicQuestion";
import PrivateRoutes from "./utils/PrivateRoutes";
import Nopage from "./pages/nopage/Nopage";
import ScrollToTop from "./component/scrolltotop/ScrollToTop";
const App = () => {
  const isUserSignedIn = () => {
    const tokenData = JSON.parse(localStorage.getItem("accessToken"));
    return tokenData && new Date().getTime() < tokenData.expiry;
  };
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/:topic/:subTopic" element={<SubTopicQuestion />} />
          </Route>
          {isUserSignedIn() ? (
            <Route exact path="/" element={<Nopage />} />
          ) : (
            <Route path="*" element={<Nopage />} />
          )}

          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
