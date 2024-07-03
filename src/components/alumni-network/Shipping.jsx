import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [sameAsAddress, setSameAsAddress] = useState(false); // Default to false initially
  const formData = useSelector((state) => state.formData); // Access formData from Redux
  const navigate = useNavigate();

  const { currentStep, navigationDirection } = useSelector(
    (state) => state.stepsSlice
  );

  const handleCheckboxChange = () => {
    setSameAsAddress((prev) => !prev); // Toggle sameAsAddress state
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      dispatch(updateFormData({ [name]: value }));
    };

  return (
    <div
      className={`${
        currentStep === 3
          ? navigationDirection === "next"
            ? "h-full w-full slide-in-right flex flex-col justify-center items-center gap-10 "
            : "h-full w-full slide-in-left flex flex-col justify-center items-center gap-10 "
          : "hidden"
      } p-5 2xl:py-10 px-7 `}>
      <h2 className="text-2xl font-bold ">Shipping</h2>
      <div className="h-fit col-span-2 ">
        <div className="h-fit mt-2 flex items-center">
          <input
            type="checkbox"
            checked={sameAsAddress}
            onChange={handleCheckboxChange}
            className="h-4 w-4 checked:border-white accent-[#00BDD6]"
          />
          <label className="ml-2 text-gray-700">Same as Address</label>
        </div>
      </div>

      <form className="w-full h-fit content-center grid grid-cols-2 gap-4 2xl:gap-6 text-sm 2xl:text-lg font-semibold">
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-gray-700 font-bold mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            name={sameAsAddress ? "country" : "shippingCountry"}
            value={sameAsAddress ? formData.country : formData.shippingCountry}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`w-full p-2 rounded-lg ${
              sameAsAddress ? "bg-gray-200" : ""
            }`}
            readOnly={sameAsAddress}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 font-bold mb-2">
            State/Province
          </label>
          <input
            type="text"
            id="state"
            name={sameAsAddress ? "state" : "shippingState"}
            value={sameAsAddress ? formData.state : formData.shippingState}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`w-full p-2 rounded-lg ${
              sameAsAddress ? "bg-gray-200" : ""
            }`}
            readOnly={sameAsAddress}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="zip" className="block text-gray-700 font-bold mb-2">
            Zip/Postal Code
          </label>
          <input
            type="text"
            id="zip"
            name={sameAsAddress ? "zip" : "shippingZipcode"}
            value={sameAsAddress ? formData.zip : formData.shippingZipcode}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`w-full p-2 rounded-lg ${
              sameAsAddress ? "bg-gray-200" : ""
            }`}
            readOnly={sameAsAddress}
          />
        </div>
        <div className="mb-4 col-span-1">
          <label
            htmlFor="street"
            className="block text-gray-700 font-bold mb-2">
            Street Address
          </label>
          <input
            type="text"
            id="street"
            name={sameAsAddress ? "street" : "shippingStreet"}
            value={sameAsAddress ? formData.street : formData.shippingStreet}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`w-full p-2 rounded-lg ${
              sameAsAddress ? "bg-gray-200" : ""
            }`}
            readOnly={sameAsAddress}
          />
        </div>
        <div className="mb-4 col-span-2">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            name={sameAsAddress ? "city" : "shippingCity"}
            value={sameAsAddress ? formData.citie : formData.shippingCitie}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`w-full p-2 rounded-lg ${
              sameAsAddress ? "bg-gray-200" : ""
            }`}
            readOnly={sameAsAddress}
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="landmark"
            className="block text-gray-700 font-bold mb-2">
            Landmark
          </label>
          <input
            type="text"
            id="landmark"
            name={sameAsAddress ? "landmark" : "shippingLandmark"}
            value={
              sameAsAddress ? formData.landmark : formData.shippingLandmark
            }
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`w-full p-2 rounded-lg ${
              sameAsAddress ? "bg-gray-200" : ""
            }`}
            readOnly={sameAsAddress}
          />
        </div>
      </form>
    </div>
  );
};

export default Shipping;
