import customFetch from "@/fetch/customFetch";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const InputField = ({ label, id, name, required, error, type = "text",value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-semibold">{label}</label>
    <input
      id={id}
      name={name}
      required={required}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-3 border rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export const SelectField = ({ label, id, name, options, required, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-semibold">{label}</label>
    <select
      id={id}
      name={name}
      required={required}
      onChange={onChange}
      className="w-full p-3 border rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map(option => (
        <option key={option.value} selected={option.selected} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

export const CheckboxField = ({ label, name,checked = null, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-semibold">{label}</label>
        <input
         name={name}
          type="checkbox"
          className="h-4 w-4"
          checked={checked!==null&&checked}
          onChange={onChange}
        />
  </div>
);

const PropertyForm = ({ imageUrl }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query; // Access the id from the query params
  const [propertyListings, setPropertyListings] = useState([]); // Initialize as an array
  const [error, setError] = useState("");

  const onSubmit = async () => {
    console.log(propertyListings);

    setLoading(true);

    try {
      const res = await customFetch(`/api/property/${id}`, {
        method: "PATCH", // PATCH method for updating data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyListings[0]), // Payload containing updated property data
      });
  
      const responseData = await res.json();
  
      if (res.ok) {
        alert(responseData.message); // Alert success message
        console.log(responseData.data); // Log the updated property data
      } else {
        alert(responseData.message); // Alert error message
      }
    } catch (error) {
      console.error("Error during update:", error);
      alert("An error occurred during the update!");
    } finally {
      setLoading(false); // Reset loading state
      setTimeout(() => {
        location.replace("/admin"); // Redirect to admin page after 1 second
      }, 1000);
    }
  }

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

  if (propertyListings.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl w-full mx-auto my-6 p-6 bg-white rounded-lg shadow-lg space-y-6">
      <form onSubmit={onSubmit} className="space-y-6">
        <InputField
          type="String"
          label="Title"
          id="title"
          name="title"
          value={propertyListings[0].title}
          onChange={(e) => {
            setPropertyListings((prevListings) => [
              { ...prevListings[0], title: e.target.value },
            ]);
          }}
          required={true}
        />
        <SelectField
          label="Category"
          id="category"
          name="category"
          options={[
            {
              label: "House",
              value: "House",
              selected: propertyListings[0].category === "House",
            },
            {
              label: "Apartment",
              value: "Apartment",
              selected: propertyListings[0].category === "Apartment",
            },
            {
              label: "Plot",
              value: "Plot",
              selected: propertyListings[0].category === "Plot",
            },
            {
              label: "Commercial Space",
              value: "Commercial Space",
              selected: propertyListings[0].category === "Commercial Space",
            },
            {
              label: "Office",
              value: "Office",
              selected: propertyListings[0].category === "Office",
            },
          ]}
          required={true}
          onChange={(e) => {
            setPropertyListings((prevListings) => [
              { ...prevListings[0], category: e.target.value },
            ]);
          }}
        />
        <InputField
          type="String"
          label="Location"
          id="location"
          name="location"
          value={propertyListings[0].location}
          required={true}
          onChange={(e) => {
            setPropertyListings((prevListings) => [
              { ...prevListings[0], location: e.target.value },
            ]);
          }}
        />
        <InputField
          type="number"
          label="Land Area (sq.ft.)"
          id="landArea"
          name="landArea"
          onChange={(e) => {
            setPropertyListings((prevListings) => [
              { ...prevListings[0], landArea: e.target.value },
            ]);
          }}
          value={propertyListings[0].landArea}
          required={true}
        />

        <SelectField
          label="For Rent?"
          id="rent"
          name="rent"
          options={[
            {
              label: "Yes",
              value: "true",
              selected: propertyListings[0].rent === "true",
            },
            {
              label: "No",
              value: "false",
              selected: propertyListings[0].rent === "false",
            },
          ]}
          required={true}
          onChange={(e) => {
            setPropertyListings((prevListings) => [
              { ...prevListings[0], rent: e.target.value === "true" },
            ]);
          }}
        />

        {!propertyListings[0].rent && (
          <>
            <InputField
              type="String"
              label="Price"
              id="price"
              name="price"
               
              value={propertyListings[0].price}
              required={true} // Adjusted based on rent condition
              onChange={(e) => {
                setPropertyListings((prevListings) => [
                  { ...prevListings[0], price: e.target.value },
                ]);
              }}
            />
            <InputField
              type="number"
              label="Price per Sq. Ft."
              id="pricePerSqFt"
              name="pricePerSqFt"
              value={propertyListings[0].pricePerSqFt}
               
              required={true}
              onChange={(e) => {
                setPropertyListings((prevListings) => [
                  { ...prevListings[0], pricePerSqFt: e.target.value },
                ]);
              }}
            />
          </>
        )}

        <CheckboxField
          label="Water Supply"
          name="waterSupply"
          checked={propertyListings[0].waterSupply ? true : null}
          onChange={(e) => {
            setPropertyListings((prevListings) => [
              { ...prevListings[0], waterSupply: e.target.checked },
            ]);
          }}
          required={true}
        />
        <CheckboxField
          label="Electricity Supply"
          name="electricitySupply"
          checked={propertyListings[0].electricitySupply ? true : null}
          onChange={(e) => {
            setPropertyListings((prevListings) => [
              { ...prevListings[0], electricitySupply: e.target.checked },
            ]);
          }}
          required={true}
        />

        {propertyListings[0].rent && (
          <>
            <InputField
              type="number"
              label="Monthly Rent"
              id="monthlyRent"
              name="monthlyRent"
               
              required={true}
              value={propertyListings[0].monthlyRent}
              onChange={(e) => {
                setPropertyListings((prevListings) => [
                  { ...prevListings[0], monthlyRent: e.target.value },
                ]);
              }}
            />
            <InputField
              type="number"
              label="Deposit"
              id="deposit"
              name="deposit"
               
              required={true}
              value={propertyListings[0].deposit}
              onChange={(e) => {
                setPropertyListings((prevListings) => [
                  { ...prevListings[0], deposit: e.target.value },
                ]);
              }}
            />
            <InputField
              type="number"
              label="Maintenance Cost"
              id="maintenanceCost"
              name="maintenanceCost"
               
              required={true}
              value={propertyListings[0].maintenanceCost}
              onChange={(e) => {
                setPropertyListings((prevListings) => [
                  { ...prevListings[0], maintenanceCost: e.target.value },
                ]);
              }}
            />
            <InputField
              type="number"
              label="Lease Duration (months)"
              id="leaseDuration"
              name="leaseDuration"
               
              required={true}
              value={propertyListings[0].leaseDuration}
              onChange={(e) => {
                setPropertyListings((prevListings) => [
                  { ...prevListings[0], leaseDuration: e.target.value },
                ]);
              }}
            />
            <SelectField
              label="Lease Type"
              id="leaseType"
              name="leaseType"
              options={[
                {
                  label: "Fixed",
                  value: "Fixed",
                  selected: propertyListings[0].leaseType === "Fixed",
                },
                {
                  label: "Negotiable",
                  value: "Negotiable",
                  selected: propertyListings[0].leaseType === "Negotiable",
                },
                {
                  label: "Percentage",
                  value: "Percentage",
                  selected: propertyListings[0].leaseType === "Percentage",
                },
              ]}
               
              required={true}
              onChange={(e) => {
                setPropertyListings((prevListings) => [
                  { ...prevListings[0], leaseType: e.target.value },
                ]);
              }}
            />
          </>
        )}

        {/* Category-Specific Fields */}
        <div>
          {propertyListings[0].category === "House" && (
            <>
              <InputField
                type="number"
                label="Floors"
                id="floors"
                name="floors"
                 
                required={true}
                value={propertyListings[0].houseDetails?.floors}
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      houseDetails: {
                        ...prevListings[0].houseDetails,
                        floors: e.target.value,
                      },
                    },
                  ]);
                }}
              />
              <InputField
                type="number"
                label="Bedrooms"
                id="bedrooms"
                name="bedrooms"
                 
                required={true}
                value={propertyListings[0].houseDetails?.bedrooms}
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      houseDetails: {
                        ...prevListings[0].houseDetails,
                        bedrooms: e.target.value,
                      },
                    },
                  ]);
                }}
              />
              <InputField
                type="number"
                label="Bathrooms"
                id="bathrooms"
                name="bathrooms"
                 
                required={true}
                value={propertyListings[0].houseDetails?.bathrooms}
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      houseDetails: {
                        ...prevListings[0].houseDetails,
                        bathrooms: e.target.value,
                      },
                    },
                  ]);
                }}
              />
              <InputField
                type="number"
                label="Halls"
                id="halls"
                name="halls"
                 
                required={true}
                value={propertyListings[0].houseDetails?.halls}
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      houseDetails: {
                        ...prevListings[0].houseDetails,
                        halls: e.target.value,
                      },
                    },
                  ]);
                }}
              />
              <CheckboxField
                label="Kitchen"
                name="kitchen"
                checked={
                  propertyListings[0].houseDetails?.kitchen ? true : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      houseDetails: {
                        ...prevListings[0].houseDetails,
                        kitchen: e.target.checked,
                      },
                    },
                  ]);
                }}
                required={true}
              />
              <CheckboxField
                label="Balconies"
                name="balconies"
                checked={
                  propertyListings[0].houseDetails?.balconies ? true : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      houseDetails: {
                        ...prevListings[0].houseDetails,
                        balconies: e.target.checked,
                      },
                    },
                  ]);
                }}
                required={true}
              />
              <CheckboxField
                label="Lift"
                name="lift"
                checked={propertyListings[0].houseDetails?.lift ? true : null}
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      houseDetails: {
                        ...prevListings[0].houseDetails,
                        lift: e.target.checked,
                      },
                    },
                  ]);
                }}
              />
              <CheckboxField
                label="Parking"
                name="parking"
                checked={
                  propertyListings[0].houseDetails?.parking ? true : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      houseDetails: {
                        ...prevListings[0].houseDetails,
                        parking: e.target.checked,
                      },
                    },
                  ]);
                }}
              />
            </>
          )}

          {propertyListings[0].category === "Apartment" && (
            <>
              <InputField
                type="number"
                label="Bathrooms"
                id="bathrooms"
                name="bathrooms"
                 
                required={true}
                value={propertyListings[0].apartmentDetails?.bathrooms}
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      apartmentDetails: {
                        ...prevListings[0].apartmentDetails,
                        bathrooms: e.target.value,
                      },
                    },
                  ]);
                }}
              />
              <InputField
                type="number"
                label="Total Floors"
                id="totalFloors"
                name="totalFloors"
                 
                required={true}
                value={propertyListings[0].apartmentDetails?.totalFloors}
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      apartmentDetails: {
                        ...prevListings[0].apartmentDetails,
                        totalFloors: e.target.value,
                      },
                    },
                  ]);
                }}
              />
              <InputField
                type="number"
                label="Floor Number"
                id="floorNumber"
                name="floorNumber"
                 
                required={true}
                value={propertyListings[0].apartmentDetails?.floorNumber}
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      apartmentDetails: {
                        ...prevListings[0].apartmentDetails,
                        floorNumber: e.target.value,
                      },
                    },
                  ]);
                }}
              />
              <CheckboxField
                label="Balconies"
                name="balconies"
                value={
                  propertyListings[0].apartmentDetails?.balconies ? true : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      apartmentDetails: {
                        ...prevListings[0].apartmentDetails,
                        balconies: e.target.checked,
                      },
                    },
                  ]);
                }}
              />
              <CheckboxField
                label="Parking"
                name="parking"
                checked={
                  propertyListings[0].apartmentDetails?.parking ? true : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      apartmentDetails: {
                        ...prevListings[0].apartmentDetails,
                        parking: e.target.checked,
                      },
                    },
                  ]);
                }}
              />
              <CheckboxField
                label="Lift"
                name="lift"
                checked={
                  propertyListings[0].apartmentDetails?.lift ? true : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      apartmentDetails: {
                        ...prevListings[0].apartmentDetails,
                        lift: e.target.checked,
                      },
                    },
                  ]);
                }}
              />
            </>
          )}

          {propertyListings[0].category === "Plot" && (
            <>
              <SelectField
                label="Plot Type"
                id="plotType"
                name="plotType"
                options={[
                  {
                    label: "Residential",
                    value: "Residential",
                    selected:
                      propertyListings[0].plotDetails?.plotType ===
                      "Residential",
                  },
                  {
                    label: "Commercial",
                    value: "Commercial",
                    selected:
                      propertyListings[0].plotDetails?.plotType ===
                      "Commercial",
                  },
                  {
                    label: "Industrial",
                    value: "Industrial",
                    selected:
                      propertyListings[0].plotDetails?.plotType ===
                      "Industrial",
                  },
                ]}
                 
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      plotDetails: {
                        ...prevListings[0].plotDetails,
                        plotType: e.target.value,
                      },
                    },
                  ]);
                }}
                required={true}
              />
            </>
          )}

          {propertyListings[0].category === "Commercial Space" && (
            <>
              <InputField
                type="number"
                label="Parking Spaces"
                id="parkingSpaces"
                name="parkingSpaces"
                 
                required={true}
                value={
                  propertyListings[0].commercialSpaceDetails?.parkingSpaces
                    ? true
                    : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      commercialSpaceDetails: {
                        ...prevListings[0].commercialSpaceDetails,
                        parkingSpaces: e.target.value,
                      },
                    },
                  ]);
                }}
              />
              <CheckboxField
                label="Lift"
                name="lift"
                checked={
                  propertyListings[0].commercialSpaceDetails?.lift ? true : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      commercialSpaceDetails: {
                        ...prevListings[0].commercialSpaceDetails,
                        lift: e.target.checked,
                      },
                    },
                  ]);
                }}
              />
              <CheckboxField
                label="Wheelchair Accessible"
                name="isWheelchairAccessible"
                checked={
                  propertyListings[0].commercialSpaceDetails
                    ?.isWheelchairAccessible
                    ? true
                    : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      commercialSpaceDetails: {
                        ...prevListings[0].commercialSpaceDetails,
                        isWheelchairAccessible: e.target.checked,
                      },
                    },
                  ]);
                }}
              />
            </>
          )}

          {propertyListings[0].category === "Office" && (
            <>
              <CheckboxField
                label="Conference Room"
                name="conferenceRoom"
                checked={
                  propertyListings[0].officeDetails?.conferenceRoom
                    ? true
                    : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      officeDetails: {
                        ...prevListings[0].officeDetails,
                        conferenceRoom: e.target.checked,
                      },
                    },
                  ]);
                }}
              />
              <CheckboxField
                label="Meeting Room"
                name="meetingRoom"
                checked={
                  propertyListings[0].officeDetails?.meetingRoom ? true : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      officeDetails: {
                        ...prevListings[0].officeDetails,
                        meetingRoom: e.target.checked,
                      },
                    },
                  ]);
                }}
              />
              <CheckboxField
                label="Waiting Room"
                name="waitingRoom"
                checked={
                  propertyListings[0].officeDetails?.waitingRoom ? true : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      officeDetails: {
                        ...prevListings[0].officeDetails,
                        waitingRoom: e.target.checked,
                      },
                    },
                  ]);
                }}
              />
              <CheckboxField
                label="Lift"
                name="lift"
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      officeDetails: {
                        ...prevListings[0].officeDetails,
                        lift: e.target.checked,
                      },
                    },
                  ]);
                }}
              />
              <CheckboxField
                label="Wheelchair Accessible"
                name="isWheelchairAccessible"
                checked={
                  propertyListings[0].officeDetails?.isWheelchairAccessible
                    ? true
                    : null
                }
                onChange={(e) => {
                  setPropertyListings((prevListings) => [
                    {
                      ...prevListings[0],
                      officeDetails: {
                        ...prevListings[0].officeDetails,
                        isWheelchairAccessible: e.target.checked,
                      },
                    },
                  ]);
                }}
              />
            </>
          )}
        </div>

        {/* Short Description */}
        <div>
          <label
            htmlFor="shortDescription"
            className="block text-gray-700 font-semibold"
          >
            Short Description
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            value={
              propertyListings[0].shortDescription
            }
            onChange={(e) => {
              setPropertyListings((prevListings) => [
                { ...prevListings[0], shortDescription: e.target.value },
              ]);
            }}
            maxLength={200}
            className="w-full p-3 border rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Long Description */}
        <div>
          <label
            htmlFor="longDescription"
            className="block text-gray-700 font-semibold"
          >
            Long Description
          </label>
          <textarea
            id="longDescription"
            name="longDescription"
            value={
              propertyListings[0].longDescription 
            }
            onChange={(e) => {
              setPropertyListings((prevListings) => [
                { ...prevListings[0], longDescription: e.target.value },
              ]);
            }}
            className="w-full p-3 border rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Furnishing Status */}
        <SelectField
          label="Furnishing Status"
          id="furnishingStatus"
          name="furnishingStatus"
          options={[
            {
              label: "Not Specified",
              value: "Not Specified",
              selected:
                propertyListings[0].furnishingStatus === "Not Specified",
            },
            {
              label: "Fully-Furnished",
              value: "Fully-Furnished",
              selected:
                propertyListings[0].furnishingStatus === "Fully-Furnished",
            },
            {
              label: "Unfurnished",
              value: "Unfurnished",
              selected: propertyListings[0].furnishingStatus === "Unfurnished",
            },
            {
              label: "Semi-Furnished",
              value: "Semi-Furnished",
              selected:
                propertyListings[0].furnishingStatus === "Semi-Furnished",
            },
          ]}
          onChange={(e) => {
            setPropertyListings((prevListings) => [
              { ...prevListings[0], furnishingStatus: e.target.value },
            ]);
          }}
           
          required={false} // Optional based on schema
        />

        <button
          disabled={loading}
          type="submit"
          className="mx-auto bg-blue-600 hover:bg-blue-700 disabled:scale-95 disabled:bg-blue-700 disabled:cursor-not-allowed text-white p-4 rounded-md mt-4 shadow-md"
        >
          Update Property
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;
