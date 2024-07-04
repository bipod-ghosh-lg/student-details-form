import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import shippingImg from "../../assets/images/store.png";
import { toast } from "react-toastify";

const Shipping = forwardRef((props, ref) => {
  const [sameAsAddress, setSameAsAddress] = useState(false); // Default to false initially
  const formData = useSelector((state) => state.formData); // Access formData from Redux
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentStep, navigationDirection } = useSelector(
    (state) => state.stepsSlice
  );

  const handleCheckboxChange = () => {
    setSameAsAddress((prev) => !prev); // Toggle sameAsAddress state
  };
  
  const validateForm = () => {
    const { shippingCountry, shippingState, shippingZipcode, shippingStreetAddress, shippingCitie } = formData;

    if (!sameAsAddress) {

      if (!shippingCountry) {
        toast.warn("Please fill country fields.");
        return false;
      }

      if (!shippingState) {
        toast.warn("Please fill state fields.");
        return false;
      }

      if (!shippingZipcode) {
        toast.warn("Please fill zip fields.");
        return false;
      }

      if (!shippingStreetAddress) {
        toast.warn("Please fill street fields.");
        return false;
      }

      if (!shippingCitie) {
        toast.warn("Please fill citie fields.");
        return false;
      }
    }
    toast.success("Level 3 completed");
    return true;
  };

  useImperativeHandle(ref, () => ({
    validateForm,
  }));
    
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
      <div className="flex gap-4 justify-center items-center text-slate-500">
        <img src={shippingImg} alt="shippingImg" className="w-8 h-8" />
        <h2 className="text-2xl font-bold ">Shipping</h2>

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
          <label
            htmlFor="zipcode"
            className="block text-gray-700 font-bold mb-2">
            Zip/Postal Code
          </label>
          <input
            type="text"
            id="zipcode"
            name={sameAsAddress ? "zipcode" : "shippingZipcode"}
            value={sameAsAddress ? formData.zipcode : formData.shippingZipcode}
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
            name={sameAsAddress ? "citie" : "shippingCity"}
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
});

export default Shipping;
