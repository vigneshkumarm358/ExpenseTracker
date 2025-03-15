import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { ImUser } from "react-icons/im";
import { FaChartPie } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full px-6 py-2 w-full  flex justify-between items-center">
      <NavItem to="/" icon={<IoHomeSharp />} label="Home" />
      <NavItem to="/transactions" icon={<GrTransaction />} label="Transactions" />
      
      {/* Centered Floating Add Button */}
      <Link to="/add" className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-full shadow-md transition hover:bg-blue-600">
        <BsFillPlusCircleFill className="text-4xl" />
      </Link>

      <NavItem to="/budget" icon={<FaChartPie />} label="Budget" />
      
      {user ? (
        <NavItem to="/profile" icon={<ImUser />} label="Profile" />
      ) : (
        <NavItem to="/login" icon={<ImUser />} label="Login" />
      )}
    </nav>
  );
};

// Reusable NavItem component
const NavItem = ({ to, icon, label }) => (
  <Link to={to} className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
    <span className="text-2xl">{icon}</span>
    <span className="text-sm">{label}</span>
  </Link>
);

export default Navbar;
