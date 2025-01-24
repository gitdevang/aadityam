import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import QualipactSlider from "../../../components/QualipactSlider";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = router.query; // Access the id from the query params
  const [propertyListings, setPropertyListings] = useState([]); // Initialize as an array
  const [error, setError] = useState("");

  useEffect(() => {
    // Only fetch properties if the id is available
    if (!id) return;

    async function fetchProperties() {
      await fetch(`/api/property/${id}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.message) {
            setError(json.message);
          } else {
            setPropertyListings(json.data); // Assuming json.data is an array of properties
          }
        })
        .catch((e) => setError(e));
    }

    fetchProperties();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  // Ensure that propertyListings is not empty before passing to PropertyCard
  if (propertyListings.length === 0) {
    return <div>Loading...</div>;
  }

  return <PropertyCard property={propertyListings[0]} />;
};

const PropertyCard = ({ property }) => {
  const {
    title,
    price,
    rent,
    status,
    location,
    landArea,
    furnishingStatus,
    imageUrl,
    shortDescription,
    category,
    houseDetails,
    apartmentDetails,
    plotDetails,
    commercialSpaceDetails,
    officeDetails,
  } = property;

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
      {/* Header */}
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl md:text-3xl text-center font-bold text-blue-950 drop-shadow-md">
            {title}
          </h1>
          <p className="text-gray-900 md:text-lg leading-6 text-center">
            {location}
          </p>
        </div>
        <div className="flex w-full justify-between">
          <p
            className={`text-xl font-semibold  ${
              status === "Available" ? "text-green-600" : "text-red-500"
            }`}
          >
            {status}
          </p>
          <p className="text-xl font-semibold text-blue-700">
            {rent ? "For Rent" : "For Sale"}
          </p>
        </div>
      </div>

      {/* Image Gallery with QualipactSlider */}
      <div className="mb-4">
        <QualipactSlider images={imageUrl} imageStyle={"w-full h-[70vh]"} />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 py-10">
        {/* Property Details */}
        {category === "House" && (
          <section className="w-full lg:w-2/3">
            <h2 className="text-2xl font-semibold text-blue-700">
              House Details
            </h2>
            <p className="text-gray-700 md:text-lg mt-2 mb-4 leading-6">
              {shortDescription}
            </p>
            <table className="bg-blue-50 shadow-lg rounded-lg w-full overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left border-r">Features</th>
                  <th className="py-3 px-6 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold border-r">Price</td>
                  <td className="py-3 px-6 font-semibold">
                    {price ? price : "Price on Request"}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Land Area (sq. ft.)
                  </td>
                  <td className="py-3 px-6">{houseDetails?.landArea}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">Bedrooms</td>
                  <td className="py-3 px-6">{houseDetails?.bedrooms}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">Bathrooms</td>
                  <td className="py-3 px-6">{houseDetails?.bathrooms}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">Floors</td>
                  <td className="py-3 px-6">{houseDetails?.floors}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">Parking</td>
                  <td className="py-3 px-6">
                    {houseDetails?.parking ? "Yes" : "No"}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">Garden</td>
                  <td className="py-3 px-6">
                    {houseDetails?.garden ? "Yes" : "No"}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Furnishing Status
                  </td>
                  <td className="py-3 px-6">{furnishingStatus}</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {category === "Apartment" && (
          <section className="w-full lg:w-2/3">
            <h2 className="text-2xl font-semibold text-blue-700">
              Apartment Details
            </h2>
            <p className="text-gray-700 md:text-lg mt-2 mb-4 leading-6">
              {shortDescription}
            </p>
            <table className="bg-blue-50 shadow-lg rounded-lg w-full overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left border-r">Features</th>
                  <th className="py-3 px-6 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold border-r">Price</td>
                  <td className="py-3 px-6 font-semibold">
                    {price ? price : "Price on Request"}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Land Area (sq. ft.)
                  </td>
                  <td className="py-3 px-6">{apartmentDetails?.landArea}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">Bedrooms</td>
                  <td className="py-3 px-6">{apartmentDetails?.bedrooms}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">Bathrooms</td>
                  <td className="py-3 px-6">{apartmentDetails?.bathrooms}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Floor Number
                  </td>
                  <td className="py-3 px-6">{apartmentDetails?.floorNumber}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">Parking</td>
                  <td className="py-3 px-6">
                    {apartmentDetails?.parking ? "Yes" : "No"}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">Lift</td>
                  <td className="py-3 px-6">
                    {apartmentDetails?.lift ? "Yes" : "No"}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {category === "Plot" && (
          <section className="w-full lg:w-2/3">
            <h2 className="text-2xl font-semibold text-blue-700">
              Plot Details
            </h2>
            <p className="text-gray-700 md:text-lg mt-2 mb-4 leading-6">
              {shortDescription}
            </p>
            <table className="bg-blue-50 shadow-lg rounded-lg w-full overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left border-r">Features</th>
                  <th className="py-3 px-6 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold border-r">Price</td>
                  <td className="py-3 px-6 font-semibold">
                    {price ? price : "Price on Request"}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Land Area (sq. ft.)
                  </td>
                  <td className="py-3 px-6">{landArea}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Price Per Sq. Ft.
                  </td>
                  <td className="py-3 px-6">{plotDetails?.pricePerSqFt}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">Facing</td>
                  <td className="py-3 px-6">{plotDetails?.facing}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Accessibility
                  </td>
                  <td className="py-3 px-6">{plotDetails?.accessibility}</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {category === "Commercial Space" && (
          <section className="w-full lg:w-2/3">
            <h2 className="text-2xl font-semibold text-blue-700">
              Commercial Space Details
            </h2>
            <p className="text-gray-700 md:text-lg mt-2 mb-4 leading-6">
              {shortDescription}
            </p>
            <table className="bg-blue-50 shadow-lg rounded-lg w-full overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left border-r">Features</th>
                  <th className="py-3 px-6 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold border-r">Price</td>
                  <td className="py-3 px-6 font-semibold">
                    {price ? price : "Price on Request"}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Land Area (sq. ft.)
                  </td>
                  <td className="py-3 px-6">
                    {commercialSpaceDetails?.landArea}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Monthly Rent
                  </td>
                  <td className="py-3 px-6">
                    {commercialSpaceDetails?.monthlyRent}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">Deposit</td>
                  <td className="py-3 px-6">
                    {commercialSpaceDetails?.deposit}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Parking Spaces
                  </td>
                  <td className="py-3 px-6">
                    {commercialSpaceDetails?.parkingSpaces}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Wheelchair Accessible
                  </td>
                  <td className="py-3 px-6">
                    {commercialSpaceDetails?.isWheelchairAccessible
                      ? "Yes"
                      : "No"}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {category === "Office" && (
          <section className="w-full lg:w-2/3">
            <h2 className="text-2xl font-semibold text-blue-700">
              Office Details
            </h2>
            <p className="text-gray-700 md:text-lg mt-2 mb-4 leading-6">
              {shortDescription}
            </p>
            <table className="bg-blue-50 shadow-lg rounded-lg w-full overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left border-r">Features</th>
                  <th className="py-3 px-6 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold border-r">Price</td>
                  <td className="py-3 px-6 font-semibold">
                    {price ? price : "Price on Request"}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Land Area (sq. ft.)
                  </td>
                  <td className="py-3 px-6">{officeDetails?.landArea}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Meeting Rooms
                  </td>
                  <td className="py-3 px-6">{officeDetails?.meetingRooms}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">
                    Conference Room
                  </td>
                  <td className="py-3 px-6">
                    {officeDetails?.conferenceRoom ? "Yes" : "No"}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium border-r">Parking</td>
                  <td className="py-3 px-6">
                    {officeDetails?.parking ? "Yes" : "No"}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* Similar sections for Apartment, Plot, Commercial Space, and Office, unchanged */}

        {status === "Available" && (
          <div className="lg:w-1/3 sm:w-1/2 mx-auto flex flex-col w-full bg-blue-200 rounded-md border border-blue-400 shadow-md shadow-gray-500/50">
            <div className="w-full bg-blue-400 rounded-b-md py-2">
              <h3 className="text-3xl font-bold text-white text-center">
                Book Now!
              </h3>
            </div>
            <div className="py-5 px-5">
              <h3 className="text-2xl mb-3 font-medium">
                Are you interested in this property?
              </h3>
              <p className="leading-relaxed mb-3 opacity-80">
                We're here to assist you! Reach out today for personalized
                support, more information and expert guidance about this
                property.
              </p>
              <form>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-black/80"
                  >
                    Name
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white rounded-md border border-blue-400 focus:border-blue-600 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>

                {/* Mobile Number input field with validation */}
                <div className="relative mb-10">
                  <label
                    htmlFor="mobile"
                    className="leading-7 text-sm text-black/80"
                  >
                    Mobile Number
                  </label>{" "}
                  <br />
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={mobile}
                    onChange={handleMobileChange}
                    pattern="^[7-9][0-9]{9}$"
                    maxLength={10}
                    className="w-full bg-white rounded-md border border-blue-400 focus:border-blue-600 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                    title="Please enter a valid 10-digit mobile number starting with 7, 8, or 9"
                  />
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
        )}
      </div>
    </div>
  );
};

export default PropertyPage;
