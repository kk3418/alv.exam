import React from 'react';
import Display from './Display';
import './App.css';
import Insert from './Insert';
import MyDropdown from './MyDropdown';

function App() {
  return (
    <div className="App">
      <Display />
      <div className="insert-drpodwon-container">
        <MyDropdown />
        <Insert />
      </div>
    </div>
  );
}

export default App;
