import React from 'react';

export default function Display({ state }) {
  let display = '';
  const objKey = Object.keys(state);
  objKey.forEach(key => {
    display += state[key];
  });
  
  return (
    <div className="display-area">
      <div className="display-box">
        <div className="display-text">
          {display === '' ? '--' : display}
        </div>
      </div>
    </div>
  );
}