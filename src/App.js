import React from 'react';
import './App.css';

import StockEngine from './components/StockEngine'
import Homepage from './components/Homepage'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Homepage/>
    </div>
  );
}

export default App;

/*
      <StockEngine ticker="MSFT"/>
*/
