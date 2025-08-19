import React from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import Home from './components/Home'
import Collections from './components/Collections'
import Deals from './components/Deals'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Profile from './components/Profile'
import MiscPage from './components/MiscPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CollectionByProduct from './components/CollectionByProduct'


function App() {
 
// function ProductDetails(){
//   const params = new URLSearchParams(window.location.pathname.replace(/^.*product\//, ''))
//   // We rely on react-router's route param in the ProductPage component below; this helper is unused here.
//   return null
// }
  return (
<>
 <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:slug" element={<CollectionByProduct />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<MiscPage title="About" />} />
            <Route path="/careers" element={<MiscPage title="Careers" />} />
            <Route path="/contact" element={<MiscPage title="Contact" />} />
            <Route path="/help" element={<MiscPage title="Help Center" />} />
            <Route path="/shipping" element={<MiscPage title="Shipping" />} />
            <Route path="/returns" element={<MiscPage title="Returns" />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
</>
  )
}

export default App
