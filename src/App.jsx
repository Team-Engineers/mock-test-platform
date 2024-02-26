import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import SubTopicQuestion from "./pages/subtopicQuestion/SubTopicQuestion";
import UserProfile from "./pages/user/UserProfile";
import PrivateRoutes from "./utils/PrivateRoutes";
import Nopage from "./pages/nopage/Nopage";
import ScrollToTop from "./component/scrolltotop/ScrollToTop";
import Instruction from "./component/instruction/Instruction";
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
            <Route exact path="/" element={<Home />} />
            <Route path="/:topic/:subTopic" element={<SubTopicQuestion />} />
            <Route exact path="/user" element={<UserProfile />} />
            <Route exact path="/quiz/instruction" element={<Instruction />} />
          </Route>
          {isUserSignedIn() ? (
            <Route exact path="/" element={<Home />} />
          ) : (
            <Route exact path="/login" element={<Login />} />
          )}

          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
