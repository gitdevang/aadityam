// pages/_app.js

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import '../styles/globals.css';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { AdminTokenProvider } from '@/state/adminToken';

const App = ({ Component, pageProps }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Manage the state for menu visibility

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 flex justify-between items-center px-10 py-3 bg-black text-white shadow-2xl h-16">
        <h1 className="text-2xl font-black">AADITYAM</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-10">
            <li className="hover:text-gray-200">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gray-200">
              <Link href="/about">About</Link> {/* Link corrected */}
            </li>
            <li className="hover:text-gray-200">
              <Link href="/property">Listings</Link>
            </li>
            <li className="hover:text-gray-200">
              <Link href="/contact">Contact</Link> {/* Link corrected */}
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes
              className="cursor-pointer text-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Close menu"
            />
          ) : (
            <FaBars
              className="cursor-pointer text-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            />
          )}
        </div>
      </header>

      {/* Render Mobile Menu or Page Component */}
      {menuOpen ? <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : <>
      <AdminTokenProvider>
      <Component {...pageProps} /> 
      </AdminTokenProvider>
      <Footer /></>}
    </div>
  );
};

export default App;
