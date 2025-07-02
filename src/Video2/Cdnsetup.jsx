import React from 'react'

export const Cdnsetup = () => {
  return (
    <nav className="bg-orange-600/80 py-24 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold text-xl">MyLogo</div>
      <ul className="flex space-x-6 text-white font-medium">
        <li><a href="#" className="hover:text-gray-200">Home</a></li>
        <li><a href="#" className="hover:text-gray-200">About</a></li>
        <li><a href="#" className="hover:text-gray-200">Services</a></li>
        <li><a href="#" className="hover:text-gray-200">Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}
