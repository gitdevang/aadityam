// components\Footer.jsx

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
export default function Footer() {
  const pathname = usePathname()
    return (
      <div>
        {/* {pathname==="/contact" ? null : <SubFooter />} */}
        <MainFooter />
      </div>
    );
  }
const SubFooter = () => {
    return (
      <div className="bg-gray-100">
        <section className="py-14 bg-gradient-to-t from-black  to-gray-800">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-4xl font-semibold mb-8">
              Ready to Start Your Real Estate Journey?
            </h2>
            <p className="text-xl mb-8">
              Contact us today to get started with your dream property!
            </p>
            <Link href={"/contact"}>
            <button className={`px-6 py-3 bg-black text-white text-xl rounded-full hover:bg-gray-900 focus:outline-none`}>
              Get in Touch
            </button>
            </Link>
          </div>
        </section>
      </div>
    );
  };

const MainFooter = () => {
  return (
    <div className="bg-black text-white py-4">
    <div className="text-center">
      <p>&copy; 2024 Shestate Real Estate. All rights reserved.</p>
    </div>
   </div>
  )
}

