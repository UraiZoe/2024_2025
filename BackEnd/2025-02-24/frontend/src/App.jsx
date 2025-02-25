import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./oldalak/Home"
import Navbar from './Navbar';
import Valasztottszoba from './oldalak/Valasztottszoba';

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="valasztottszoba" element={<Valasztottszoba />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
