// pages/index.js
"use client";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import React, { useState, useEffect } from "react";
import { propertyListings } from "../data/dataPropertyHome";
import { workflowSteps } from "../data/homeData";
import { ourservices } from "../data/homeData";
import { TbHomeSearch } from "react-icons/tb";
import QualipactSlider from "../components/QualipactSlider";
import SubFooter from "@/components/SubFooter";
import { BiSolidHomeHeart } from "react-icons/bi";
import { RiHomeSmileFill, RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Home component
export default function Home() {
  return (
    <div>
      <Hero />
      <ChooseUs />
      <OurServices />
      <RealEstateApp />
      <Workflow />
      <SubFooter />
    </div>
  );
}

// Hero section
const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center gap-10 bg-[#000000]">
      <div className="relative z-20 text-white px-5 lg:px-10 xl:px-20 flex flex-col gap-4 md:gap-6 sm:pt-[14rem] justify-center w-full">
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] text-center lg:text-left leading-tight font-p_bd">
          Leading You to Your <br /> Perfect Space
        </h1>
        <p className="leading-relaxed text-center lg:text-left font-mont font-medium text-lg max-w-[500px] md:max-w-screen-md md:w-[80%] mx-auto lg:mx-0 sm:text-xl md:text-2xl xl:text-[1.7rem]">
          Where quality, comfort, and location come{" "}
          <br className="hidden lg:block" /> together for your perfect living
          space.
        </p>
        <button className="bg-white text-black text-lg md:text-xl lg:text-[1.38rem] font-p_sb py-3 md:py-4 px-8 md:px-10 lg:px-16 mx-auto lg:mx-0 w-max rounded-lg shadow-md hover:bg-gray-200 hover:scale-95 transition-all duration-300 flex flex-row-reverse justify-center items-center gap-3">
          Explore
        </button>
      </div>

      {/* Background Video */}
      <video
        autoPlay
        preload="auto"
        muted
        loop
        className="z-10 absolute left-1/2 top-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/videos/HomeFront.mp4" type="video/mp4" />
      </video>

      {/* <div className="h-full w-full max-w-screen-md md:rounded-2xl mx-auto pulse bg-blue-600"></div> */}
    </div>
  );
};

const ChooseUs = () => {
  return (
    <div className="relative z-[5] bg-white">
      <div className="flex flex-col items-center overflow-hidden py-20 px-5 gap-4 md:gap-6 max-w-screen-xl mx-auto">
        <h1 className="text-4xl md:text-5xl px-3 sm:px-8 md:px-20 lg:px-0 text-center leading-tight font-p_sb">
          Reliable Real Estate Partners
        </h1>
        <p className="leading-relaxed text-center font-mont font-medium max-w-[500px] md:max-w-screen-md md:w-[80%] mx-auto lg:mx-0 text-xl md:text-2xl xl:text-[1.7rem] text-[#191F8A]">
          Turning Your Property Dreams into Reality, with{" "}
          <br className="hidden md:block" /> Trust and Expertise!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[90%] max-w-screen-lg gap-10 mt-5">
          <div className="bg-[#AB9EFE] rounded-xl flex flex-col justify-center items-center text-center gap-4 py-5 max-w-[500px] md:max-w-none mx-auto">
            <img src="/images/HomeIcons/Group 2.svg" className="h-40" alt="" />
            <h3 className="text-3xl font-semibold text-white font-p_sb">
              Client-Centric <br /> Approach
            </h3>
            <h3 className="text-[1.4rem] font-medium text-white font-mont w-[70%] tracking-wide">
              We handle the complex paperwork, legalities, and logistics for
              you.
            </h3>
          </div>

          <div className="bg-[#74E6A0] rounded-xl flex flex-col justify-center items-center text-center gap-4 py-5 max-w-[500px] md:max-w-none mx-auto">
            <img src="/images/HomeIcons/Group 11.svg" className="h-32" alt="" />
            <h3 className="text-3xl font-semibold text-white font-p_sb mt-2">
              Holistic Market <br /> Knowledge
            </h3>
            <h3 className="text-[1.4rem] font-medium text-white font-mont w-[70%] tracking-wide">
              We handle the complex paperwork, legalities, and logistics for
              you.
            </h3>
          </div>

          <div className="bg-[#FFB978] rounded-xl flex flex-col justify-center items-center text-center gap-4 py-5 max-w-[500px] md:max-w-none mx-auto">
            <img src="/images/HomeIcons/Group 12.svg" className="h-36" alt="" />
            <h3 className="text-3xl font-semibold text-white font-p_sb">
              Affordable <br /> Prices
            </h3>
            <h3 className="text-[1.4rem] font-medium text-white font-mont w-[70%] tracking-wide">
              We handle the complex paperwork, legalities, and logistics for
              you.
            </h3>
          </div>

          <div className="bg-[#FF89DA] rounded-xl flex flex-col justify-center items-center text-center gap-4 py-5 max-w-[500px] md:max-w-none mx-auto">
            <img src="/images/HomeIcons/Group 22.svg" className="h-40" alt="" />
            <h3 className="text-3xl font-semibold text-white font-p_sb">
              Seamless <br /> Transactions
            </h3>
            <h3 className="text-[1.4rem] font-medium text-white font-mont w-[70%] tracking-wide">
              We handle the complex paperwork, legalities, and logistics for
              you.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// Real Estate App section
const RealEstateApp = () => {
  return (
    <div className="bg-[#F2EEEE] py-20 text-black relative z-[5]">
      <section className="container mx-auto w-[90%] px-6">
        <h2 className="text-4xl md:text-5xl font-p_bd text-center tracking-wide mb-10">
          Premium Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {propertyListings.slice(0, 6).map((property, id) => (
            <div
              key={id}
              className="bg-white rounded-xl text-black shadow-lg p-2 relative "
            >
              <div className="overflow-hidden">
                <div className="relative">
                  <QualipactSlider
                    images={property.imageUrl}
                    imageStyle={"w-full h-48"}
                  />
                </div>
              </div>

              <span
                className={`absolute top-2 left-2 text-white text-sm font-p_md px-2 py-1 rounded shadow-md shadow-gray-600/50 ${property.status === "Available" ? "bg-green-500" : "bg-red-500"
                  } z-10`}
              >
                {property.status}
              </span>
              <span
                className={`absolute top-2 right-2 text-white text-sm font-p_md px-2 py-1 shadow-md shadow-gray-600/50 rounded ${property.rent ? "bg-blue-500" : "bg-green-700"
                  } z-10`}
              >
                {property.rent ? "For Rent" : "For Sale"}
              </span>
              <div className="font-p_sb text-lg mt-3 text-center">{property.title}</div>
              <div className="opacity-80 font-mont font-medium text-center mb-3">{property.location}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Our Services section
const OurServices = () => {
  return (
    <section className="bg-gray-100 py-20 relative z-[5]">
      <div className="bg-gray-100 relative flex flex-col items-center overflow-hidden px-5 gap-4 md:gap-6 max-w-screen-xl mx-auto">
        <h1 className="text-4xl md:text-5xl px-3 sm:px-8 md:px-20 lg:px-0 text-center leading-tight font-p_sb">
          Reliable Real Estate Partners
        </h1>
        <p className="text-justify font-mont font-medium max-w-[500px] md:max-w-screen-lg md:w-[80%] mx-auto text-lg lg:text-xl xl:text-[1.45rem] text-[#191F8A]">
          We assist you in making well-thought-out decisions that are aligned
          with your financial goals, ensuring you get the most value from your
          investments while securing the best deals available.
        </p>
        <div className="flex-col gap-8 w-full lg:w-[90%] py-10 relative hidden md:flex">
          {ourservices.map((service) => (
            <div
              key={service.id}
              className={`flex relative justify-between items-center w-full h-80`}
            >
              <div
                className={`bg-white border-2 ${service.id === 1
                    ? "border-[#C4D6E3]"
                    : service.id === 2
                      ? "border-[#A3C6F0]"
                      : "border-[#8CB9F2]"
                  }
                 absolute rounded-3xl md:w-[80%] w-full h-full p-2 flex flex-col px-10 justify-center ${service.id % 2 == 0
                    ? "md:left-0 md:items-start md:text-left"
                    : "md:right-0 md:items-end md:text-right"
                  } gap-5`}
              >
                <h2
                  className={`text-3xl xl:text-4xl font-p_md w-[75%] ${service.id === 1
                      ? "text-[#4a6192]"
                      : service.id === 2
                        ? "text-[#5F79B4]"
                        : "text-[#4C6FBA]"
                    }`}
                >
                  {service.title}
                </h2>
                <h2
                  className={`text-xl xl:text-2xl w-[70%] font-mont font-medium opacity-60`}
                >
                  {service.description}
                </h2>
              </div>
              <img
                src={service.imageUrl}
                alt={service.title}
                className={`h-[90%] w-[40%] object-cover rounded-3xl shadow-2xl transition-all duration-300 shadow-gray-500/50 absolute ${service.id % 2 == 0 ? "md:right-0 " : "md:left-0"
                  }`}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 w-full lg:w-[90%] py-10 relative md:hidden">
          {ourservices.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col justify-center items-center gap-5 py-10 w-full max-w-[500px] mx-auto rounded-3xl bg-white border ${service.id === 1
                  ? "border-[#C4D6E3]"
                  : service.id === 2
                    ? "border-[#A3C6F0]"
                    : "border-[#8CB9F2]"
                }`}
            >
              <div
                className={`rounded-3xl w-full h-full p-2 flex flex-col px-10 justify-center gap-5`}
              >
                <h2
                  className={`text-2xl font-p_md ${service.id === 1
                      ? "text-[#4a6192]"
                      : service.id === 2
                        ? "text-[#5F79B4]"
                        : "text-[#4C6FBA]"
                    }`}
                >
                  {service.title}
                </h2>
                <h2
                  className={`text-lg font-mont font-medium opacity-60`}
                >
                  {service.description}
                </h2>
              </div>
              <img
                src={service.imageUrl}
                alt={service.title}
                className={`w-[90%] h-[60%] object-cover rounded-3xl shadow-2xl transition-all duration-300 shadow-gray-500/50`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export function Workflow() {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center py-20 px-5 relative z-[5] shadow-md">
      <div className="max-w-screen-lg w-full text-center flex flex-col gap-7">
        <h1 className="text-4xl md:text-5xl font-p_bd max-w-4xl mx-auto">
          How We Work
        </h1>
        <h3 className="text-lg md:text-xl lg:text-[1.65rem] text-[#191F8A] font-p_sb max-w-md mx-auto md:max-w-none">
          Let us make your real estate journey not just easy,
          <br className="md:block hidden" /> but truly rewarding.
        </h3>
        <p className="text-[#5D5D5D] text-base md:text-lg lg:text-xl text-justify font-mont font-medium">
          We are committed to delivering a smooth and effortless real estate
          experience. Start by meeting your agent, a dedicated professional who
          will guide you every step of the way. When you’re ready, we’ll assist
          you in closing the deal with efficiency and attention to detail.
          Finally, we’ll ensure you step confidently into ownership, with
          everything in place.
        </p>

        <div className="flex w-full relative mt-10 max-w-[415px] md:max-w-screen-md mx-auto">
          <div className="w-full hidden md:flex flex-col gap-20 justify-center relative">
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#EDD9FF] relative z-[2] hidden opacity-0 md:flex justify-start items-center text-xl xl:text-2xl font-p_md text-[#3037B7]">
              <p className="w-[calc(100%-5rem)] text-center">Meet Your Agent</p>
            </div>
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#fdf5bd] relative z-[2] hidden md:flex justify-start items-center text-xl xl:text-2xl font-p_md text-[#877C19]">
              <p className="w-[calc(100%-5rem)] text-center">Evalute Property</p>
            </div>
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#FFE1C2] relative z-[2] hidden opacity-0 md:flex justify-start items-center text-xl xl:text-2xl font-p_md text-[#AD6217]">
              <p className="w-[calc(100%-5rem)] text-center">Close the Deal</p>
            </div>
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#C7FFC9] relative z-[2] hidden md:flex justify-start items-center text-xl xl:text-2xl font-p_md text-[#28802C]">
              <p className="w-[calc(100%-5rem)] text-center">Own Your Dream</p>
            </div>
          </div>
          <div className="w-max flex flex-col gap-16 justify-center items-center relative ">
            <div className="w-20 aspect-square text-white text-5xl flex justify-center items-center rounded-full bg-[#a786fa] shadow-xl shadow-[#cfb4fac4] z-[3]"><FaPeopleGroup/></div>
            <div className="w-20 aspect-square text-white text-5xl flex justify-center items-center rounded-full bg-[#decb27] shadow-xl shadow-[#f1dc3ac4] z-[3]"><RiHomeSmileFill/></div>
            <div className="w-20 aspect-square text-white text-5xl flex justify-center items-center rounded-full bg-[#FFB061] shadow-xl shadow-[#FFB061c4] z-[3]"><RiMoneyRupeeCircleFill/></div>
            <div className="w-20 aspect-square text-white text-5xl flex justify-center items-center rounded-full bg-[#A5D6A7] shadow-xl shadow-[#A5D6A7c4] z-[3]"><BiSolidHomeHeart/></div>
            <div className="w-6 h-[95%] absolute top-1/2 transform -translate-y-1/2 bg-[#d1d1d1] z-[1]"></div>
          </div>
          <div className="w-full flex flex-col gap-20 justify-center relative">
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#EDD9FF] relative right-20 z-[2] flex justify-end items-center text-xl xl:text-2xl font-p_md text-[#3037B7]">
              <p className="w-[calc(100%-5rem)] text-center">Meet Your Agent</p>
            </div>
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#fdf5bd] relative right-20 z-[2] md:opacity-0 flex justify-end items-center text-xl xl:text-2xl font-p_md text-[#877C19]">
              <p className="w-[calc(100%-5rem)] text-center">Evalute Property</p>
            </div>
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#FFE1C2] relative right-20 z-[2] flex justify-end items-center text-xl xl:text-2xl font-p_md text-[#AD6217]">
              <p className="w-[calc(100%-5rem)] text-center">Close the Deal</p>
            </div>
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#C7FFC9] relative right-20 z-[2] md:opacity-0 flex justify-end items-center text-xl xl:text-2xl font-p_md text-[#28802C]">
              <p className="w-[calc(100%-5rem)] text-center">Own Your Dream</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
