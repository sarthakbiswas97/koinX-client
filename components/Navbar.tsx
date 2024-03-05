import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowRightDoubleLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white p-4 flex justify-between items-center shadow-md">
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={70}
          height={70}
          className="ml-11"
        />
        <ul className="flex ml-auto mr-5 font-semibold ">
          <li className="mr-5">Crypto Taxes</li>
          <li className="mr-5">Free Tools</li>
          <li className="mr-5">Resource Center</li>
        </ul>
        <button className="get-started-button bg-blue-500 text-white px-4 py-2 rounded">
          Get Started
        </button>
      </nav>
    </div>
  );
}
