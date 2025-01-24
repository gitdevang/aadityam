import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import QualipactSlider from "../../../components/QualipactSlider";
import { MdOutlineError } from "react-icons/md";
import customFetch from "@/fetch/customFetch";

export default function CreateProperty() {
  const [imageUrl, setImageUrl] = useState([]);
  return (
    <>
      <div className="min-h-[90vh] flex flex-col relative items-center justify-center gap-10 py-20">
        <div className="text-center space-y-2 md:space-y-3">
          <h1 className="text-4xl lg:text-5xl font-p_bd">
            Step {imageUrl.length === 0 ? "1" : "2"}:
          </h1>
          <h2 className="text-2xl lg:text-3xl font-mont font-semibold text-black/80">
            {imageUrl.length === 0 ? "Upload Your Images" : "Fill the Form"}
          </h2>
        </div>
        {imageUrl.length === 0 ? (
          <UploadForm imageUrl={imageUrl} setImageUrl={setImageUrl} />
        ) : (
          <PropertyForm imageUrl={imageUrl} />
        )}
      </div>
    </>
  );
}

export const InputField = ({
  label,
  id,
  name,
  register,
  required,
  error,
  type = "text",
  value,
}) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-semibold mb-2">
      {label}
    </label>
    <input
      id={id}
      {...register(name, { required })}
      type={type}
      value={value}
      className="w-full p-3 border rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <p className="text-red-500 text-sm">This field is required</p>}
  </div>
);

export const SelectField = ({
  label,
  id,
  name,
  register,
  options,
  required,
  onChange,
}) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-semibold mb-2">
      {label}
    </label>
    <select
      id={id}
      {...register(name, { required })}
      onChange={onChange}
      className="w-full p-3 border rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((option) => (
        <option
          key={option.value}
          selected={option.selected}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export const CheckboxField = ({ label, name, control, checked = null }) => (
  <div className="flex items-center gap-3">
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          {...field}
          type="checkbox"
          className="h-4 w-4"
          checked={checked !== null ? checked : field.value === true}
        />
      )}
    />
    <label htmlFor={name} className="block text-gray-700 font-semibold">
      {label}
    </label>
  </div>
);

const PropertyForm = ({ imageUrl }) => {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("House");
  const [isRent, setIsRent] = useState(false);

  const onSubmit = async (data) => {
    let payload = {
      title: data.title,
      ...(isRent === false && {
        price: data.price,
        pricePerSqFt: Number(data.pricePerSqFt),
      }),
      waterSupply: data.waterSupply === true,
      electricitySupply: data.electricitySupply === true,
      rent: isRent,
      imageUrl: imageUrl,
      location: data.location,
      landArea: Number(data.landArea),
      shortDescription: data.shortDescription,
      longDescription: data.longDescription,
      category: data.category,
      furnishingStatus: data.furnishingStatus,
    };

    if (data.category === "House") {
      payload.houseDetails = {
        floors: Number(data.floors),
        bedrooms: Number(data.bedrooms),
        bathrooms: Number(data.bathrooms),
        halls: Number(data.halls),
        kitchen: data.kitchen === true,
        balconies: data.balconies === true,
        parking: data.parking === true,
        lift: data.lift === true,
      };
    } else if (data.category === "Apartment") {
      payload.apartmentDetails = {
        bathrooms: Number(data.bathrooms),
        totalFloors: Number(data.totalFloors),
        floorNumber: Number(data.floorNumber),
        balconies: data.balconies === true,
        parking: data.parking === true,
        lift: data.lift === true,
      };
    } else if (data.category === "Plot") {
      payload.plotDetails = {
        plotType: data.plotType,
      };
    } else if (data.category === "Commercial Space") {
      payload.commercialSpaceDetails = {
        parkingSpaces: Number(data.parkingSpaces),
        lift: data.lift === true,
        isWheelchairAccessible: data.isWheelchairAccessible === true,
      };
    } else if (data.category === "Office") {
      payload.officeDetails = {
        conferenceRoom: data.conferenceRoom === true,
        meetingRoom: data.meetingRoom === true,
        waitingRoom: data.waitingRoom === true,
        parking: data.parking === true,
        lift: data.lift === true,
        isWheelchairAccessible: data.isWheelchairAccessible === true,
      };
    }

    if (isRent) {
      payload.monthlyRent = Number(data.monthlyRent);
      payload.deposit = Number(data.deposit);
      payload.maintenanceCost = Number(data.maintenanceCost);
      payload.leaseDuration = Number(data.leaseDuration);
      payload.leaseType = data.leaseType;
    }

    setLoading(true);

    try {
      const res = await customFetch("/api/property", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseData = await res.json();

      if (res.ok) {
        alert(responseData.message);
        console.log(responseData.data);
      } else {
        alert(responseData.message);
      }
    } catch (error) {
      console.error("Error during upload:", error);
      alert("An error occurred during upload!");
    } finally {
      setLoading(false);
      setTimeout(() => {
        location.replace("/admin");
      }, 1000);
    }
  };

  return (
    <div className="max-w-3xl w-full mx-auto my-6 p-6 bg-white rounded-lg shadow-lg space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InputField
            type="String"
            label="Title"
            id="title"
            name="title"
            register={register}
            required={true}
            error={errors.title}
          />
          <SelectField
            label="Category"
            id="category"
            name="category"
            options={[
              { label: "House", value: "House" },
              { label: "Apartment", value: "Apartment" },
              { label: "Plot", value: "Plot" },
              { label: "Commercial Space", value: "Commercial Space" },
              { label: "Office", value: "Office" },
            ]}
            register={register}
            required={true}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <InputField
          type="String"
          label="Location"
          id="location"
          name="location"
          register={register}
          required={true}
          error={errors.location}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InputField
            type="number"
            label="Land Area (sq.ft.)"
            id="landArea"
            name="landArea"
            register={register}
            required={true}
            error={errors.landArea}
          />

          <SelectField
            label="For Rent?"
            id="rent"
            name="rent"
            options={[
              { label: "Yes", value: "true" },
              { label: "No", value: "false", selected: true },
            ]}
            register={register}
            required={true}
            onChange={(e) => {
              const value = e.target.value === "true";
              setIsRent(value);
            }}
          />
        </div>
        {!isRent && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InputField
                type="String"
                label="Price"
                id="price"
                name="price"
                register={register}
                required={!isRent} // Adjusted based on rent condition
                error={errors.price}
              />
              <InputField
                type="number"
                label="Price per Sq. Ft."
                id="pricePerSqFt"
                name="pricePerSqFt"
                register={register}
                required={true}
                error={errors.pricePerSqFt}
              />
            </div>
          </>
        )}

        <div className="flex justify-between">
          <CheckboxField
            label="Water Supply"
            name="waterSupply"
            control={control}
            required={true}
          />
          <CheckboxField
            label="Electricity Supply"
            name="electricitySupply"
            control={control}
            required={true}
          />
        </div>

        {isRent && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InputField
                type="number"
                label="Monthly Rent"
                id="monthlyRent"
                name="monthlyRent"
                register={register}
                required={true}
                error={errors.monthlyRent}
              />
              <InputField
                type="number"
                label="Deposit"
                id="deposit"
                name="deposit"
                register={register}
                required={true}
                error={errors.deposit}
              />
              <InputField
                type="number"
                label="Maintenance Cost"
                id="maintenanceCost"
                name="maintenanceCost"
                register={register}
                required={true}
                error={errors.maintenanceCost}
              />
              <InputField
                type="number"
                label="Lease Duration (months)"
                id="leaseDuration"
                name="leaseDuration"
                register={register}
                required={true}
                error={errors.leaseDuration}
              />
            </div>
            <SelectField
              label="Lease Type"
              id="leaseType"
              name="leaseType"
              options={[
                { label: "Fixed", value: "Fixed" },
                { label: "Negotiable", value: "Negotiable" },
                { label: "Percentage", value: "Percentage" },
              ]}
              register={register}
              required={true}
              error={errors.leaseType}
            />
          </>
        )}

        {/* Category-Specific Fields */}
        <div>
          {category === "House" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <InputField
                  type="number"
                  label="Floors"
                  id="floors"
                  name="floors"
                  register={register}
                  required={true}
                  error={errors.floors} // Pass error if exists
                />
                <InputField
                  type="number"
                  label="Bedrooms"
                  id="bedrooms"
                  name="bedrooms"
                  register={register}
                  required={true}
                  error={errors.bedrooms} // Pass error if exists
                />
                <InputField
                  type="number"
                  label="Bathrooms"
                  id="bathrooms"
                  name="bathrooms"
                  register={register}
                  required={true}
                  error={errors.bathrooms} // Pass error if exists
                />
                <InputField
                  type="number"
                  label="Halls"
                  id="halls"
                  name="halls"
                  register={register}
                  required={true}
                  error={errors.halls} // Pass error if exists
                />
              </div>
              <div className="flex flex-wrap justify-between gap-3 pt-5">
                <CheckboxField
                  label="Kitchen"
                  name="kitchen"
                  control={control}
                  required={true}
                />
                <CheckboxField
                  label="Balconies"
                  name="balconies"
                  control={control}
                  required={true}
                />
                <CheckboxField label="Lift" name="lift" control={control} />
                <CheckboxField
                  label="Parking"
                  name="parking"
                  control={control}
                />
              </div>
            </>
          )}

          {category === "Apartment" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <InputField
                  type="number"
                  label="Bathrooms"
                  id="bathrooms"
                  name="bathrooms"
                  register={register}
                  required={true}
                  error={errors.bathrooms}
                />
                <InputField
                  type="number"
                  label="Total Floors"
                  id="totalFloors"
                  name="totalFloors"
                  register={register}
                  required={true}
                  error={errors.totalFloors}
                />
                <InputField
                  type="number"
                  label="Floor Number"
                  id="floorNumber"
                  name="floorNumber"
                  register={register}
                  required={true}
                  error={errors.floorNumber}
                />
              </div>
              <div className="flex flex-wrap justify-between gap-3 pt-5">
                <CheckboxField
                  label="Balconies"
                  name="balconies"
                  control={control}
                />
                <CheckboxField
                  label="Parking"
                  name="parking"
                  control={control}
                />
                <CheckboxField label="Lift" name="lift" control={control} />
              </div>
            </>
          )}

          {category === "Plot" && (
            <>
              <SelectField
                label="Plot Type"
                id="plotType"
                name="plotType"
                options={[
                  { label: "Residential", value: "Residential" },
                  { label: "Commercial", value: "Commercial" },
                  { label: "Industrial", value: "Industrial" },
                ]}
                register={register}
                required={true}
              />
            </>
          )}

          {category === "Commercial Space" && (
            <>
              <InputField
                type="number"
                label="Parking Spaces"
                id="parkingSpaces"
                name="parkingSpaces"
                register={register}
                required={true}
                error={errors.parkingSpaces}
              />
              <div className="flex flex-wrap justify-between gap-3 pt-5">
                <CheckboxField label="Lift" name="lift" control={control} />
                <CheckboxField
                  label="Wheelchair Accessible"
                  name="isWheelchairAccessible"
                  control={control}
                />
              </div>
            </>
          )}

          {category === "Office" && (
            <>
              <div className="flex flex-wrap justify-between gap-3 pt-5">
                <CheckboxField
                  label="Conference Room"
                  name="conferenceRoom"
                  control={control}
                />
                <CheckboxField
                  label="Meeting Room"
                  name="meetingRoom"
                  control={control}
                />
                <CheckboxField
                  label="Waiting Room"
                  name="waitingRoom"
                  control={control}
                />
                <CheckboxField label="Lift" name="lift" control={control} />
                <CheckboxField
                  label="Wheelchair Accessible"
                  name="isWheelchairAccessible"
                  control={control}
                />
              </div>
            </>
          )}
        </div>

        {/* Short Description */}
        <div>
          <label
            htmlFor="shortDescription"
            className="block text-gray-700 font-semibold mb-2"
          >
            Short Description
          </label>
          <textarea
            id="shortDescription"
            {...register("shortDescription")}
            maxLength={200}
            className="w-full p-3 border rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Long Description */}
        <div>
          <label
            htmlFor="longDescription"
            className="block text-gray-700 font-semibold mb-2"
          >
            Long Description
          </label>
          <textarea
            id="longDescription"
            {...register("longDescription")}
            className="w-full p-3 border rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Furnishing Status */}
        <SelectField
          label="Furnishing Status"
          id="furnishingStatus"
          name="furnishingStatus"
          options={[
            { label: "Not Specified", value: "Not Specified" },
            { label: "Fully-Furnished", value: "Fully-Furnished" },
            { label: "Unfurnished", value: "Unfurnished" },
            { label: "Semi-Furnished", value: "Semi-Furnished" },
          ]}
          register={register}
          required={false} // Optional based on schema
        />

        <button
          disabled={loading}
          type="submit"
          className="mx-auto bg-blue-600 hover:bg-blue-700 disabled:scale-95 disabled:bg-blue-700 disabled:cursor-not-allowed text-white p-4 rounded-md mt-4 shadow-md"
        >
          Create Property
        </button>
      </form>
    </div>
  );
};

const UploadForm = ({ imageUrl, setImageUrl }) => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    console.log(image);
    image.forEach((img) => {
      formData.append("images[]", img); // Append files as an array
    });

    for (let [key, value] of formData.entries()) {
      console.log(key + ": " + value);
    }

    try {
      const res = await customFetch("/api/property/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert("Images uploaded successfully!");
        setImageUrl(data.imgUrls); // Set the uploaded image URL
      } else {
        setError(data.error || "Upload failed, please try again.");
      }
    } catch (error) {
      setError("An error occurred during upload!");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || e.dataTransfer.files);
    if (files.length > 10) {
      setError("You can upload a maximum of 10 images.");
      return;
    }
    if (!files.every((file) => file.type.match(/image\/(jpeg|png|webp)/))) {
      console.log("Invalid file type");
      setError(
        "Invalid file type. Please upload only JPEG, PNG, or WEBP images."
      );
      return;
    }
    setError("");
    setImage(files);
  };

  const preventDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Handle file drop event
  const handleDrop = (e) => {
    preventDefault(e);
    handleFileChange(e);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-96 mx-auto"
      >
        <div className=" mb-4 border-2 border-blue-200 border-dashed rounded-lg flex justify-center items-center text-center h-52 relative overflow-hidden">
          <input
            type="file"
            accept="image/jpeg, image/png, image/webp"
            onChange={handleFileChange}
            required
            multiple
            className="rounded-md h-full w-full opacity-0 cursor-pointer z-[2]"
          />
          {image.length > 0 ? (
            <div className="absolute h-full w-full z-[1]">
              <img
                src={URL.createObjectURL(image[0])}
                alt={`Image 1`}
                className="h-full w-full object-cover"
              />
              {image.length > 1 && (
                <>
                  <div className="absolute bottom-2 right-2 h-10 w-14 rounded-md z-[4] flex justify-center items-center font-bold bg-white text-blue-900 text-xl drop-shadow-lg">
                    +{image.length - 1}
                  </div>
                  <div className="absolute bottom-3 right-3 h-10 w-12 rounded-md z-[3] bg-gray-200"></div>
                  <div className="absolute bottom-4 right-4 h-10 w-10 rounded-md z-[2] bg-gray-400"></div>
                </>
              )}
            </div>
          ) : (
            <div
              onDrop={handleDrop}
              onDragOver={preventDefault}
              className="absolute h-full w-full flex flex-col justify-center items-center gap-2 z-[1]"
            >
              <img src="/images/image.png" className="h-16 opacity-90" alt="" />
              <p className="text-gray-600">
                Drop your images here, or{" "}
                <span className="text-blue-600">browse</span>
              </p>
              <p className="text-gray-500 font-mont font-medium text-sm">
                Only supports JPEG, PNG, WEBP
              </p>
            </div>
          )}
        </div>

        {imageUrl.length > 0 ? (
          <p className="text-green-500 font-semibold">Uploaded</p>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md w-full transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};
