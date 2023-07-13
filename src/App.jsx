import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

import {useState} from "react";

function App() {
  const [value, setValue] = useState();

  return (
    <div className="App">
      <header className="App-header">
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

        <section>
          <input onChange={e => setValue(e.target.value)} value={value}></input>
          <div>value is {value}</div>
        </section>

        <section>
          <Link to="/count">link to /count</Link>
        </section>
      </header>
    </div>
  );
}

export default App;
