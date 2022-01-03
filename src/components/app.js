import React from "react";
import { Routes, Route } from "react-router-dom";
import "primereact/resources/themes/lara-light-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Home from "./home";
import Register from "./register";
import Login from "./login";


function App() {
    return (
        <div>
            <div id="homepage">
<Routes>
<Route exact path="/register" element={<Register/>}></Route>
<Route exact path="/" element={<Login/>}></Route>
<Route exact path="/home" element={<Home/>}></Route>
</Routes>

            </div>        
        </div>
       
        
    )
}

export default App