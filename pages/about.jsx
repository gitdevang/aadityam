// pages\about.jsx
"use client";
import { people, workflowSteps } from "../data/homeData";
import React, { useEffect, useRef, useState } from "react";
import useQualipactAnimation from "../hooks/useQualipactAnimation";
import { GoGoal } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import {
  FaDollarSign,
  FaRegBuilding,
  FaRegHandshake,
  FaTags,
  FaHome,
  FaBuilding,
  FaHandsHelping,
  FaClipboardList,
  FaStar,
  FaListAlt,
  FaUserCheck,
  FaRegClock,
} from "react-icons/fa";
import FAQ from "@/components/FAQ";

export default function About() {
  return (
    <div>
      <HeroServices />
      <Principles />
      <ChooseUs />
      <Services/>
      <OurTeam />
      <FAQs />
      <CTA />
      <Testimonials />
    </div>
  );
}

const HeroServices = () => {
  const [visibleCard, setVisibleCard] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // useState to track the interval ID

  useEffect(() => {
    const id = setInterval(() => {
      setVisibleCard((prevVisibleCard) => (prevVisibleCard + 1) % 3);
    }, 2500);

    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  function handleDots(idx) {
    setVisibleCard(idx);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }

  const numbers = [
    {
      ref: "listingsRef",
      imageSrc: "Images/Listings.svg",
      count: "80+",
      color: "bg-[#7499FE]",
      label: "Active Listings",
    },
    {
      ref: "clientsRef",
      imageSrc: "/images/Client.svg",
      count: "1.2K",
      color: "bg-[#32CD32]",
      label: "Happy Clients",
    },
    {
      ref: "soldRef",
      imageSrc: "/images/Sold.svg",
      count: "1.5K",
      color: "bg-[#FFC107]",
      label: "Properties Sold",
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 min-h-screen flex justify-center items-center px-5">
      <div className="w-[90%] max-w-[450px] md:w-[100%] md:container mx-auto text-left md:text-center z-20 relative">
        <h1 className="text-[2rem] lg:text-5xl xl:text-6xl font-p_bd leading-tight lg:mb-6">
          Revitalizing <br className="md:hidden" />
          Spaces, <br />
          Creating <br className="md:hidden" />
          Connections.
        </h1>
        <div className="hidden md:flex flex-wrap gap-x-10 justify-center items-center ">
          {numbers.map((item, index) => (
            <div className="flex flex-col justify-center items-center text-center">
              <div
                key={index}
                className={`w-20 aspect-square rounded-full flex justify-center items-center ${item.color} relative top-10 shadow-xl shadow-[#3B3B3B25]`}
              >
                <img src={item.imageSrc} className="h-[60%]" alt="" />
              </div>
              <div className="rounded-xl h-32 bg-white text-black flex items-end justify-center px-20">
                <div className="h-[calc(100%-2.5rem)] w-full flex flex-col justify-center items-center">
                  <h3 className="text-2xl font-mont font-bold text-[#302E2E]">
                    {item.count}
                  </h3>
                  <p className="text-xl font-p_sb text-[#555353]">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:hidden justify-center items-center gap-5">
          <div className="relative h-72 w-full">
            {numbers.map((data, idx) => (
              <div
                key={idx}
                className={`h-full w-[100%] bg-white mt-6 sm:mt-10 rounded-xl border-2 border-white/65 p-5 opacity-0 ${
                  visibleCard === idx
                    ? idx === 0
                      ? "card1-entry"
                      : idx === 1
                      ? "card2-entry"
                      : "card3-entry"
                    : idx === 0
                    ? "card1-exit"
                    : idx === 1
                    ? "card2-exit"
                    : "card3-exit"
                } flex flex-col items-center justify-center gap-5 absolute`}
              >
                <div
                  className={`w-28 h-28 rounded-full ${data.color} flex justify-center items-center`}
                >
                  <img src={data.imageSrc} className="h-[50%]" alt="" />
                </div>
                <div className="text-black text-center">
                  <h2 className="text-3xl font-p_bd">{data.count}</h2>
                  <p className="text-xl font-mont font-medium">{data.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-5 relative mt-5 sm:mt-12">
            {numbers.map((data, idx) => (
              <div
                onClick={() => handleDots(idx)}
                key={idx}
                className={`w-5 h-5 rounded-full ${
                  visibleCard == idx ? data.color : "bg-white"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <video
        autoPlay
        preload="auto"
        muted
        loop
        className="z-10 absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-75"
      >
        <source src="/videos/Naksha.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

const Principles = () => {
  const [tab, setTab] = useState("mission");
  const LaptopContent = [
    {
      tab: "mission",
      content:
        "To provide innovative, sustainable, and customer-centric real estate solutions that enhance the living experience, build lasting relationships, and contribute to the growth and development of communities across India. We are committed to delivering exceptional value through high-quality properties, transparent processes, and an unwavering focus on customer satisfaction.",
      imageSrc: [
        "/images/AboutIcons/RocketMobile.svg",
        "/images/AboutIcons/RocketLG.svg",
      ],
      bgColor: ["bg-[#D32F2F]", "bg-[#FC4E4E]"],
    },
    {
      tab: "vision",
      content:
        "To be the most trusted and preferred real estate company in India, known for transforming landscapes and lives with world-class residential and commercial properties. We aim to set new standards in the industry by fostering innovation, embracing sustainability, and creating spaces that enrich people's lives and contribute to the nation's progress.",
      imageSrc: [
        "/images/AboutIcons/HouseMobile.svg",
        "/images/AboutIcons/HouseLG.svg",
      ],
      bgColor: ["bg-[#7B1FA2]", "bg-[#5E4EEB]"],
    },
    {
      tab: "values",
      content:
        "Our core values are integrity, sustainability, excellence, and customer-first approach. We strive to build long-term relationships by adhering to the highest standards of transparency, ethical practices, and social responsibility. We aim to contribute positively to the environment, society, and economy through every project we undertake.",
      imageSrc: [
        "/images/AboutIcons/HeartMobile.svg",
        "/images/AboutIcons/HeartLG.svg",
      ],
      bgColor: ["bg-[#00796B]", "bg-[#10BEAA]"],
    },
  ];
  const activeContent = LaptopContent.find((item) => item.tab === tab);

  return (
    <section className="py-20">
      <h2 className="text-5xl font-p_sb text-center mb-6 md:mb-10 sm:text-4xl lg:text-5xl">
        Our Core Principles
      </h2>

      {/* Mobile Content */}
      <div className="flex flex-col justify-center w-[90%] max-w-[500px] mx-auto items-center md:hidden">
        {LaptopContent.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center w-full text-center"
          >
            <div
              className={`w-20 h-20 relative top-10 border-2 ${item.bgColor[1]} rounded-3xl ml-5 flex justify-center items-center`}
            >
              <img
                src={item.imageSrc[0]}
                className={`${index === 0 ? "h-[100%]" : "h-[50%]"}`}
                alt=""
              />
            </div>
            <div
              className={`rounded-xl pt-14 pb-6 px-5 ${item.bgColor[0]} text-white text-left`}
            >
              <h3 className="text-3xl font-p_bd capitalize mb-3">{item.tab}</h3>
              <p className="font-mont opacity-85 tracking-wider">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Laptop Content */}
      {/* Buttons */}
      <div className="hidden md:grid grid-cols-3 py-3 border-b-2 border-[#3B3B3B] w-[80%] lg:w-[70%] mx-auto mb-10 max-w-screen-md">
        <div
          className={`text-center border-r font-p_sb text-xl lg:text-2xl border-[#3B3B3B] ${
            tab === "mission" ? "text-[#FFF]" : "text-[#D32F2F]"
          }`}
          onClick={() => setTab("mission")}
        >
          <p
            className={`${
              tab === "mission"
                ? "bg-[#D32F2F] shadow-xl shadow-[#D32F2F35]"
                : ""
            } transition-all duration-100 ease-in-out w-max mx-auto cursor-pointer px-5 py-2 rounded-sm`}
          >
            Mission
          </p>
        </div>
        <div
          className={`text-center border-x font-p_sb text-xl lg:text-2xl border-[#3B3B3B] ${
            tab === "vision" ? "text-[#FFF]" : "text-[#7B1FA2]"
          }`}
          onClick={() => setTab("vision")}
        >
          <p
            className={`${
              tab === "vision"
                ? "bg-[#7B1FA2] shadow-xl shadow-[#7B1FA235]"
                : ""
            } transition-all duration-100 ease-in-out w-max mx-auto cursor-pointer px-5 py-2 rounded-sm`}
          >
            Vision
          </p>
        </div>
        <div
          className={`text-center border-l font-p_sb text-xl lg:text-2xl border-[#3B3B3B] ${
            tab === "values" ? "text-[#FFF]" : "text-[#00796B]"
          }`}
          onClick={() => setTab("values")}
        >
          <p
            className={`${
              tab === "values"
                ? "bg-[#00796B] shadow-xl shadow-[#00796B35]"
                : ""
            } transition-all duration-100 ease-in-out w-max mx-auto cursor-pointer px-5 py-2 rounded-sm`}
          >
            Values
          </p>
        </div>
      </div>
      {/* Content area */}
      <div
        className={`hidden md:flex flex-col justify-center items-center gap-10 md:w-[90%] lg:w-[80%] max-w-screen-lg mx-auto py-10 px-14 text-white rounded-xl transition-all ease-in-out duration-300 ${activeContent.bgColor[0]}`}
      >
        <div className="w-56 h-56 rounded-full bg-white flex justify-center items-center">
          <img src={activeContent.imageSrc[1]} className="h-[80%]" alt="" />
        </div>
        <div className="flex flex-col justify-center w-full gap-5">
          <h3 className="text-4xl font-p_bd capitalize text-center">
            Our {activeContent.tab === "mission" && "Goal"}{" "}
            {activeContent.tab === "values" && "Guiding"}{" "}
            {activeContent.tab !== "mission" &&
              tab.charAt(0).toUpperCase() + tab.slice(1)}
          </h3>
          <p className="text-lg font-mont opacity-85 tracking-wider text-justify lg:w-[90%] mx-auto leading-relaxed">
            {activeContent.content}
          </p>
        </div>
      </div>
    </section>
  );
};

const ChooseUs = () => {
  const strength = [
    {
      icon: <FaHome className="text-4xl" />,
      title: "Local Market Expertise",
      text: "Our team has in-depth knowledge of the local real estate market, ensuring you get the best advice on property values, trends, and opportunities tailored to your needs.",
      gradientClass: "bg-[#7db1de]",
      borderClass: "border-[#a0c3e7]", // Light blue
      titleColor: "text-[#2a4d7f]", // Dark blue
    },
    {
      icon: <FaRegHandshake className="text-4xl" />,
      title: "Lowest Commission",
      text: "We offer the lowest commissions to our valued customers, ensuring you receive exceptional service and great value, with your satisfaction always being our top priority!",
      gradientClass: "bg-[#fbbd61]",
      borderClass: "border-[#d5a96a]", // Light brown
      titleColor: "text-[#9e6b30]", // Dark brown
    },
    {
      icon: <FaDollarSign className="text-4xl" />,
      title: "Best Prices",
      text: "We are committed to finding you the best prices in the market and negotiating favorable deals to ensure you receive great value.",
      gradientClass: "bg-[#ff7f50]",
      borderClass: "border-[#ff9c80]", // Light coral
      titleColor: "text-[#b84f3f]", // Dark coral
    },
    {
      icon: <FaUserCheck className="text-4xl" />,
      title: "Personalized Service",
      text: "We prioritize understanding your unique needs and preferences, customizing the real estate process for a smooth and stress-free experience.",
      gradientClass: "bg-[#58a7c2]",
      borderClass: "border-[#88bdd3]", // Light teal
      titleColor: "text-[#2d6f8b]", // Dark teal
    },
    {
      icon: <FaClipboardList className="text-4xl" />,
      title: "Seamless Transaction",
      text: "We handle the complex paperwork, legalities, and logistics for you, ensuring a smooth process with the help of industry experts.",
      gradientClass: "bg-[#f5a623]",
      borderClass: "border-[#f7c78e]", // Light golden
      titleColor: "text-[#b77314]", // Dark golden
    },
    {
      icon: <FaRegClock className="text-4xl" />,
      title: "Fast & Efficient Service",
      text: "We prioritize your time by providing quick responses and efficient processes, ensuring your real estate transactions move smoothly and swiftly.",
      gradientClass: "bg-[#8e44ad]",
      borderClass: "border-[#a97cb2]", // Light purple
      titleColor: "text-[#5a2d76]", // Dark purple
    },
  ];
  return (
    <>
      <section className="text-gray-600 body-font py-20 flex flex-col justify-center items-center gap-10 bg-[#F9F9F9]">
        <div className="max-w-screen-lg w-full text-center flex flex-col gap-7">
          <h1 className="text-3xl md:text-5xl font-p_sb max-w-4xl mx-auto text-black">
            Expertise That Puts You Ahead
          </h1>
          <p className="text-[#5D5D5D] text-base md:text-lg lg:text-xl text-justify font-mont font-medium">
            We are committed to delivering a smooth and effortless real estate
            experience. Start by meeting your agent, a dedicated professional
            who will guide you every step of the way. When you’re ready, we’ll
            assist you in closing the deal with efficiency and attention to
            detail. Finally, we’ll ensure you step confidently into ownership,
            with everything in place.
          </p>
        </div>
        <div className="container px-5 pt-5 mx-auto flex flex-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 -m-4">
            <div className="bg-black rounded-xl shadow-lg overflow-hidden">

            </div>
            <div>
              {strength.slice(0, 3).map((data, idx) => (
                <div className="p-4" key={idx}>
                  <div
                    className={`flex rounded-lg p-8 sm:flex-row flex-col h-full`}
                  >
                    <div
                      className={`w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-white ${data.gradientClass} flex-shrink-0`}
                    >
                      {data.icon}
                    </div>
                    <div className="flex-grow">
                      <h2
                        className={`${data.titleColor} text-lg title-font font-p_md mb-2`}
                      >
                        {data.title}
                      </h2>
                      <p className="leading-relaxed font-mont font-medium text-base">
                        {data.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Services = () => {
  const strength = [
    {
      icon: <FaHome className="text-4xl" />,
      title: "Property Purchase Assistance",
      text: "We help you find and buy your ideal residential or commercial property in great locations.",
      gradientClass: "bg-[#FFC107]",
      titleColor: "text-[#FFC107]", // Dark blue
    },
    {
      icon: <FaRegHandshake className="text-4xl" />,
      title: "Property Selling Assistance",
      text: "We help you sell your property for the best price, manage negotiations, and handle all legal steps.",
      gradientClass: "bg-[#FF9800]",
      titleColor: "text-[#FF9800]", // Dark brown
    },
    {
      icon: <FaDollarSign className="text-4xl" />,
      title: "Property Rental Assistance",
      text: "We offer a variety of budget friendly properties for rent with affordable and premium plans.",
      gradientClass: "bg-[#F44336]",
      titleColor: "text-[#F44336]", // Dark coral
    },
  ];
  return (
    <>
      <section className="text-gray-600 body-font py-20 flex flex-col justify-center items-center gap-10 bg-[#F9F9F9]">
        <div className="max-w-screen-lg w-full text-center flex flex-col gap-7">
          <h1 className="text-3xl md:text-5xl font-p_sb max-w-4xl mx-auto text-black">
            Expertise That Puts You Ahead
          </h1>
          <p className="text-[#5D5D5D] text-base md:text-lg lg:text-xl text-justify font-mont font-medium">
            We are committed to delivering a smooth and effortless real estate
            experience. Start by meeting your agent, a dedicated professional
            who will guide you every step of the way. When you’re ready, we’ll
            assist you in closing the deal with efficiency and attention to
            detail. Finally, we’ll ensure you step confidently into ownership,
            with everything in place.
          </p>
        </div>
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {strength.slice(0, 3).map((data, idx) => (
                <div className="p-4" key={idx}>
                  <div
                    className={`flex rounded-lg p-8 flex-col justify-center items-center text-center h-full`}
                  >
                    <div
                      className={`w-16 h-16 inline-flex items-center justify-center rounded-full text-white ${data.gradientClass} mb-4`}
                    >
                      {data.icon}
                    </div>
                    <div className="flex-grow">
                      <h2
                        className={`${data.titleColor} text-lg title-font font-p_md mb-2`}
                      >
                        {data.title}
                      </h2>
                      <p className="leading-relaxed font-mont font-medium text-base">
                        {data.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

const OurTeam = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-pretty text-3xl font-p_sb tracking-tight  sm:text-4xl lg:text-5xl">
          Meet Our Leadership
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">
          We built our business on great customer service. We’re a dynamic group
          of individuals who are passionate about what we do and dedicated to
          delivering the best results for our clients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[350px] md:max-w-screen-sm lg:max-w-screen-lg mx-auto gap-10 mt-12">
        {people.map((person, index) => (
          <div
            key={index}
            className="flex flex-col bg-gray-50 border rounded-md gap-5 overflow-hidden"
          >
            <img
              src="images/profile.svg"
              className="h-72 object-cover rounded-md hover:scale-105 transition-all duration-100"
              alt={person.name}
            />
            <div className="px-5 pb-5">
              <h4 className="font-p_md text-xl mb-1">{person.name}</h4>
              <p className="text-gray-700 font-mont font-medium">
                {person.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div class="container px-5 py-24 mx-auto">
      <h2 className="text-center text-3xl font-p_sb tracking-tight sm:text-4xl lg:text-5xl mb-12">
        Testimonials
      </h2>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/2 w-full">
          <div class="h-full bg-gray-100 p-8 rounded">
            <div className="flex gap-5 mb-6">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            </div>
            <p class="leading-relaxed text-lg font-mont mb-6">
              "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
              neutra before they sold out fixie 90's microdosing. Tacos
              pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
              authentic iceland."
            </p>
            <a class="inline-flex items-center">
              <span class="flex-grow flex flex-col">
                <span class="title-font font-p_md text-gray-900">
                  Gopal Krishnan
                </span>
                <span class="text-gray-500 text-sm uppercase">Industrialist</span>
              </span>
            </a>
          </div>
        </div>
        <div class="p-4 md:w-1/2 w-full">
          <div class="h-full bg-gray-100 p-8 rounded">
            <div className="flex gap-5 mb-6">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            </div>
            <p class="leading-relaxed text-lg font-mont mb-6">
              "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
              neutra before they sold out fixie 90's microdosing. Tacos
              pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
              authentic iceland."
            </p>
            <a class="inline-flex items-center">
              <span class="flex-grow flex flex-col">
                <span class="title-font font-p_md text-gray-900">
                  Kirti Mehta
                </span>
                <span class="text-gray-500 text-sm uppercase">Owner - Cab Services</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQs = () => {
  const data = [
    {
      heading: "What is Aadityam?",
      para: "Aadityam is a real estate company that specializes in residential and commercial properties. We offer a wide range of services, including property management, leasing, and sales. Our team of experienced professionals is dedicated to providing exceptional service and delivering outstanding results for our clients.",
    },
    {
      heading: "What sets Aadityam apart?",
      para: "At Aadityam, we believe in building lasting relationships with our clients by providing personalized service and expert advice. We are committed to delivering the highest standards of professionalism, integrity, and transparency in everything we do. Our goal is to exceed your expectations and make your real estate experience as smooth and stress-free as possible.",
    },
    {
      heading: "Why choose Aadityam?",
      para: "When you choose Aadityam, you can trust that you are working with a team of dedicated professionals who are passionate about real estate and committed to helping you achieve your goals. We are here to guide you through every step of the process and ensure that you make informed decisions that are in your best interest. With Aadityam, you can expect nothing less than excellence.",
    },
  ];
  return (
    <div className="bg-white py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-pretty text-3xl font-p_sb tracking-tight sm:text-4xl lg:text-5xl mb-12">
          Frequently Asked Questions
        </h2>
      </div>
      <FAQ data={data} />
    </div>
  );
};

const CTA = () => {
  return (
    <div class="flex items-center justify-center pb-10 px-5 bg-white">
      <div class="rounded-xl max-w-screen-sm xl:max-w-screen-md p-10 text-center border bg-gray-50 border-teal-300">
        <h2 class="text-2xl font-p_sb">Get in Touch</h2>
        <p class="font-mont font-medium opacity-80 mt-4">
          Revitalize your business with a powerful digital product that rapidly
          captures the market and delivers remarkable results.
        </p>
        <button className="py-3 px-10 bg-teal-400 font-p_md rounded-sm mx-auto mt-6 text-white">
          Let's Get Started
        </button>
      </div>
    </div>
  );
};
