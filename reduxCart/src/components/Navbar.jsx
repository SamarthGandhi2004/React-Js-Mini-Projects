import React, { useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  // Example cart count state
  const selector=useSelector((state)=>state.cart.length||0)
  const [cartCount, setCartCount] = useState();

  useEffect(()=>{
setCartCount(selector)
  },[selector])

  const navigate=useNavigate();

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Website Logo / Name */}
          <div className="flex-shrink-0 text-2xl font-bold cursor-pointer" onClick={()=>navigate("/")}>
            ShopEase
          </div>

          {/* Cart Icon */}
          <div className="relative cursor-pointer" onClick={()=>navigate("/cart")}>
            <ShoppingCartIcon className="h-8 w-8 text-white" />
            
            {/* Cart Count Badge */}
            
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs font-semibold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
