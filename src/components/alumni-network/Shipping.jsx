import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
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
      shippingLandmark,
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
            ? "slide-in-right "
            : "slide-in-left"
          : "hidden"
      } py-5 md:py-6 2xl:py-12 h-full w-full  px-7 flex flex-col   gap-4 xl:gap-6 2xl:gap-10`}>
      <div className="flex flex-col   gap-4 justify-between  text-slate-500">
        <div className="flex gap-4  ">
          <img src={shippingImg} alt="shippingImg" className="w-6 h-6" />
          <h2 className="text-xl font-bold ">Shipping</h2>
        </div>

        <div className="h-fit flex items-center gap-2 text-xl font-semibold">
          <input
            type="checkbox"
            checked={sameAsAddress}
            onChange={handleCheckboxChange}
            className="h-4 w-4 checked:border-white accent-[#00BDD6]"
          />
          <label className=" text-gray-700 text-sm md:text-lg font-semibold">
            Same as Address
          </label>
        </div>
      </div>

      <form className="w-full h-fit  grid grid-cols-2 gap-2 md:gap-y-1 xl:gap-y-2 2xl:gap-y-3 gap-x-3 md:gap-x-10 2xl:gap-x-12 ">
        <div className="h-fit flex flex-col gap-1">
          <label
            htmlFor="shippingCountry"
            className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Country
          </label>
          <input
            type="text"
            id="shippingCountry"
            name="shippingCountry"
            value={sameAsAddress ? formData.country : formData.shippingCountry}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`block w-full rounded-md border-gray-300  py-1 px-2 ${
              sameAsAddress
                ? "bg-gray-200"
                : errors.shippingCountry
                ? "border border-red-500"
                : ""
            }`}
            readOnly={sameAsAddress}
          />
          {/* {errors.shippingCountry && (
            <div className="text-red-500 text-xs">{errors.shippingCountry}</div>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label
            htmlFor="shippingState"
            className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            State/Province
          </label>
          <input
            type="text"
            id="shippingState"
            name="shippingState"
            value={sameAsAddress ? formData.state : formData.shippingState}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`block w-full rounded-md border-gray-300 shadow-sm py-1 px-2 ${
              sameAsAddress
                ? "bg-gray-200"
                : errors.shippingState
                ? "border border-red-500"
                : ""
            }`}
            readOnly={sameAsAddress}
          />
          {/* {errors.shippingState && (
            <div className="text-red-500 text-xs">{errors.shippingState}</div>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label
            htmlFor="shippingZipcode"
            className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Zip/Postal Code
          </label>
          <input
            type="number"
            id="shippingZipcode"
            name="shippingZipcode"
            value={sameAsAddress ? formData.zipcode : formData.shippingZipcode}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`block w-full rounded-md border-gray-300 shadow-sm py-1 px-2 ${
              sameAsAddress
                ? "bg-gray-200"
                : errors.shippingZipcode
                ? "border border-red-500"
                : ""
            }`}
            readOnly={sameAsAddress}
          />
          {/* {errors.shippingZipcode && (
            <div className="text-red-500 text-xs">{errors.shippingZipcode}</div>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1 col-span-1">
          <label
            htmlFor="shippingStreetAddress"
            className="block text-gray-700 text-sm 2xl:text-md font-semibold">
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
            className={`block w-full rounded-md border-gray-300 shadow-sm py-1 px-2 ${
              sameAsAddress
                ? ""
                : errors.shippingStreetAddress
                ? "border border-red-500"
                : ""
            }`}
            readOnly={sameAsAddress}
          />
          {/* {errors.shippingStreetAddress && (
            <div className="text-red-500 text-xs">
              {errors.shippingStreetAddress}
            </div>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1 col-span-2">
          <label
            htmlFor="shippingCitie"
            className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            City
          </label>
          <input
            type="text"
            id="shippingCitie"
            name="shippingCitie"
            value={sameAsAddress ? formData.citie : formData.shippingCitie}
            onChange={(e) => !sameAsAddress && handleChange(e)}
            className={`block w-full rounded-md border-gray-300 shadow-sm py-1 px-2 ${
              sameAsAddress
                ? "bg-gray-200"
                : errors.shippingCitie
                ? "border border-red-500"
                : ""
            }`}
            readOnly={sameAsAddress}
          />
          {/* {errors.shippingCitie && (
            <div className="text-red-500 text-xs">{errors.shippingCitie}</div>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1 col-span-2">
          <label
            htmlFor="shippingLandmark"
            className="block text-gray-700 text-sm 2xl:text-md font-semibold">
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
            className={`block w-full rounded-md border-gray-300 shadow-sm py-1 px-2 ${
              sameAsAddress
                ? "bg-gray-200"
                : errors.shippingLandmark
                ? "border border-red-500"
                : ""
            }`}
            readOnly={sameAsAddress}
          />
        </div>
      </form>
    </div>
  );
});

export default Shipping;
