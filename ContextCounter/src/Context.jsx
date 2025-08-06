import React, { createContext, useState } from "react";

export const contextCounter = createContext(null);

// Create Provider component
export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <contextCounter.Provider value={{ count, setCount }}>
      {children}
    </contextCounter.Provider>
  );
};
