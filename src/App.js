import React from "react";
import "./styles/App.css"
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";



const App = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
         </Routes>
      </div>
   );
};

export default App;
