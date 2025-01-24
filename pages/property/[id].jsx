// pages\property\[id].jsx
"use client";

import { propertyListings } from "../../data/dataPropertyHome";
import { useParams } from "next/navigation";
import React, { FC, useState } from "react";
import QualipactSlider from "../../components/QualipactSlider"; // Import the QualipactSlider component

// PropertyPage Component
const PropertyPage = () => {
  const { id } = useParams();
  let currentElement = propertyListings.find(
    (property) => property.id === Number(id)
  );

  if (!currentElement) {
    return <div>Property not found</div>;
  }

  return <PropertyCard property={currentElement} />;
};

const PropertyCard = ({ property }) => {
  const { title, rent, status, location, imageUrl } = property;
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleMobileChange = (e) => {
    const value = e.target.value;

    // Restrict to only digits and max 10 characters
    if (/^\d{0,10}$/.test(value)) {
      setMobile(value);
    }
  };

  return (
    <div className="max-w-7xl w-full mx-auto py-10 px-5">
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
        <div className="flex flex-col justify-center items-center gapy-2 px-6">
          <h1 className="text-2xl md:text-3xl text-center font-p_bd">
            {title}
          </h1>
          <p className="text-gray-900 md:text-lg leading-6 text-center font-mont font-medium">
            {location}
          </p>
        </div>
        <div className="flex w-full justify-between">
          <p
            className={`text-xl font-p_sb  ${
              status === "Available" ? "text-green-600" : "text-red-500"
            }`}
          >
            {status}
          </p>
          <p className="text-xl font-p_sb text-blue-700">
            {rent ? "For Rent" : "For Sale"}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <QualipactSlider
          imageStyle="w-full h-[70vh] 2xl:max-h-[600px]"
          images={imageUrl}
        />
      </div>

      <div className="flex flex-col gapy-2 px-6 my-7">
        <h2 className="text-2xl lg:text-3xl font-p_sb">Description</h2>
        <p className="font-mont font-medium lg:text-lg text-gray-800 text-justify">
          {property.longDescription}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 justify-between relative">

        <div className="lg:w-2/3 sm:w-1/2 shadow-md h-max">
          <div className="py-2 bg-blue-500 border-b-2 rounded-t-md">
            <h2 className="text-2xl font-p_sb text-center text-white">
              {property.category} Details
            </h2>
          </div>

          <table className="w-full table-auto border-collapse bg-white rounded-b-lg p-4">
            <thead>
              <tr className="border-b-2">
                <th className="font-p_sb text-lg py-2 px-6 border-r-2 text-left">
                  Features
                </th>
                <th className="font-p_sb text-lg py-2 px-6 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {property.rent ? (
                <>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Monthly Rent
                    </td>
                    <td className="py-2 px-6">
                      {property.monthlyRent ? property.monthlyRent : "N/A"}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Deposit
                    </td>
                    <td className="py-2 px-6">
                      {property.deposit ? property.deposit : "N/A"}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Maintenance Cost
                    </td>
                    <td className="py-2 px-6">
                      {property.maintenanceCost
                        ? property.maintenanceCost
                        : "N/A"}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Lease Duration
                    </td>
                    <td className="py-2 px-6">
                      {property.leaseDuration
                        ? `${property.leaseDuration} months`
                        : "N/A"}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Lease Type
                    </td>
                    <td className="py-2 px-6">
                      {property.leaseType ? property.leaseType : "N/A"}
                    </td>
                  </tr>
                </>
              ) : (
                <tr className="border-b-2 hover:bg-gray-100">
                  <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                    Price
                  </td>
                  <td className="py-2 px-6">
                    {property.price ? property.price : "On request"}
                  </td>
                </tr>
              )}

              <tr className="border-b-2 hover:bg-gray-100">
                <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                  Land Area
                </td>
                <td className="py-2 px-6">{property.landArea} Sqft</td>
              </tr>
              <tr className="border-b-2 hover:bg-gray-100">
                <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                  Water Supply
                </td>
                <td className="py-2 px-6">
                  {property.waterSupply ? "Yes" : "No"}
                </td>
              </tr>
              <tr className="border-b-2 hover:bg-gray-100">
                <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                  Electricity Supply
                </td>
                <td className="py-2 px-6">
                  {property.electricitySupply ? "Yes" : "No"}
                </td>
              </tr>

              {property.category === "House" && property.houseDetails ? (
                <>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Bedrooms
                    </td>
                    <td className="py-2 px-6">
                      {property.houseDetails.bedrooms}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Bathrooms
                    </td>
                    <td className="py-2 px-6">
                      {property.houseDetails.bathrooms}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Halls
                    </td>
                    <td className="py-2 px-6">{property.houseDetails.halls}</td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Floors
                    </td>
                    <td className="py-2 px-6">
                      {property.houseDetails.floors}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Lift
                    </td>
                    <td className="py-2 px-6">
                      {property.houseDetails.lift ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Kitchen
                    </td>
                    <td className="py-2 px-6">
                      {property.houseDetails.kitchen ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Balcony
                    </td>
                    <td className="py-2 px-6">
                      {property.houseDetails.balconies ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Parking
                    </td>
                    <td className="py-2 px-6">
                      {property.houseDetails.parking ? "Yes" : "No"}
                    </td>
                  </tr>
                </>
              ) : null}

              {property.category === "Apartment" &&
              property.apartmentDetails ? (
                <>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Floor Number
                    </td>
                    <td className="py-2 px-6">
                      {property.apartmentDetails.floorNumber}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Total Floors
                    </td>
                    <td className="py-2 px-6">
                      {property.apartmentDetails.totalFloors}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Bathrooms
                    </td>
                    <td className="py-2 px-6">
                      {property.apartmentDetails.bathrooms}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Balcony
                    </td>
                    <td className="py-2 px-6">
                      {property.apartmentDetails.balconies ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Parking
                    </td>
                    <td className="py-2 px-6">
                      {property.apartmentDetails.parking ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Lift
                    </td>
                    <td className="py-2 px-6">
                      {property.apartmentDetails.lift ? "Yes" : "No"}
                    </td>
                  </tr>
                </>
              ) : null}

              {property.category === "Plot" && property.plotDetails ? (
                <tr className="hover:bg-gray-100">
                  <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                    Plot Type
                  </td>
                  <td className="py-2 px-6">{property.plotDetails.plotType}</td>
                </tr>
              ) : null}

              {property.category === "Commercial Space" &&
              property.commercialSpaceDetails ? (
                <>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Parking
                    </td>
                    <td className="py-2 px-6">
                      {property.commercialSpaceDetails.parking ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Lift
                    </td>
                    <td className="py-2 px-6">
                      {property.commercialSpaceDetails.lift ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Wheelchair Accessible
                    </td>
                    <td className="py-2 px-6">
                      {property.commercialSpaceDetails.isWheelchairAccessible
                        ? "Yes"
                        : "No"}
                    </td>
                  </tr>
                </>
              ) : null}

              {property.category === "Office" && property.officeDetails ? (
                <>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Conference Room
                    </td>
                    <td className="py-2 px-6">
                      {property.officeDetails.conferenceRoom ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Meeting Room
                    </td>
                    <td className="py-2 px-6">
                      {property.officeDetails.meetingRoom ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Waiting Room
                    </td>
                    <td className="py-2 px-6">
                      {property.officeDetails.waitingRoom ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Parking
                    </td>
                    <td className="py-2 px-6">
                      {property.officeDetails.parking ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Lift
                    </td>
                    <td className="py-2 px-6">
                      {property.officeDetails.lift ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="font-p_md text-gray-700 py-2 px-6 border-r-2">
                      Wheelchair Accessible
                    </td>
                    <td className="py-2 px-6">
                      {property.officeDetails.isWheelchairAccessible
                        ? "Yes"
                        : "No"}
                    </td>
                  </tr>
                </>
              ) : null}
            </tbody>
          </table>
        </div>

        <div className="lg:w-1/3 sm:w-1/2 flex flex-col w-full bg-white rounded-md border border-b-2 shadow-md">
          <div className="w-full bg-blue-500 rounded-t-md py-2">
            <h3 className="text-2xl font-bold text-white text-center">
              Book Now!
            </h3>
          </div>
          <div className="py-5 px-5">
            <h3 className="text-2xl mb-3 font-medium">
              Are you interested in this property?
            </h3>
            <p className="leading-relaxed mb-3 opacity-80">
              We're here to assist you! Reach out today for personalized
              support, more information and expert guidance about this property.
            </p>
            <form>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-black/80"
                >
                  Name
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-100 rounded-md border border-b-blue-400 focus:border-b-blue-600 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="mobile"
                  className="leading-7 text-sm text-black/80"
                >
                  Mobile Number
                </label>
                <br />
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={handleMobileChange}
                  pattern="^[7-9][0-9]{9}$"
                  maxLength={10}
                  className="w-full bg-gray-100 rounded-md border border-b-blue-400 focus:border-b-blue-600 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                  title="Please enter a valid 10-digit mobile number starting with 7, 8, or 9"
                />
              </div>

              <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-gray-100 rounded-md border border-b-blue-400 focus:border-b-blue-600 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your Message here"
              ></textarea>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="rounded mr-2 text-blue-500 focus:ring-2 focus:ring-blue-300"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree with Terms of Use and Privacy Policy
              </label>
            </div>


              <button
                type="submit"
                className="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 disabled:bg-black disabled:cursor-not-allowed disabled:scale-95 transition-all duration-100 rounded text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
