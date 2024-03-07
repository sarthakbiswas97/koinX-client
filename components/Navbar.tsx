import React, { useState } from 'react';
import Image from 'next/image';
import HamburgerMenu from 'react-hamburger-menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white p-4 flex justify-between items-center shadow-md">
        <div className="lg:hidden">
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={toggleMenu}
            width={30}
            height={20}
            strokeWidth={3}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
        <div className={`lg:block ${isOpen ? 'hidden' : ''}`}>
          <Image src="/Logo.svg" alt="Logo" width={70} height={70} className="ml-11" />
        </div>
        <ul className={`flex ml-auto mr-5 font-semibold lg:flex ${isOpen ? 'flex' : 'hidden'}`}>
          <li className="mr-5">Crypto Taxes</li>
          <li className="mr-5">Free Tools</li>
          <li className="mr-5">Resource Center</li>
        </ul>
        <button className={`get-started-button bg-blue-700 text-white px-4 py-2 rounded-lg ${isOpen ? 'block' : ''}`}>
          Get Started
        </button>
      </nav>
    </div>
  );
}
