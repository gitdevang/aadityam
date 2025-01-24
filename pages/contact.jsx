// pages\contact.jsx
import React, { FormEvent, useState } from "react";

const Contact = () => {
  // State variables (without TypeScript annotations)
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  // Handle input changes for mobile number with validation for 10 digits
  const handleMobileChange = (e) => {
    const value = e.target.value;

    // Restrict to only digits and max 10 characters
    if (/^\d{0,10}$/.test(value)) {
      setMobile(value);
    }
  };

  return (
    <>
      <section className="relative bg-black h-[50vh] flex justify-center items-center text-white py-24 ">
        <div className="container mx-auto text-center z-20 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center tracking-wide font-semibold px-5" style={{ lineHeight: "1.2" }}>
            We’re Just a Phone Call or Message Away
          </h1>
        </div>
        <video
          autoPlay
          preload="auto"
          muted
          loop
          className="z-10 absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-50"
        >
          <source src="/Videos/DroneView.mp4" type="video/mp4" />
        </video>
      </section>
      <section className="text-gray-400 bg-gray-900  body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0 filter brightness-75"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.5089495576964!2d75.8637751651353!3d26.99069741220873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db1e2d4d64d25%3A0x10da8559b6573a63!2sQualipact!5e1!3m2!1sen!2sin!4v1734810553527!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-gray-900/90 backdrop-blur-lg relative flex flex-wrap py-6 rounded shadow-md shadow-gray-600/50">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">Business Enquiry</h2>
            <p className="leading-relaxed mb-5">
              Whether you're looking to buy, sell, or rent, we'd love to assist you. Get in touch with us for personalized real estate services or more information.
            </p>
            <form>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              {/* Mobile Number input field with validation */}
              <div className="relative mb-4 ">
                <label htmlFor="mobile" className="leading-7 text-sm text-gray-400">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={mobile}
                  onChange={handleMobileChange}
                  pattern="^[7-9][0-9]{9}$"
                  maxLength={10}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                  title="Please enter a valid 10-digit mobile number starting with 7, 8, or 9"
                />
              </div>

              {/* Message input field */}
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 disabled:bg-indigo-600 disabled:cursor-not-allowed disabled:scale-95 transition-all duration-100 rounded text-lg shadow-md shadow-indigo-600/50"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
