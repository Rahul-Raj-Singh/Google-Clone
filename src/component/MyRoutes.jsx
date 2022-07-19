import Results from './Results';
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Navigate to="/search"/> }/>
        <Route path="/search" element={<Results/>}/>
        <Route path="/image" element={<Results/>}/>
        <Route path="/news" element={<Results/>}/>
        <Route path="/videos" element={<Results/>}/>
        <Route path="*" element={<>Bruh Moment...</>}/>
      </Routes>
    </div>
  )
}

export default MyRoutes