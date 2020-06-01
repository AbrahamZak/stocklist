import React from 'react';
import './App.css';

import StockEngine from './components/StockEngine'

function App() {
  return (
    <div className="App">
      <StockEngine ticker="MSFT"/>
    </div>
  );
}

export default App;
