import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

import StockEngine from "./components/StockEngine";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Watchlist from "./components/Watchlist";

import AuthService from "./services/auth.service";

function App() {
  //Variable state for logged in status, sent to the signup and login pages
  const [loggedIn, setLoggedIn] = useState(false);

  //Get logged in state on page load
  useEffect(() => {
    if (AuthService.getCurrentUser() != null) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <Router>
      <div className="App">
        <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login">
            {" "}
            {loggedIn ? (
              <Redirect to="/watchlist" />
            ) : (
              <Login setLoggedIn={setLoggedIn} />
            )}{" "}
          </Route>
          <Route exact path="/signup">
            {loggedIn ? (
              <Redirect to="/watchlist" />
            ) : (
              <Signup setLoggedIn={setLoggedIn} />
            )}{" "}
          </Route>
          <Route
            exact
            path="/stock/:ticker"
            render={(props) => <StockEngine {...props} loggedIn={loggedIn} />}
          />
          <Route exact path="/watchlist">
            {!loggedIn ? <Redirect to="/login" /> : <Watchlist />}{" "}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
