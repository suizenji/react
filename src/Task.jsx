import {useState, useEffect} from "react";

function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

function Task() {
  const [isDone, setDone] = useState(true);

  useEffect(() => {
    setDone(false);
    delay().then(() => setDone(true));
  }, []);

  if (isDone) {
    return <div>done</div>;
  } else {
    return <div>please wait...</div>;
  }
}

export default Task;
