import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoPerson } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import { BsPerson } from "react-icons/bs";
import { PiGenderFemaleBold, PiGenderMaleBold } from "react-icons/pi";
import { PiGenderTransgenderBold } from "react-icons/pi";
import { FcCalendar } from "react-icons/fc";

const PersonalInformation = forwardRef((props, ref) => {
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const { currentStep } = useSelector((state) => state.stepsSlice);
  const formData = useSelector((state) => state.formData);
  const { submitClicked } = formData.validationErrors;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));

    if (name === "phone" && sameAsPhone) {
      dispatch(updateFormData({ whatsapp: value }));
      setErrors((prevErrors) => ({ ...prevErrors, ["whatsapp"]: "" }));
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleCheckboxChange = () => {
    setSameAsPhone(!sameAsPhone);
    if (!sameAsPhone) {
      dispatch(updateFormData({ whatsapp: formData.phone }));
    }
  };

  const validateForm = () => {
    
    const {
      firstName,
      lastName,
      email,
      phone,
      whatsapp,
      dob,
      gender,
      personalValidationErrors,
    } = formData;
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = "Please fill in the First Name.";
    }
    if (!lastName) {
      newErrors.lastName = "Please fill in the Last Name.";
    }

    if (!email) {
      newErrors.email = "Please fill in the Email Address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    if (!phone) {
      newErrors.phone = "Please fill in the Phone Number.";
    }
    if (!whatsapp) {
      newErrors.whatsapp = "Please fill in the WhatsApp Number.";
    }
    // if (sameAsPhone || phone) {
    //   setErrors((prevErrors) => ({ ...prevErrors, ["whatsapp"]: "" }));
    // }
    if (!dob) {
      newErrors.dob = "Please fill in the Date of Birth.";
    }
    if (!gender) {
      newErrors.gender = "Please select a Gender.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  useEffect(() => {
    console.log(formData.validationErrors);
  }, []);

  const handleBlur = (e) => {
    
      console.log("from handle blur", validateForm());
      dispatch(updateFormData({ personalValidationErrors: validateForm() }));
      validateForm();
    
      
  };

  return (
    <div
      className={`${
        currentStep === 1
          ? "flex flex-col  justify-center slide-in-left gap-4 xl:gap-6 2xl:gap-10"
          : "hidden slide-out-right"
      } py-5 md:py-6 2xl:py-16  px-7 w-full h-full  `}>
      <div className="flex gap-2  items-center text-slate-500">
        <BsPerson className="text-2xl text-[#00BDD6]" />
        <h2 className="text-xl font-bold">Personal Information</h2>
      </div>

      <form
        className="w-full h-fit  grid grid-cols-2 gap-2 md:gap-y-1 xl:gap-y-2 2xl:gap-y-3 gap-x-3 md:gap-x-10 2xl:gap-x-12 "
        onBlur={handleBlur}>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`${
              errors.firstName && submitClicked && "border border-red-500"
            } block w-full rounded-md border-gray-300 shadow-sm py-1 px-2`}
          />
          {/* {errors.firstName && (
            <p className="text-red-500 text-xs italic">{errors.firstName}</p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={` ${
              errors.lastName && submitClicked && "border border-red-500"
            } block w-full rounded-md border-gray-300 shadow-sm py-1 px-2`}
          />
          {/* {errors.lastName && (
            <p className="text-red-500 text-xs italic">{errors.lastName}</p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1 col-span-2">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${
              errors.email && submitClicked && "border border-red-500"
            }  block w-full rounded-md border-gray-300 shadow-sm py-1 px-2`}
          />
          {/* {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1 col-span-2">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Phone Number
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${
              errors.phone && submitClicked && "border border-red-500 "
            } block w-full rounded-md border-gray-300 shadow-sm py-1 px-2`}
          />
          {/* {errors.phone && (
            <p className="text-red-500 text-xs italic">{errors.phone}</p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1 col-span-2">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            WhatsApp Number
          </label>
          <input
            type="number"
            name="whatsapp"
            id="whatsapp"
            value={sameAsPhone ? formData.phone : formData.whatsapp}
            onChange={handleChange}
            disabled={sameAsPhone}
            className={`${
              errors.whatsapp && submitClicked && "border border-red-500 "
            }block w-full rounded-md  shadow-sm py-1 px-2`}
          />
          {/* {errors.whatsapp && (
            <p className="text-red-500 text-xs italic">{errors.whatsapp}</p>
          )} */}
          <div className="h-fit  flex items-center">
            <input
              type="checkbox"
              checked={sameAsPhone}
              onChange={handleCheckboxChange}
              className="h-4 w-4 checked:border-white accent-[#00BDD6]"
            />
            <label className="ml-2 text-gray-700 ">Same as Phone Number</label>
          </div>
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className={`${
              submitClicked && errors.dob
                ? "border border-red-500"
                : "border-gray-300"
            } block w-full rounded-md  shadow-sm py-1 px-2 `}
          />
          {/* {errors.dob && (
            <p className="text-red-500 text-xs italic">{errors.dob}</p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className=" text-gray-700 text-sm 2xl:text-md font-semibold">
            Gender
          </label>
          <div
            className={`w-full flex gap-4 items-center bg-[#F3F4F6] px-2 py-1 rounded-md ${
              errors.gender && submitClicked && "border border-red-500  "
            }`}>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              draggable
              onChange={handleChange}
              className={` block w-full px-1 ${
                formData.gender !== "" && "appearance-none"
              }`}>
              <option value="" disabled className="">
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {formData.gender === "" ? null : formData.gender === "Male" ? (
              <PiGenderMaleBold className="" />
            ) : formData.gender === "Female" ? (
              <PiGenderFemaleBold className="" />
            ) : (
              <PiGenderTransgenderBold className="" />
            )}
          </div>

          {/* {errors.gender && (
            <p className="text-red-500 text-xs italic">{errors.gender}</p>
          )} */}
        </div>
      </form>
    </div>
  );
});

export default PersonalInformation;
