// src/components/PersonalInformation.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentStep, nextStep } from "../../redux/slice/alumniStepSlice";
import { IoPerson } from "react-icons/io5";

const PersonalInformation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: "",
    dob: "",
    gender: "Male", // Default gender
  });
  const [sameAsPhone, setSameAsPhone] = useState(true);

  const { currentStep } = useSelector((state) => state.stepsSlice);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "phone" && sameAsPhone) {
      setFormData({
        ...formData,
        phone: value,
        whatsapp: value,
      });
    }
  };

  const handleCheckboxChange = () => {
    setSameAsPhone(!sameAsPhone);
    if (!sameAsPhone) {
      setFormData({
        ...formData,
        whatsapp: formData.phone,
      });
    }
  };

  return (
    <div
      className={`${
        currentStep === 1 ? "flex flex-col justify-center items-center slide-in-left" : "hidden slide-out-right"
      } p-5 2xl:py-10 px-7 w-full h-full`}>
      <div className="flex gap-2 mb-4 items-center">
        <IoPerson className="text-2xl text-[#00BDD6]" />
        <h2 className="text-xl font-bold">Personal Information</h2>
      </div>

      <form className="w-full h-fit content-center grid grid-cols-2 gap-4 2xl:gap-6 text-sm 2xl:text-lg font-semibold">
        <div className="h-fit">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-1 px-2"
          />
        </div>
        <div className="h-fit">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-1 px-2"
          />
        </div>
        <div className="h-fit col-span-2">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-1 px-2"
          />
        </div>
        <div className="h-fit col-span-2">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-1 px-2"
          />
        </div>
        <div className="h-fit col-span-2 ">
          <label className="block text-gray-700">WhatsApp Number</label>
          <input
            type="tel"
            name="whatsapp"
            value={sameAsPhone ? formData.phone : formData.whatsapp}
            onChange={handleChange}
            disabled={sameAsPhone}
            className="block w-full rounded-md border-gray-300 shadow-sm py-1 px-2"
          />
          <div className="h-fit mt-2 flex items-center">
            <input
              type="checkbox"
              checked={sameAsPhone}
              onChange={handleCheckboxChange}
              className="h-4 w-4 checked:border-white accent-[#00BDD6]"
            />
            <label className="ml-2 text-gray-700">Same as Phone Number</label>
          </div>
        </div>
        <div className="h-fit mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-1 px-2"
          />
        </div>
        <div className="h-fit mb-4">
          <label className=" text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm p-1">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
