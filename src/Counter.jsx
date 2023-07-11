import {useCount} from "./Contexts/CountContext";

function delay() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

function Counter() {
  const {count, incr} = useCount();

  return (
    <div>
      <button onClick={incr}>push me!</button>
      <span>count is {count}</span>
    </div>
  );
}

export default Counter;
