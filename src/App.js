import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Box } from './box';
import Button from 'react-bootstrap/Button';

function App() {
  const [circleCount, setCircles] = useState(0);

  function setCircleCount() {
    var count = parseInt(localStorage.getItem("cCount"));
    if (isNaN(count)) {
      setCircles(1);
    } else {
      setCircles(count + 1);
    }
    localStorage.setItem("cCount", circleCount + 1);
  };

  useEffect(() => {
    var count = parseInt(localStorage.getItem("cCount"));
    if (isNaN(count)) {
      setCircles(0);
    } else {
      setCircles(count);
    }
  }, []);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Box circles={circleCount} />
      <br />
      <Button variant="primary" onClick={setCircleCount}>Add Circle</Button>{' '}
      <br />
      We have {circleCount} circle(s) now. {' '}
    </div>
  );
}

export default App;
