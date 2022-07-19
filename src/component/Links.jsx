import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <div className="flex justify-around text-lg text-center mt-2">
        <NavLink to="/search" className={({isActive}) => isActive ? "border-b border-b-blue-400" : "" }>Search 🔎</NavLink>    
        <NavLink to="/image" className={({isActive}) => isActive ? "border-b border-b-blue-400" : "" }>Images 📷</NavLink>    
        <NavLink to="/news" className={({isActive}) => isActive ? "border-b border-b-blue-400" : "" }>News 📰</NavLink>    
        <NavLink to="/videos" className={({isActive}) => isActive ? "border-b border-b-blue-400" : "" }>Videos 📼</NavLink>    
    </div>
  )
}

export default Links