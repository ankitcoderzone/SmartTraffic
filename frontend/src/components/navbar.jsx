import React from 'react'

const navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        MyApp
      </div>

      {/* Links (hidden on mobile) */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#" className="hover:text-gray-300">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">Dashboard</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">Profile</a>
        </li>
        <li>
          <a href="#" className="hover:text-red-400">Logout</a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
        </svg>
      </button>
    </nav>
  )
}

export default navbar
