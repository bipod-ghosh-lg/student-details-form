import React, { useState } from "react";
import femaleImg from "../assets/images/employee.png";
import maleImg from "../assets/images/man.png";
import { MdPhoneIphone } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaCity } from "react-icons/fa";
import { TbBuildingEstate } from "react-icons/tb";
import { FaFlag } from "react-icons/fa";
import { TbMapPinCode } from "react-icons/tb";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { BsGenderNeuter } from "react-icons/bs";

// import { MdLocationOn } from "react-icons/md";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import startsWith from "lodash.startswith";
const StudentDetailsForm = ({
  handleChange,
  handleSubmit,
  formData,
  activeStep,
  handleNext,
  animationClass,
}) => {
  const handleNextClick = (e) => {
    e.preventDefault();
    handleNext();
  };
  console.log(activeStep)

  return (
    <div
      className={`flex fade-in-out-2  flex-col md:flex-row  justify-center overflow-hidden h-full w-full  text-sm transition-all duration-500 ${
        activeStep === 0 ? "flex w-full" : "hidden w-0 h-0"
      } ${animationClass}
      }`}>
      <div className="bg-yellow-400 rounded-lg md:rounded-r-none w-full md:w-[60%] h-auto flex flex-col gap-2 py-10 px-1 items-center text-gray-700">
        <div className="h-40 w-40 bg-orange-500 rounded-full p-4 overflow-hidden">
          {formData.gender === "Female" ? (
            <img src={femaleImg} alt="" className="" />
          ) : (
            <img src={maleImg} alt="" className="" />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-nowrap text-xs ">
          <div className="bg-white rounded-lg p-2 min-w-[120px] overflow-x-auto">
            <p className="">
              <span className="">Name:</span> {formData.firstName}{" "}
              {formData.lastName}
            </p>
          </div>

          <div className="bg-white col-span-1 min-w-[120px] rounded-lg p-2  justify-start flex items-center gap-2 ">
            <MdPhoneIphone size={20} className="" />
            <p className="">{formData.phoneNo}</p>
          </div>

          <div className="bg-white rounded-lg col-span-2 p-2 min-w-[50%] justify-start flex items-center gap-2">
            <MdEmail size={20} className="" />
            <p className="">{formData.email}</p>
          </div>

          <div className="bg-white rounded-lg p-2 min-w-[50%] justify-start flex items-center gap-2">
            <LiaBirthdayCakeSolid size={20} className="" />
            <p className="">{formData.dateOfBirth}</p>
          </div>

          <div className="bg-white rounded-lg p-2 min-w-[50%] justify-start flex items-center gap-2">
            {formData.gender === "Other" ? (
              <BsGenderNeuter size={20} className="" />
            ) : formData.gender === "Female" ? (
              <BsGenderFemale size={20} className="" />
            ) : (
              <BsGenderMale size={20} className="" />
            )}
            <p className="">{formData.gender}</p>
          </div>

          <div className="col-span-1 md:col-span-2 bg-white rounded-lg p-2 min-w-[50%] justify-start flex items-center gap-2">
            <CiLocationOn size={20} className="" />
            <p className="">{formData.addressLine1}</p>
          </div>

          <div className="col-span-1 md:col-span-2 bg-white rounded-lg p-2 min-w-[50%] justify-start flex items-center gap-2">
            <CiLocationOn size={20} className="" />
            <p className="">{formData.addressLine2}</p>
          </div>

          <div className="bg-white rounded-lg p-2 min-w-[50%] justify-start flex items-center gap-2">
            <FaCity size={20} className="" />
            <p className="">{formData.city}</p>
          </div>

          <div className="bg-white rounded-lg p-2 min-w-[50%] justify-start flex items-center gap-2">
            <TbBuildingEstate size={20} className="" />
            <p className="">{formData.state}</p>
          </div>

          <div className="bg-white rounded-lg p-2 min-w-[50%] justify-start flex items-center gap-2">
            <FaFlag size={20} className="" />
            <p className="">{formData.country}</p>
          </div>

          <div className="bg-white rounded-lg p-2 min-w-[50%] justify-start flex items-center gap-2">
            <TbMapPinCode size={20} className="" />
            <p className="">{formData.pincode}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl w-full flex flex-col bg-white items-center mx-auto p-6 ">
        <h2 className="text-2xl font-bold mb-6">Student Details Form</h2>
        <form onSubmit={handleSubmit}>
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              1. Personal Information
            </h3>
            <div className="md:grid  md:grid-cols-2 gap-4">
              <div className="">
                <label className="block text-sm font-medium">First Name</label>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  required
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-medium">Phone No</label>
                <PhoneInput
                  country={"in"}
                  value={formData.phoneNo}
                  isValid={(inputNumber, country, countries) => {
                    return countries.some((country) => {
                      return (
                        startsWith(inputNumber, country.dialCode) ||
                        startsWith(country.dialCode, inputNumber)
                      );
                    });
                  }}
                  onChange={(phone) => handleChange({ phone })}
                  inputClass="max-w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Date of Birth
                </label>
                <input
                  required
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">gender</label>
                <select
                  required
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium">
                  Address Line 1
                </label>
                <input
                  required
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium">
                  Address Line 2
                </label>
                <input
                  required
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                  className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  required
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">State</label>
                <input
                  required
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Country</label>
                <input
                  required
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Pincode</label>
                <input
                  required
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
          </section>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-lite-blue text-white font-medium rounded-md shadow-sm text-right">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentDetailsForm;
