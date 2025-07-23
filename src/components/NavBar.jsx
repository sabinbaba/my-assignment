import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";

const variantClasses = {
  primary: 'text-primary-50 hover:bg-primary-300 bg-primary-200',
  secondary: 'bg-gray-500 hover:bg-gray-600',
}

export default function NavBar() {
  return (
    <div className='flex justify-between items-center h-[100px] px-4 bg-primary-200 text-primary-100'>
        <div className='flex items-center gap-4'>
            <LuLayoutDashboard className='text-5xl text-primary-50'/>
            <h1 className='font-bold text-4xl text-primary-100'>Business</h1>
            <h1 className='font-bold text-4xl text-primary-50'>Cafe</h1>
        </div>
        <div className='flex gap-4'>
            <div>
                <a href="/" className={`is-active ${variantClasses.primary} px-4 py-2`}>Home</a>
            </div>
            <div>
                <a href="/about" className={`is-active ${variantClasses.primary} text-primary-100 px-4 py-2`}>About</a>
            </div>
            <div>
                <a href="/blog" className={`is-active ${variantClasses.primary} text-primary-100 px-4 py-2`}>Blog</a>
            </div>
            <div>
                <a href="/contact" className={`is-active ${variantClasses.primary} text-primary-100 px-4 py-2`}>Contact</a>
            </div>
        </div>
    </div>
  )
}