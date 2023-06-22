import {useCount} from "./Contexts/CountContext";

function Counter() {
  const {count, incr} = useCount();

  return (
    <div>
      <button onClick={incr}>push me!</button>
      <div>count is {count}</div>
    </div>
  );
}

export default Counter;
