import { createContext, useState } from "react";

export const contextCart = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  return (
    <contextCart.Provider value={{ items, setItems }}>
      {children}
    </contextCart.Provider>
  );
};
