import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';

export default function Insert({ state, dispatch }) {
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);

  const hanldeFocus = key => {
    switch(key) {
      case 'first':
        firstInput.current.focus();
        break;
      case 'second':
        secondInput.current.focus();
        break;
      case 'third':
        thirdInput.current.focus();
        break;
      case 'fourth':
        fourthInput.current.focus();
        break;
      default:
        return
    }
  }

  const handleChange = (event) => {
    const pattern = /^([0-9]|\.){0,1}$/
    const { name, value } = event.target
    if (value.match(pattern)) {
      dispatch({ type: name, payload: value})
    }
  }

  useEffect(() => {
    for (let key in state) {
      if (state[key] === '') {
        hanldeFocus(key);
        break;
      }
    }
  }, [state]);

  return (
    <div className="insert-area">
      <Form.Control
        ref={firstInput}
        className="insert-box"
        placeholder='1'
        name={'FIRST'}
        as={'input'}
        value={state.first}
        onChange={handleChange}
      />
      <Form.Control
        ref={secondInput}
        className="insert-box"
        placeholder='0'
        name={'SECOND'}
        as={'input'}
        value={state.second}
        onChange={handleChange}
      />
      <Form.Control
        ref={thirdInput}
        className="insert-box"
        placeholder='.'
        name={'THIRD'}
        as={'input'}
        value={state.third}
        onChange={handleChange}
      />
      <Form.Control
        ref={fourthInput}
        className="insert-box"
        placeholder='0'
        name={'FOURTH'}
        as={'input'}
        value={state.fourth}
        onChange={handleChange}
      />
    </div>
  );
}