import {useState} from "react";

function delay() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

function Work() {
//  const [val, setVal] = useState();

  return (
    <div>
      <p>work</p>
    </div>
  );
}

export default Work;
