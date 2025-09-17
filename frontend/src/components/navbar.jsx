
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { TfiBarChart } from "react-icons/tfi";
import { MdDashboardCustomize } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation, Link } from "react-router-dom";

const navItems = [
  { name: "Home", icon: <AiFillHome className="w-6 h-6" />, path: "/" },
  { name: "Dashboard", icon: <MdDashboardCustomize className="w-6 h-6" />, path: "/dashboard" },
  { name: "Report", icon: <TfiBarChart className="w-6 h-6" />, path: "/report" },
  { name: "User", icon: <FaCircleUser className="w-6 h-6" />, path: "/user" },
];

const Navbar = () => {
  const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50">
      <div className="hidden md:block">
      <nav className=" bg-white text-[#1D3557] px-4 py-6 flex flex-col items-center gap-4 md:gap-7 shadow-xl h-screen">
      {/* Logo */}
      <div className="">
        <img src="logo.png" alt="logo" className="w-16 h-16 object-contain" />
      </div>

      {/* Nav Items */}
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center text-xs font-medium transition-all duration-200 ${
              isActive ? "text-blue-600 scale-110 font-semibold" : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {item.icon}
            <span className="mt-1">{item.name}</span>
          </Link>
        );
      })}
    </nav>
    </div>

    <div className="md:hidden">
      {/* Top bar with logo + toggle button */}
      <div className="flex items-center justify-between bg-white text-[#1D3557] px-4 shadow-xl w-full fixed top-0 left-0 z-50">
        {/* Logo */}
        <div>
          <img src="logo.png" alt="logo" className="w-20 h-16 object-contain" />
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-[#1D3557] focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Dropdown Nav Items */}
      {isOpen && (
        <nav className="bg-white text-[#1D3557] px-6 py-6 flex flex-col gap-6 shadow-xl w-full fixed top-20 left-0 z-40">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)} // close menu on link click
                className={`flex items-center text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "text-blue-600 scale-105 font-semibold"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </div>
    </div>

    
  );
};  

export default Navbar;

