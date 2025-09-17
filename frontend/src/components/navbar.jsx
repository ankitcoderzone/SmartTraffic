import React from "react";
import { AiFillHome } from "react-icons/ai";
import { TfiBarChart } from "react-icons/tfi";
import { MdDashboardCustomize } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { useLocation, Link } from "react-router-dom";

const navItems = [
  { name: "Home", icon: <AiFillHome className="w-6 h-6" />, path: "/" },
  { name: "Dashboard", icon: <MdDashboardCustomize className="w-6 h-6" />, path: "/dashboard" },
  { name: "Report", icon: <TfiBarChart className="w-6 h-6" />, path: "/report" },
  { name: "User", icon: <FaCircleUser className="w-6 h-6" />, path: "/user" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white text-[#1D3557] px-4 py-6 flex flex-col items-center gap-6 shadow-xl h-screen fixed font-sans border-r border-gray-200">
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
  );
};

export default Navbar;

