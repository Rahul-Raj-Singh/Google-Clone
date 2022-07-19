import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";


const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <nav className="px-5 sm:px-20 pt-5 pb-1 border-b border-gray-400 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <Link to="/">
          <p className="sm:text-2xl font-bold bg-blue-500 text-white py-1 px-2 rounded dark:bg-gray-500">Googl 🔎</p>
        </Link>

        <button className="px-2 py-1 border  rounded-full dark:border-gray-100 border-gray-600 hover:shadow-lg dark:shadow-gray-700" onClick={() => setDarkTheme(cur => !cur)}>
          {darkTheme ? "Dark 🌙" : "Light ☀"}
        </button>  
      </div>

      <Search/>
    </nav>
  )
}

export default Navbar