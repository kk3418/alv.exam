import React, { useReducer } from 'react';
import Display from './Display';
import './App.css';
import Insert from './Insert';
import MyDropdown from './MyDropdown';

function reducer(state, action) {
  switch (action.type) {
    case 'FIRST':
      return { ...state, first: action.payload };
    case 'SECOND':
      return { ...state, second: action.payload };
    case 'THIRD':
      return { ...state, third: action.payload };
    case 'FOURTH':
      return { ...state, fourth: action.payload };
    default: 
      return state;
  }
}

function App() {
  const initState = {
    first: '',
    second: '',
    third: '',
    fourth: '',
  };
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <Display state={state} />
      <div className="insert-drpodwon-container">
        <MyDropdown />
        <Insert state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
