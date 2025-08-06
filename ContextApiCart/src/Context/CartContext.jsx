import { createContext, useContext, useState } from "react";


export const contextCart = createContext(null);

export const useCart=()=>{
    const cart=useContext(contextCart);
    return cart;
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  return (
    <contextCart.Provider value={{ items, setItems }}>
      {children}
    </contextCart.Provider>
  );
};
