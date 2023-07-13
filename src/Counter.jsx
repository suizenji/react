import {useCount} from "./Contexts/CountContext";
import {useState} from "react";

function delay() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

function Counter() {
  const {count, incr} = useCount();
  const [isDone, setDone] = useState(true);

  function delayCount() {
    setDone(false);
    delay().then(() => incr()).then(() => setDone(true));
  }

  if (isDone) {
    return (
      <div>
        <button onClick={incr}>sync</button>
        <button onClick={() => delayCount()}>async</button>
        <span>count is {count}</span>
      </div>
    );
  } else {
    return <div>please wait...</div>;
  }
}

export default Counter;
