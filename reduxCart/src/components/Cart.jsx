import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/Slices/CartSlice";

const Cart = () => {

    const selector=useSelector((state)=>state.cart)
    const dispatch=useDispatch();
    console.log("rcart",selector);
  // Dummy cart data (replace later with Context/Redux)
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{setCartItems(selector|| [])},[selector])
  
  // Remove item from cart
  const removeItem = (id) => {
    dispatch(removeFromCart(id))
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty 🛒</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">₹{item.price} × {item.qty}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <h2 className="text-xl font-bold">Total:</h2>
            <span className="text-xl font-semibold">₹{totalPrice}</span>
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
