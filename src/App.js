import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Time!</h1>
        <p>Look Up Weather In Your City</p>
      </header>
      <Weather />
    </div>
  );
}

export default App;
