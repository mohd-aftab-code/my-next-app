"use client"; // Mark this component as a Client Component

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-[#01A9EA] text-white px-6 py-4">
        {/* Left side links for desktop */}
        <div className="hidden md:flex space-x-4 ml-6">
          <Link href="/" className="">Home</Link>
          <Link href="/ac-repair" className="">AC Repair</Link>
          <Link href="/hvac-maintenance" className="">HVAC Maintenance</Link>
          <Link href="/air" className="">Air Quality</Link>
          <Link href="/daikin-ac-systems" className="">Daikin AC Systems</Link>
          <Link href="/faq" className="">FAQ</Link>
        </div>

        {/* Shop AC button on desktop, right side */}
        <div className="flex items-center">
          <span className="hidden md:block material-icons mr-2">phone</span> {/* Phone icon */}
          <h1 className="hidden md:block mr-24">(863) 229-7058</h1> {/* Phone number hidden on mobile */}
          <Link href="/shop" className="hidden md:flex items-center bg-red-500 text-white px-4 py-2 rounded ml-auto">
            <span className="material-icons mr-1">shopping_cart</span>
            Shop AC
          </Link>
        </div>



        {/* Mobile view */}
        <div className="md:hidden flex items-center w-full justify-between">
          {/* Shop AC button on mobile view, left side */}
          <Link href="/shop" className="flex items-center bg-red-500 text-white px-4 py-2 rounded  ml-6">
            <span className="material-icons mr-1">shopping_cart</span>
            Shop AC
          </Link>

          {/* Toggle button for mobile view, right side */}
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <span className="material-icons h-6 w-6">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Responsive Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="flex flex-col bg-[#28b] p-4">
            <Link href="/" className="py-2 text-white " onClick={toggleMenu}>Home</Link>
            <Link href="/ac-repair" className="py-2 text-white " onClick={toggleMenu}>AC Repair</Link>
            <Link href="/hvac-maintenance" className="py-2 text-white " onClick={toggleMenu}>HVAC Maintenance</Link>
            <Link href="/air" className="py-2 text-white " onClick={toggleMenu}>Air Quality</Link>
            <Link href="/daikin-ac-systems" className="py-2 text-white " onClick={toggleMenu}>Daikin AC Systems</Link>
            <Link href="/faq" className="py-2 text-white " onClick={toggleMenu}>FAQ</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
