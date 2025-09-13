import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { TfiBarChart } from "react-icons/tfi";
import { MdDashboardCustomize } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

const navbar = () => {
  return (
 <nav className="bg-white text-[#1D3557] px-3 py-5 flex flex-col items-center justify-between gap-[20px] shadow-xl/20 w-max h-[100vh] fixed font-sans">
    <div className="w-22"><img src="logo.png" alt="logo" /></div>
  <a href="" className="flex flex-col items-center text-sm font-medium hover:text-blue-700 transition">
    <AiFillHome className="w-6 h-6 mb-1" /> Home
  </a>
  <a href="/" className="flex flex-col items-center text-sm font-medium hover:text-blue-700 transition">
    <MdDashboardCustomize className="w-6 h-6 mb-1" /> Dashboard
  </a>
  <a href="/Report" className="flex flex-col items-center text-sm font-medium hover:text-blue-700 transition">
    <TfiBarChart className="w-6 h-6 mb-1" /> Report
  </a>
  <a href="" className="flex flex-col items-center text-sm font-medium hover:text-blue-700 transition">
    <FaCircleUser className="w-6 h-6 mb-1" /> User
  </a>
</nav>

  )
}

export default navbar
