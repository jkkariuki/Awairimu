import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Listing from "./components/listing/Listing";
import About from "./components/about/About";
import BlogSpot from "./components/blogspot/BlogSpot";
import Footer from "./components/layout/footer/Footer";
import Alert from "./components/layout/Alert";
import NotFound from "./components/layout/NotFound";
import SavedListings from "./components/saved/SavedListings";
import PrivateRoute from "./components/routing/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Alert />

      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/about' component={About} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/listing/:id' component={Listing} />
            <Route exact path='/blog' component={BlogSpot} />
            <PrivateRoute exact path='/saved' component={SavedListings} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
