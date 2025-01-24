// src/data/homeData.jsx

import { BiSolidHomeHeart } from "react-icons/bi";
import { FaDollarSign, FaRegBuilding, FaRegHandshake, FaTags,  FaHome, FaBuilding, FaHandsHelping, FaClipboardList, FaStar, FaListAlt, FaUserCheck, FaRegClock } from "react-icons/fa";
import { FaPeopleGroup} from "react-icons/fa6";
import { RiHomeSmileFill, RiMoneyRupeeCircleFill } from "react-icons/ri";


// team data *************************************************************** API Owener provided data
export const people = [
  {
    name: "Shelender Bansal",
    role: "Co-Founder",
  },
  {
    name: "Lalita Sharma",
    role: "Co-Founder",
  },
  {
    name: "Varun Dhawan",
    role: "Agent",
  },

  {
    name: "Anjali Singh",
    role: "Agent",
  },
  {
    name: "Tarun Devnani",
    role: "Agent",
  },
  {
    name: "Salman Khan",
    role: "Agent",
  },
];



export const workflowSteps = [
  {
    icon: <FaPeopleGroup style={{ color: '#4CAF50' }} />, // Green
    title: 'Meet Your Agent',
    color: 'text-[#4CAF50]', // Store the color class here
    description: 'We engage with you through our professional real estate agent who will personalize their expertise to your unique needs, ensuring a seamless experience throughout the process.',
  },
  {
    icon: <RiHomeSmileFill style={{ color: '#2196F3' }} />, // Blue
    title: 'Evaluate Property',
    color: 'text-[#2196F3]', // Store the color class here
    description: 'Conduct a thorough evaluation of potential properties, assessing their value, condition, and alignment with your objectives to make an informed decision.',
  },
  {
    icon: <RiMoneyRupeeCircleFill style={{ color: '#FF9800' }} />, // Orange
    title: 'Close the Deal',
    color: 'text-[#FF9800]', // Store the color class here
    description: 'Complete the transaction by reviewing and finalizing the terms, ensuring all legal and financial aspects are in place for a successful closure.',
  },
  {
    icon: <BiSolidHomeHeart style={{ color: '#F44336' }} />, // Red
    title: 'Secure Your Property',
    color: 'text-[#F44336]', // Store the color class here
    description: 'Officially take ownership of your new property, with all necessary documentation finalized, and step into your new chapter with confidence and security.',
  },
];


// whyChooseus
export const strength = [  
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
  }
];



// image to be change ********************************************************* Owener provided data
export const ourservices = [
  {
    id: 1,
    icon: <FaHome className="text-4xl text-blue-500" />,
    title: "Property Purchase Assistance",
    imageUrl: "https://plus.unsplash.com/premium_photo-1724659217647-4bfdba75e5a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMGhvdXNlfGVufDB8fDB8fHww",
    description: "We help you find and buy your ideal residential or commercial property in great locations.",
  },
  {
    id: 2,
    icon: <FaRegHandshake className="text-4xl text-green-500" />,
    title: "Property Selling Assistance",
    imageUrl: "https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGluZGlhbiUyMGhvdXNlfGVufDB8fDB8fHww",
    description: "We help you sell your property for the best price, manage negotiations, and handle all legal steps.",
  },
  {
    id: 3,
    icon: <FaBuilding className="text-4xl text-yellow-500" />,
    title: "Property Rental Assistance",
    imageUrl: "https://plus.unsplash.com/premium_photo-1687960116880-086e6fb4b404?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    description: "We offer a variety of budget friendly properties for rent with affordable and premium plans.",
  },
];
