import {useCount} from "./Contexts/CountContext";

function delay() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

function Counter() {
  const {count, incr} = useCount();

  function delayCount() {
    delay().then(() => incr());
  }

  return (
    <div>
      <button onClick={incr}>sync</button>
      <button onClick={() => delayCount()}>async</button>
      <span>count is {count}</span>
    </div>
  );
}

export default Counter;
