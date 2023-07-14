import {useState} from "react";

function delay() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

function pro() {
//  throw new Promise(f => f);
  return <div>please wait...</div>;
}

function Suspense() {
  return (
    <div>
      <p>suspense test</p>
      {pro()}
    </div>
  );
}

export default Suspense;
