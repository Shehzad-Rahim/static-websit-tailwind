'use client';
import React, { useState } from 'react';

import Link from "next/link"
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 
  };

  return (
    <>
    <header className="flex sticky left-0 top-0 bg-black z-20 justify-between md:px-20 px-6 py-6 ">
      <h1 className="sm:text-3xl text-xl z-10 ">Digital Way</h1>
      <ul className="md:flex hidden gap-6 items-center text-xl ">
        <li className="hover:text-gray-400 transition-all">
            <Link href={'/'}>Home</Link>
        </li>
        <li className="hover:text-gray-400 transition-all">
            <Link href={'#Products'}>Products</Link>
        </li>
        <li className="hover:text-gray-400 transition-all">
            <Link href={'#NewArrival'}>New Arrival</Link>
        </li>
        <li className="hover:text-gray-400 transition-all">
            <Link href={'#Contact'}>Contact</Link>
        </li>
      </ul>
      <button
            className="md:hidden hover:bg-transparent hover:text-gray-400 inline-flex items-center justify-center rounded text-white focus:outline-none"
            onClick={toggleMenu}
            
          >
            {/* Hamburger icon */}
            <svg
              className={`z-10 w-8 h-8 ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

            {/* Close icon */}
            <svg
              className={`z-10 w-8 h-8 ${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {isMenuOpen && (
          <div id='toggleNavbar' className="md:hidden my-4 absolute top-0 w-full text-lg bg-[#1c1c1c] bg-opacity-[0.9]  text-white flex flex-col items-center space-y-2 py-2">
            <Link className='hover:text-gray-300' href="/"  onClick={toggleMenu}> 
                <h1>Home</h1>
            </Link>
            <Link className='hover:text-gray-300' href="#Products" onClick={toggleMenu}>
            <h1>Products</h1>
            </Link>
            <Link className='hover:text-gray-300' href="#NewArrival" onClick={toggleMenu}>
             <h1>New Arrival</h1>
            </Link>
            <Link className='hover:text-gray-300' href="#Contact" onClick={toggleMenu}>
             <h1>Contact</h1>
            </Link>
            
          </div>
        )}
    </header>
          </>
  )
}

export default Header
