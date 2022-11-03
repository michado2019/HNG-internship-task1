import React from 'react'
import {Routes, Route} from "react-router-dom";
import Contact from "../components/pages/Contact";
import Main from "../components/pages/Main";
export default function AppRouter() {
  return (
    <div className='appRouter'>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
     <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
