import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import React, { useState, useEffect } from "react";
function App() {
  const [user, setUser] = useState("");
  async function userdashboard() {
    try {
      //const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:4000/users/dashboard", {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    userdashboard();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
