import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import shippingImg from "../../assets/images/store.png";

const Shipping = forwardRef((props, ref) => {
  const [sameAsAddress, setSameAsAddress] = useState(false); // Default to false initially
  const [errors, setErrors] = useState({});
  const formData = useSelector((state) => state.formData); // Access formData from Redux
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentStep, navigationDirection } = useSelector(
    (state) => state.stepsSlice
  );

  const handleCheckboxChange = () => {
    setSameAsAddress((prev) => !prev); // Toggle sameAsAddress state
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    const {
      shippingCountry,
      shippingState,
      shippingZipcode,
      shippingStreetAddress,
      shippingCitie,
      shippingLandmark
    } = formData;

    if (!sameAsAddress) {
      if (!shippingCountry) {
        newErrors.shippingCountry = "Please fill country fields.";
        
      }

      if (!shippingState) {
        newErrors.shippingState = "Please fill state fields.";
        
      }

      if (!shippingZipcode) {
        newErrors.shippingZipcode = "Please fill zip fields.";
        
      }

      if (!shippingStreetAddress) {
        newErrors.shippingStreetAddress = "Please fill street fields.";
        
      }

      if (!shippingCitie) {
        newErrors.shippingCitie = "Please fill city fields.";
        
      }

      if (!shippingLandmark) {
        newErrors.shippingLandmark = "Please fill landmark fields.";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    } else {
      setErrors({});
      return true;
    }

    
  };
  // useEffect(() => {
  //   validateForm();
  // }, [ sameAsAddress]);
  

  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));

    // Clear error message when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  return (
    <div
      className={`${
        currentStep === 3
          ? navigationDirection === "next"
            ? "h-full w-full slide-in-right flex flex-col justify-center items-center gap-auto gap-10"
            : "h-full w-full slide-in-left flex flex-col justify-center items-center gap-10 "
          : "hidden"
      } p-5 2xl:py-10 px-7 `}>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center text-slate-500">
        <div className="flex gap-4 justify-center items-center">
          <img src={shippingImg} alt="shippingImg" className="w-8 h-8" />
          <h2 className="text-2xl font-bold ">Shipping</h2>
        </div>

        <div className="h-fit flex items-center gap-2 text-xl font-semibold">
          <input
            type="checkbox"
            checked={sameAsAddress}
            onChange={handleCheckboxChange}
            className="h-4 w-4 checked:border-white accent-[#00BDD6]"
          />
          <label className=" text-gray-700">Same as Address</label>
        </div>
      </div>

      <form className="w-full h-fit content-center grid grid-cols-2 gap-4 2xl:gap-6 text-sm 2xl:text-lg font-semibold">
        <div className="mb-4">
          <label
            htmlFor="shippingCountry"
            className="block text-gray-700 font-bold mb-2">
            Country
          </label>
          <input
            type="text"
            id="shippingCountry"
            name="shippingCountry"
            value={sameAsAddress ? formData.country : formData.shippingCountry}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`w-full p-2 rounded-lg ${
              sameAsAddress ? "bg-gray-200" : errors.shippingCountry ?  "border border-red-500" : ""
            }`}
            readOnly={sameAsAddress}
          />
          {/* {errors.shippingCountry && (
            <div className="text-red-500 text-xs">{errors.shippingCountry}</div>
          )} */}
        </div>
        <div className="mb-4">
          <label
            htmlFor="shippingState"
            className="block text-gray-700 font-bold mb-2">
            State/Province
          </label>
          <input
            type="text"
            id="shippingState"
            name="shippingState"
            value={sameAsAddress ? formData.state : formData.shippingState}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`w-full p-2 rounded-lg ${
              sameAsAddress ? "bg-gray-200" : errors.shippingState ? "border border-red-500" : ""
            }`}
            readOnly={sameAsAddress}
          />
          {/* {errors.shippingState && (
            <div className="text-red-500 text-xs">{errors.shippingState}</div>
          )} */}
        </div>
        <div className="mb-4">
          <label
            htmlFor="shippingZipcode"
            className="block text-gray-700 font-bold mb-2">
            Zip/Postal Code
          </label>
          <input
            type="number"
            id="shippingZipcode"
            name="shippingZipcode"
            value={sameAsAddress ? formData.zipcode : formData.shippingZipcode}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`w-full p-2 rounded-lg ${
              sameAsAddress ? "bg-gray-200" : errors.shippingZipcode ? "border border-red-500" : ""
            }`}
            readOnly={sameAsAddress}
          />
          {/* {errors.shippingZipcode && (
            <div className="text-red-500 text-xs">{errors.shippingZipcode}</div>
          )} */}
        </div>
        <div className="mb-4 col-span-1">
          <label
            htmlFor="shippingStreetAddress"
            className="block text-gray-700 font-bold mb-2">
            Street Address
          </label>
          <input
            type="text"
            id="shippingStreetAddress"
            name="shippingStreetAddress"
            value={
              sameAsAddress ? formData.street : formData.shippingStreetAddress
            }
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`w-full p-2 rounded-lg ${
              sameAsAddress ? "bg-gray-200" : errors.shippingStreetAddress ? "border border-red-500" : ""
            }`}
            readOnly={sameAsAddress}
          />
          {/* {errors.shippingStreetAddress && (
            <div className="text-red-500 text-xs">
              {errors.shippingStreetAddress}
            </div>
          )} */}
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="shippingCitie"
            className="block text-gray-700 font-bold mb-2">
            City
          </label>
          <input
            type="text"
            id="shippingCitie"
            name="shippingCitie"
            value={sameAsAddress ? formData.citie : formData.shippingCitie}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`w-full p-2 rounded-lg ${
              sameAsAddress ? "bg-gray-200" : errors.shippingCitie ? "border border-red-500" : ""
            }`}
            readOnly={sameAsAddress}
          />
          {/* {errors.shippingCitie && (
            <div className="text-red-500 text-xs">{errors.shippingCitie}</div>
          )} */}
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="shippingLandmark"
            className="block text-gray-700 font-bold mb-2">
            Landmark
          </label>
          <input
            type="text"
            id="shippingLandmark"
            name="shippingLandmark"
            value={
              sameAsAddress ? formData.landmark : formData.shippingLandmark
            }
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`w-full p-2 rounded-lg ${
              sameAsAddress ? "bg-gray-200" : errors.shippingLandmark ? "border border-red-500" : ""
            }`}
            readOnly={sameAsAddress}
          />
        </div>
      </form>
    </div>
  );
});

export default Shipping;
