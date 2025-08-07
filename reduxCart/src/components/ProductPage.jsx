import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Slices/CartSlice";

const products = [
  { id: 21, name: "Gaming Chair", price: 8999, image: "https://placehold.co/300x300?text=Gaming+Chair" },
  { id: 22, name: "4K Monitor", price: 15999, image: "https://placehold.co/300x300?text=4K+Monitor" },
  { id: 23, name: "Wireless Charger", price: 1999, image: "https://placehold.co/300x300?text=Wireless+Charger" },
  { id: 24, name: "Drone", price: 24999, image: "https://placehold.co/300x300?text=Drone" },
  { id: 25, name: "Action Camera", price: 9999, image: "https://placehold.co/300x300?text=Action+Camera" },
  { id: 26, name: "Electric Scooter", price: 19999, image: "https://placehold.co/300x300?text=Electric+Scooter" },
  { id: 27, name: "Noise Cancelling Earbuds", price: 4999, image: "https://placehold.co/300x300?text=Noise+Cancelling+Earbuds" },
  { id: 28, name: "Smart Light Bulb", price: 799, image: "https://placehold.co/300x300?text=Smart+Light+Bulb" },
  { id: 29, name: "Video Doorbell", price: 6999, image: "https://placehold.co/300x300?text=Video+Doorbell" },
  { id: 30, name: "Portable Projector", price: 11999, image: "https://placehold.co/300x300?text=Portable+Projector" },
  { id: 31, name: "Robot Vacuum", price: 15999, image: "https://placehold.co/300x300?text=Robot+Vacuum" },
  { id: 32, name: "Smart Thermostat", price: 5499, image: "https://placehold.co/300x300?text=Smart+Thermostat" },
  { id: 33, name: "Gaming Desk", price: 7999, image: "https://placehold.co/300x300?text=Gaming+Desk" },
  { id: 34, name: "Graphic Tablet", price: 6999, image: "https://placehold.co/300x300?text=Graphic+Tablet" },
  { id: 35, name: "Bluetooth Tracker", price: 1499, image: "https://placehold.co/300x300?text=Bluetooth+Tracker" },
  { id: 36, name: "Smart Scale", price: 2299, image: "https://placehold.co/300x300?text=Smart+Scale" },
  { id: 37, name: "VR Headset", price: 26999, image: "https://placehold.co/300x300?text=VR+Headset" },
  { id: 38, name: "Gaming Router", price: 9999, image: "https://placehold.co/300x300?text=Gaming+Router" },
  { id: 39, name: "Air Fryer", price: 4999, image: "https://placehold.co/300x300?text=Air+Fryer" },
  { id: 40, name: "Smart Lock", price: 6499, image: "https://placehold.co/300x300?text=Smart+Lock" },
];

const ProductGrid = () => {
    const dispatch=useDispatch();
    
    return(
<div className="bg-gray-100 min-h-screen p-6">
    <h1 className="text-3xl font-bold text-center mb-8">More Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <div key={p.id} className="bg-white shadow-md rounded-lg hover:scale-105 transition">
          <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-600 font-medium">₹{p.price}</p>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onClick={()=>dispatch(addToCart(p))}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
    )

    
  
};

export default ProductGrid;