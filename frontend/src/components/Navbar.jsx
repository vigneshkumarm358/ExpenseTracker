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
    <div className=" flex bg-white w-full justify-between py-3 px-4 z-10  fixed bottom-0 lg:sticky lg:top-0 lg:flex-col lg:w-fit lg:h-screen lg:justify-start lg:gap-10">
      <div onClick={() => navigate('/')} className="flex flex-col items-center gap-1 cursor-pointer lg:flex-row lg:gap-1">
        <IoMdHome className="text-2xl lg:text-xl" />
        <p>Home</p>
      </div>
      <div onClick={() => navigate('/transactions')}  className="flex flex-col items-center gap-1 cursor-pointer lg:flex-row lg:gap-1">
        <TfiMenuAlt className="text-2xl lg:text-xl" />
        <p>Transactions</p>
      </div>
      <div onClick={() => navigate('/income')} className="flex flex-col items-center gap-1 cursor-pointer lg:flex-row lg:gap-1">
        <FaWallet className="text-2xl lg:text-xl" />
        <p>Income</p>
      </div>
        <div onClick={() => navigate('/analytics')} className="flex flex-col items-center gap-1 cursor-pointer lg:flex-row lg:gap-1">
        <IoStatsChartSharp className="text-2xl lg:text-xl" />
        <p>Analytics</p>
      </div>
      <div  onClick={() => navigate('/account')} className="flex flex-col items-center gap-1 cursor-pointer lg:flex-row lg:gap-1">
        <FaUser className="text-2xl lg:text-xl" />
        <p>Account</p>
      </div>
    </div>
  );
};

export default Navbar;
