import React from "react";
import { useCart } from "./Context/CartContext";

const Item = (props) => {
  const context = useCart();

  return (
    <>
      <li>
        {props.name}--${props.price}
      </li>
      <button
        onClick={() => {
          console.log(props);
          context.setItems([
            ...context.items,
            { name: props.name, price: props.price },
          ]);
        }}
      >
        add to Cart
      </button>
    </>
  );
};

export default Item;
