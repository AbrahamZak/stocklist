import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import "./App.css";

import StockEngine from "./components/StockEngine";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/stock/:ticker" component={StockEngine} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

/*
      <Navigation />
      
      <Homepage />
       <StockEngine ticker="MSFT"/>
*/
