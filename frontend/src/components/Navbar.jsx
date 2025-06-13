import React, { useContext } from "react";
import { IoMdHome } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaUser } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import  AuthContext  from "../context/AuthContext";
import { FaWallet } from "react-icons/fa";


const Navbar = () => {
  const { navigate } = useContext(AuthContext)
  return (
    <div className="fixed bottom-0 flex bg-white w-full justify-between py-3 px-4 z-10">
      <div onClick={() => navigate('/')} className="flex flex-col items-center gap-1">
        <IoMdHome className="text-2xl" />
        <p>Home</p>
      </div>
      <div onClick={() => navigate('/transactions')}  className="flex flex-col items-center gap-1">
        <TfiMenuAlt className="text-2xl" />
        <p>Transactions</p>
      </div>
      <div onClick={() => navigate('/income')} className="flex flex-col items-center gap-1">
        <FaWallet className="text-2xl" />
        <p>Income</p>
      </div>
        <div className="flex flex-col items-center gap-1">
        <IoStatsChartSharp className="text-2xl" />
        <p>Analytics</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <FaUser className="text-2xl" />
        <p>Account</p>
      </div>
    </div>
  );
};

export default Navbar;
