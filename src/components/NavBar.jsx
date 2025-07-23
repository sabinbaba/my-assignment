// import React from 'react'
// import { LuLayoutDashboard } from "react-icons/lu";

// const variantClasses = {
//   primary: 'text-primary-50 hover:bg-primary-300 bg-primary-200',
//   secondary: 'bg-gray-500 hover:bg-gray-600',
// }

// export default function NavBar() {
//   return (
//     <div className='flex justify-between items-center h-[100px] px-4 bg-primary-200 text-primary-100'>
//         <div className='flex items-center gap-4'>
//             <LuLayoutDashboard className='text-5xl text-primary-50'/>
//             <h1 className='font-bold text-4xl text-primary-100'>Business</h1>
//             <h1 className='font-bold text-4xl text-primary-50'>Cafe</h1>
//         </div>
//         <div className='flex gap-4'>
//             <div>
//                 <a href="/" className={`is-active ${variantClasses.primary} px-4 py-2`}>Home</a>
//             </div>
//             <div>
//                 <a href="/about" className={`is-active ${variantClasses.primary} text-primary-100 px-4 py-2`}>About</a>
//             </div>
//             <div>
//                 <a href="/blog" className={`is-active ${variantClasses.primary} text-primary-100 px-4 py-2`}>Blog</a>
//             </div>
//             <div>
//                 <a href="/contact" className={`is-active ${variantClasses.primary} text-primary-100 px-4 py-2`}>Contact</a>
//             </div>
//         </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { LuLayoutDashboard, LuMenu, LuX } from "react-icons/lu"

const variantClasses = {
  primary: "text-primary-50 hover:bg-primary-300 bg-primary-200",
  secondary: "bg-gray-500 hover:bg-gray-600",
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="bg-primary-200 text-primary-100">
      <div className="flex justify-between items-center h-[80px] md:h-[100px] px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">
          <LuLayoutDashboard className="text-3xl md:text-5xl text-primary-50" />
          <h1 className="font-bold text-2xl md:text-4xl text-primary-100">Business</h1>
          <h1 className="font-bold text-2xl md:text-4xl text-primary-50">Cafe</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <div>
            <a href="/" className={`is-active ${variantClasses.primary} px-4 py-2 rounded`}>
              Home
            </a>
          </div>
          <div>
            <a
              href="/about"
              className={`is-active ${variantClasses.primary} text-primary-100 px-4 py-2 rounded hover:bg-primary-300`}
            >
              About
            </a>
          </div>
          <div>
            <a
              href="/blog"
              className={`is-active ${variantClasses.primary} text-primary-100 px-4 py-2 rounded hover:bg-primary-300`}
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="/contact"
              className={`is-active ${variantClasses.primary} text-primary-100 px-4 py-2 rounded hover:bg-primary-300`}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary-50 text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <LuX /> : <LuMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-200 border-t border-primary-100">
          <div className="flex flex-col py-4">
            <a href="/" className="text-primary-100 px-4 py-3 hover:bg-primary-300">
              Home
            </a>
            <a href="/about" className="text-primary-100 px-4 py-3 hover:bg-primary-300">
              About
            </a>
            <a href="/blog" className="text-primary-100 px-4 py-3 hover:bg-primary-300">
              Blog
            </a>
            <a href="/contact" className="text-primary-100 px-4 py-3 hover:bg-primary-300">
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  )
}