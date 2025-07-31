import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Details from './Details'
import Home from './Home'

function App() {
  

  return (
    <>


    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<Details/>}/>
          </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
