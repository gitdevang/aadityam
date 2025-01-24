"use client";

import { propertyListings } from "../../data/dataPropertyHome";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import QualipactSlider from "../../components/QualipactSlider";

const Page = () => {
  const [rent, setRent] = useState(false); // Rent state
  const [sale, setSale] = useState(false); // Sale state
  const [filteredProperties, setFilteredProperties] = useState([]); // Removed Property[] typing
  const [category, setCategory] = useState(""); // Category state

  // Handle Rent selection
  function handleRent() {
    setRent(true);
    setSale(false);
  }

  // Handle Sale selection
  function handleSale() {
    setRent(false);
    setSale(true);
  }

  useEffect(() => {
    // 1. If Rent, Sale and any one category is not selected, than filter should show all properties.
    if (!rent && !sale && category.length === 0) {
      setFilteredProperties(propertyListings);
    }
    // 2. If Rent and Sale both are not selected but any one category is selected, filter should return properties for the selected Category.
    else if (!rent && !sale) {
      setFilteredProperties(
        propertyListings.filter((property) => property.category === category)
      );
    }
    // 3. If either rent or sale is selected, filter should check for the category:
    else if (rent || sale) {
      //   3.1 - If any one category is selected, filter should return properties for rent or sale along with the category selected
      if (category.length > 0) {
        setFilteredProperties(
          propertyListings.filter(
            (property) =>
              property.category === category && property.rent === rent
          )
        );
      }
      //   3.2 - If no category is selected, filter should return properties for rent or sale only
      else {
        setFilteredProperties(
          propertyListings.filter((property) => property.rent === rent)
        );
      }
    }
  }, [rent, sale, category]);

  return (
    <>
      <PropertyHero />
      <Homeprop
        handleRent={handleRent}
        handleSale={handleSale}
        setCategory={setCategory}
        category={category}
        rent={rent}
        sale={sale}
        filteredProperties={filteredProperties}
      />
    </>
  );
};

// PropertyHero Component
const PropertyHero = () => {
  return (
    <section className="text-gray-200 body-font bg-black py-5 px-5 h-[60vh] md:px-10 z-20 flex items-center relative bg-no-repeat bg-cover">
      <div className="container mx-auto text-center z-20 relative bottom-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-1/2 sm:w-auto mx-auto leading-tight font-semibold">
          Effortless Property Discovery
        </h2>
      </div>
      <video
        autoPlay
        preload="auto"
        muted
        loop
        className="z-10 absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-50"
      >
        <source src="/videos/HomeSide.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

// Homeprop Component
const Homeprop = ({
  handleRent,
  handleSale,
  setCategory,
  category,
  rent,
  sale,
  filteredProperties,
}) => {
  const categories = [
    {
      title: "House",
      img: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHwxfDB8fHww",
    },
    {
      title: "Apartment",
      img: "https://plus.unsplash.com/premium_photo-1678963247798-0944cf6ba34d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHwxfDB8fHww",
    },
    {
      title: "Plot",
      img: "https://plus.unsplash.com/premium_photo-1672738870962-1c5e638b667b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxvdHxlbnwwfDF8MHx8fDA%3D",
    },
    {
      title: "Commercial Space",
      img: "https://images.unsplash.com/photo-1612124119733-d23933139790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcCUyMGV4dGVyaW9yfGVufDB8MXwwfHx8MA%3D%3D",
    },
    {
      title: "Office",
      img: "https://images.unsplash.com/photo-1677078610072-7f11ebc4d4d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVldGluZyUyMHJvb21zfGVufDB8MXwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 max-w-screen-2xl relative bottom-40 lg:bottom-20 px-2 mx-auto">
        <div className="flex-shrink-0 flex flex-col w-full filter-bar lg:px-5 xl:px-10 z-20 ">
          <div className="bg-white shadow-xl rounded-2xl">
            <h3 className="text-center mt-5 text-lg opacity-80">
              {" "}
              Adjust Filters to Refine Your Choices
            </h3>
            <div className="mx-auto bg-white shadow-xl rounded-2xl lg:flex lg:justify-between items-center lg:gap-5 p-4 w-full lg:h-48">
              <div className="flex mb-4 lg:mb-0 text-sm sm:text-base md:text-lg">
                <div className="flex lg:flex-col lg:justify-center lg:gap-2 w-full">
                  <button
                    onClick={handleSale}
                    className={`transition-all duration-100 py-3 px-6 rounded-l-full lg:rounded-full flex gap-5 items-center w-1/2 lg:w-44 xl:w-60 border-2  ${
                      sale
                        ? "bg-green-200 border-green-500 text-green-900"
                        : "bg-gray-200 "
                    }`}
                  >
                    <div
                      className={`w-4 aspect-square rounded-full ${
                        sale ? "bg-green-400" : "bg-white"
                      } border-4 border-white`}
                    ></div>
                    For Sale
                  </button>
                  <div className="border-l border-gray-300 h-full lg:hidden"></div>
                  <button
                    onClick={handleRent}
                    className={`transition-all duration-100 py-3 px-6 rounded-r-full lg:rounded-full flex gap-5 items-center w-1/2 lg:w-44 xl:w-60 border-2 ${
                      rent
                        ? "bg-blue-200 text-blue-900 border-blue-500"
                        : "bg-gray-200 "
                    }`}
                  >
                    <div
                      className={`w-4 aspect-square rounded-full ${
                        rent ? "bg-blue-400" : "bg-white"
                      } border-4 border-white`}
                    ></div>
                    For Rent
                  </button>
                </div>
              </div>
              <div className="w-full h-[2px] lg:h-[80%] lg:w-[2px] bg-blue-200 rounded-full"></div>
              {/* Category Buttons */}
              <div className="mt-4 lg:mt-0 grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2">
                {categories.map((item, index) => (
                  <div
                    onClick={() => setCategory(item.title)}
                    key={index}
                    className={`h-40 cursor-pointer rounded-3xl bg-white relative border-2 filter-categories flex flex-col justify-end gap-2 items-center py-2 ${
                      category === item.title
                        ? "border-blue-500"
                        : "border-white"
                    } active:scale-95 transition-transform duration-200`}
                  >
                    <img
                      src={item.img}
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                        index === 4 ? "w-[99%]" : "w-[98%]"
                      } h-[98%] brightness-[.6] object-cover rounded-3xl transition-transform duration-200 active:scale-95 filter-categories  ${
                        category === item.title && "opacity-80"
                      }`}
                      alt={`${item.title} Image`}
                    />
                    <button className="relative text-white text-lg px-5">
                      {item.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
          {filteredProperties.length !== 0 && (
            <div className="col-span-full text-lg opacity-80 flex flex-col justify-center items-center">
              <p>
                {rent || sale || category.length > 0
                  ? `All ${
                      category.length > 0 ? `${category}s` : "Properties"
                    } ${sale ? "for Sale" : rent ? "for Rent" : ""}`
                  : "All Properties"}
              </p>
            </div>
          )}
          {filteredProperties.map((property, idx) => (
            <Link key={idx} href={`/property/${property.id}`}>
              <PropertyCard property={property} />
            </Link>
          ))}
          {filteredProperties.length === 0 && (
            <div className="col-span-full text-lg opacity-80 flex flex-col justify-center items-center">
              <p>
                Oops! we're unable to find properties. Try adjusting the
                filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// PropertyCard Component
const PropertyCard = ({ property }) => {
  const { title, price, status, rent, location, imageUrl, monthlyRent } =
    property;
  const images = Array.isArray(imageUrl) ? imageUrl : [];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-2 h-full cursor-pointer hover:bg-gray-50 hover:shadow-xl transition-all duration-100">
      <div className="relative">
        <QualipactSlider images={imageUrl} imageStyle={"w-full h-48"} />
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
      <div className="p-4">
        <h3 className="font-bold text-lg text-blue-800">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex justify-between items-end">
          <p className="mt-2 text-lg text-gray-700">
            ₹ {price ? price : rent ? `${monthlyRent}/month` : "Price on Request"}
          </p>
          <button className="text-gray-500">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
