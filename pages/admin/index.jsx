// pages/admin/index.tsx  (Admin Dashboard)
"use client";

import React, { useEffect, useState } from "react";
import QualipactSlider from "../../components/QualipactSlider";
import Link from "next/link";
import customFetch from "@/fetch/customFetch";
import { useAdminToken } from "@/state/adminToken";
import Cookies from "js-cookie";

export default function Home() {
  return (
    <div>
      <Homeprop />
    </div>
  );
}

const Homeprop = () => {
  const [propertyListings, setPropertyListings] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {   
    async function fetchProperties() {
      try {
        const response = await customFetch("/api/property",{}); // Assume customFetch is working
        const json = await response.json();

        if (json.message) {
          setError(json.message); // Handle the error message from API response
        } else {
          setPropertyListings(json.data); // Set property listings if no error
        }
      } catch (e) {
        setError(e.message || 'Failed to fetch properties'); // General error handling
      }
    }

    fetchProperties();
  }, []); 

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-3 md:px-10 lg:px-20">
        <h2 className="text-3xl text-center mb-6">All Properties</h2>
        <div className="flex gap-5">
          <button className="bg-black h-max py-2 px-4 text-white rounded-full text-lg">
            Filter Properties
          </button>
          <Link href={"/admin/property/upload"}>
            <button className="bg-black/70 h-max py-2 px-4 text-white rounded-full text-lg">
              Add a new Property
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-3 md:px-10 lg:px-20 mt-5">
        {propertyListings.length > 0 ? (
          propertyListings.map((property) => (
            <PropertyCard key={property.title} property={property} />
          ))
        ) : error.length > 0 ? (
          <p className="text-red-600 font-bold col-span-full text-center">
            No properties found.
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

const PropertyCard = ({ property }) => {
  const { title, _id, status, rent, location, imageUrl, category } = property;
  const images = Array.isArray(imageUrl) ? imageUrl : [];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-2 h-full cursor-pointer hover:bg-gray-50 hover:shadow-xl transition-all duration-100">
      <div className="relative">
        <QualipactSlider images={images} imageStyle={"w-full h-48"} />
        <span
          className={`absolute top-1 left-1 text-white text-sm px-2 py-1 rounded-sm rounded-br-lg ${
            status === "Available" ? "bg-green-500" : "bg-red-500"
          } z-10`}
        >
          {status}
        </span>
        <span
          className={`absolute top-1 right-1 text-white text-sm px-2 py-1 rounded-sm rounded-bl-lg shadow-lg shadow-gray-100/50 ${
            rent ? "bg-blue-500" : "bg-green-700"
          } z-10`}
        >
          {rent ? "For Rent" : "For Sale"}
        </span>
      </div>
      <Link href={`/admin/property/${property._id}`}>
        <div className="p-4">
          <h3 className="font-bold text-lg text-blue-900 text-center">{title}</h3>
          <p className="text-sm text-gray-500 text-center">{category} • {location}</p>
          <div className="flex justify-between mt-2">
            <Link href={`/admin/property/edit/${_id}`}><button className="text-gray-900">Edit Property</button></Link>
            <button className="text-gray-900">View More</button>
          </div>
        </div>
      </Link>
    </div>
  );
};
