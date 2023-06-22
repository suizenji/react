import React, { createContext, useState, useContext } from "react";

const CountContext = createContext();
export const useCount = () => useContext(CountContext);

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  const incr = () => setCount(count + 1);

  return (
    <CountContext.Provider value={{ count, incr }}>
      {children}
    </CountContext.Provider>
  );
}
