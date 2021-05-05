import React, { useEffect, useRef, useCallback } from 'react';
import { Form } from 'react-bootstrap';

export default function Insert({ state, dispatch }) {
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);

  const changeDisabled = useCallback(target => {
    target.disabled = !target.disabled;
    if (!target.disabled){
      target.focus();
    }
  }, []);

  const hanldeFocus = useCallback(key => {
    switch(key) {
      case 'first':
        firstInput.current.focus();
        break;
      case 'second':
        changeDisabled(secondInput.current);
        changeDisabled(firstInput.current);
        break;
      case 'third':
        changeDisabled(thirdInput.current);
        changeDisabled(secondInput.current);
        break;
      case 'fourth':
        changeDisabled(fourthInput.current);
        changeDisabled(thirdInput.current);
        break;
      default:
        return
    }
  }, [changeDisabled]);

  const firstPattern = /^[1-9]{0,2}$/;
  const otherPattern = /^([0-9]|\.){0,2}$/;
  const lastPattern = /^[0-9]{0,2}$/;
  const handleChange = pattern => event => {
    const { name, value } = event.target
    if (value.match(pattern)) {
      const payload = value.length < 2 ? value : value.slice(1,2);
      dispatch({ type: name, payload: payload });
    }
  }

  useEffect(() => {
    for (let key in state) {
      if (state[key] === '') {
        hanldeFocus(key);
        break;
      }
    }
  }, [state, hanldeFocus]);

  return (
    <div className="insert-area">
      <Form.Control
        ref={firstInput}
        className="insert-box"
        placeholder='1'
        name={'FIRST'}
        as={'input'}
        value={state.first}
        onChange={handleChange(firstPattern)}
      />
      <Form.Control
        ref={secondInput}
        className="insert-box"
        placeholder='0'
        name={'SECOND'}
        as={'input'}
        value={state.second}
        onChange={handleChange(otherPattern)}
        disabled
      />
      <Form.Control
        ref={thirdInput}
        className="insert-box"
        placeholder='0'
        name={'THIRD'}
        as={'input'}
        value={state.third}
        onChange={handleChange(otherPattern)}
        disabled
      />
      <Form.Control
        ref={fourthInput}
        className="insert-box"
        placeholder='0'
        name={'FOURTH'}
        as={'input'}
        value={state.fourth}
        onChange={handleChange(lastPattern)}
        disabled
      />
    </div>
  );
}