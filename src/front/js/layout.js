import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Home from "./pages/home";
import AllReviews from "./pages/allReviews";
import MemberZone from "./pages/memberZone";
import OneReview from "./pages/oneReview";
import injectContext from "./store/appContext";
import Navbar from "./component/navbar";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
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
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
