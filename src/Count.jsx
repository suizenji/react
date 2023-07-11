import './App.css';
import {CountProvider} from "./Contexts/CountContext";
import Counter from './Counter';

function Count() {
  return (
    <div className="App">
      <CountProvider>
        <Counter />
        <Counter />
        <CountProvider>
          <Counter />
        </CountProvider>
      </CountProvider>

      <CountProvider>
        <Counter />
      </CountProvider>
    </div>
  );
}

export default Count;
