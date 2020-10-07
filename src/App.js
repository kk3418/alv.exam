import React, { useState } from 'react';
import Display from './Display';
import './App.css';
import Insert from './Insert';
import MyDropdown from './MyDropdown';

function App() {
  const [display, setDisplay] = useState('--');
  return (
    <div className="App">
      <Display display={display} />
      <div className="insert-drpodwon-container">
        <MyDropdown />
        <Insert setDisplay={setDisplay}/>
      </div>
    </div>
  );
}

export default App;
