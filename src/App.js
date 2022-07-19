import React, { useState } from "react";
import Navbar from "./component/Navbar";
import MyRoutes from "./component/MyRoutes";
import Footer from "./component/Footer";

const App = () => {

    const [darkTheme, setDarkTheme] = useState(true);
  
    return (
    <div className={darkTheme ? "dark" : ""}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <MyRoutes/>
            <Footer/>
        </div>
    </div>
  )
}

export default App