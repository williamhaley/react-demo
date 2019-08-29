
import React, { useEffect, useState, useReducer, useCallback } from 'react';
import './App.css';
import { useDispatch } from 'react-redux'

const initialState = { count2: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count2: state.count2 + 1 };
    case 'decrement':
      return { count2: state.count2 - 1 };
    default:
      throw new Error();
  }
}

function Thing() {
  // Simple local state vars.
  const [results, setResults] = useState([]);
  const [count, setCount] = useState(0);

  // Complex local state vars.
  const [state, dispatch] = useReducer(reducer, initialState);

  // Global state vars.
  const reduxDispatch = useDispatch()
  const incrementFoo = useCallback(() => reduxDispatch({ type: 'increment' }), [reduxDispatch]);

  useEffect(() => {
    let didCancel = false;

    setTimeout(() => {
      if (didCancel) {
        return;
      }

      setResults(results => [new Date(), ...results]);
    }, 300);

    return () => { didCancel = true };
  }, [count]);

  return (
    <div>
      <div>
        Header {state.count2}
      </div>
      <nav><button onClick={() => {
        setCount(count + 1);
        dispatch({ type: 'increment' });
        incrementFoo({ type: 'increment' });
      }}>Load</button></nav>
      <article>
        {results.map((result, index) => {
          return (
            <div key={index}>{result.toString()}</div>
          );
        })}
      </article>
    </div>
  );
}

export default Thing;
