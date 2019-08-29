import React from 'react';
import './App.css';
import Thing from './Thing';
import { useSelector } from 'react-redux';

function App() {
  const foos = useSelector(state => state.foos);

  return (
    <div className="App">
      <header className="App-header">
        Header {foos}
      </header>
      <img alt="" src="https://www.google.com/image.jpg" />
      <Thing />
      <Thing />
    </div>
  );
}

export default App;
