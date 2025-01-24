import React from 'react';
import Link from 'next/link';

function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`md:hidden w-screen h-[90vh] overflow-hidden bg-neutral-900 ${menuOpen ? 'block' : 'hidden'}`}
    >
      <ul className="flex flex-col gap-8 pt-10 pl-5 font-p_regular text-2xl text-white">
        <li className="cursor-pointer hover:text-gray-300">
          <Link onClick={() => setMenuOpen(false)} href="/">Home</Link> {/* Close the menu on click */}
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link onClick={() => setMenuOpen(false)} href="/about">About</Link> {/* Close the menu on click */}
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link onClick={() => setMenuOpen(false)} href="/property">Listings</Link> {/* Close the menu on click */}
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link onClick={() => setMenuOpen(false)} href="/contact">Contact</Link> {/* Close the menu on click */}
        </li>
      </ul>

      <div
        className="mt-10 bg-white text-black border-2 font-p_md border-white transition-all py-2 px-10 w-max rounded-md cursor-pointer hover:bg-gray-100"
      >
        <h1>Let's Talk</h1>
      </div>
    </div>
  );
}

export default MobileMenu;
