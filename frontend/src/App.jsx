import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Income from "./pages/Income";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="realtive min-h-screen bg-stone-200 flex flex-col lg:flex-row">
      <Navbar />
      <div className="px-4 pt-2 lg:w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/income" element={<Income />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/account" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
