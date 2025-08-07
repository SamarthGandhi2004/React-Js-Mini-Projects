import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ProductGrid from "./components/ProductPage";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar visible on all pages */}
      <Navbar />  

      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
