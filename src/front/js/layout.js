import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Home from "./pages/home";
import AllReviews from "./pages/allReviews";
import MemberZone from "./pages/memberZone";
import OneReview from "./pages/oneReview";
import injectContext from "./store/appContext";
import Navbar from "./component/navbar";
import MyReviews from "./pages/myReviews";
import Register from "./pages/register";
import SignIn from "./pages/signIn";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/allreviews">
              <AllReviews />
            </Route>
            <Route exact path="/members">
              <MemberZone />
            </Route>
            <Route exact path="/makereview">
              <OneReview />
            </Route>
            <Route exact path="/myreviews">
              <MyReviews />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default injectContext(Layout);
