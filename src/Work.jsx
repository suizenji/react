import {useState} from "react";

function delay() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

function Work() {
//  const [user, setUser] = useState();

//  delay().then(() => setUser('Ken'));

//    <div>hello, {user}!</div>
throw new Error('error');

  return (
    <div>hello, user!</div>
  );
}

export default Work;
