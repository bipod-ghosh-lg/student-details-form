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
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import startsWith from "lodash.startswith";
import axios  from "axios";

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

 

  var config = {
    method: "get",
    url: `https://api.geoapify.com/v1/geocode/search?text=${formData.addressLine1}&apiKey=7d03ba4449404d4cbe3be9bab121795a`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div
      className={`flex flex-col md:flex-row justify-center  h-auto w-full text-sm transition-all duration-500 ${
        activeStep === 0 ? "flex" : "hidden"
      } ${animationClass}`}>
      <div
        className={`${
          formData.gender === "Female" ? "bg-pink-300" : "bg-orange-300"
        } rounded-lg md:rounded-r-none w-full md:w-[60%] h-auto flex flex-col gap-2 py-10 px-4 items-center text-gray-700 overflow-auto`}>
        <div className="h-28 w-28 bg-orange-500 rounded-full p-4">
          {formData.gender === "Female" ? (
            <img
              src={femaleImg}
              alt="Female"
              className="h-full w-full object-contain"
            />
          ) : (
            <img
              src={maleImg}
              alt="Male"
              className="h-full w-full object-contain"
            />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-nowrap text-xs w-full">
          <div className="bg-white col-span-2 lg:col-span-1 rounded-lg p-2 min-w-[120px] overflow-x-auto ">
            <p>
              <span>Name:</span> {formData.firstName} {formData.lastName}
            </p>
          </div>
          <div className="bg-white col-span-2 lg:col-span-1 min-w-[120px] rounded-lg p-2 flex items-center gap-2">
            <MdPhoneIphone size={20} />
            <p>{formData.phoneNo}</p>
          </div>
          <div className="bg-white rounded-lg col-span-2  p-2 min-w-[50%] flex items-center gap-2">
            <MdEmail size={20} />
            <p>{formData.email}</p>
          </div>
          <div className="bg-white rounded-lg p-2 min-w-[50%] flex items-center gap-2">
            <LiaBirthdayCakeSolid size={20} />
            <p>{formData.dateOfBirth}</p>
          </div>
          <div className="bg-white rounded-lg p-2 min-w-[50%] flex items-center gap-2">
            {formData.gender === "Other" ? (
              <BsGenderNeuter size={20} />
            ) : formData.gender === "Female" ? (
              <BsGenderFemale size={20} />
            ) : (
              <BsGenderMale size={20} />
            )}
            <p>{formData.gender}</p>
          </div>
          <div className="col-span-1 md:col-span-2 bg-white rounded-lg p-2 min-w-[50%] flex items-center gap-2">
            <CiLocationOn size={20} />
            <p>{formData.addressLine1}</p>
          </div>
          <div className="col-span-1 md:col-span-2 bg-white rounded-lg p-2 min-w-[50%] flex items-center gap-2">
            <CiLocationOn size={20} />
            <p>{formData.addressLine2}</p>
          </div>
          <div className="bg-white rounded-lg p-2 min-w-[130px] xl:min-w-[50%] flex items-center gap-2">
            <FaCity size={20} />
            <p>{formData.city}</p>
          </div>
          <div className="bg-white rounded-lg p-2 min-w-[50%] flex items-center gap-2">
            <TbBuildingEstate size={20} />
            <p>{formData.state}</p>
          </div>
          <div className="bg-white rounded-lg p-2 min-w-[50%] flex items-center gap-2">
            <FaFlag size={20} />
            <p>{formData.country}</p>
          </div>
          <div className="bg-white rounded-lg p-2  flex items-center gap-2">
            <TbMapPinCode size={20} />
            <p>{formData.pincode}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl w-full flex flex-col bg-white items-center mx-auto p-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-3">Student Details Form</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              1. Personal Information
            </h3>
            <div className="md:grid md:grid-cols-2 gap-2">
              <div className="mb-4 md:mb-0">
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
              <div className="mb-4 md:mb-0">
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
              <div className="flex flex-col gap-1 mb-4 md:mb-0">
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
                  containerClass=""
                  
                />
              </div>
              <div className="mb-4 md:mb-0">
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
              <div className="mb-4 md:mb-0">
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
              <div className="mb-4 md:mb-0">
                <label className="block text-sm font-medium">Gender</label>
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
              <div className="col-span-2 mb-4 md:mb-0">
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
              <div className="col-span-2 mb-4 md:mb-0">
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
              <div className="mb-4 md:mb-0">
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
              <div className="mb-4 md:mb-0">
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
              <div className="mb-4 md:mb-0">
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
              <div className="mb-4 md:mb-0">
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
          <div className="flex justify-end w-full  ">
            <button
              type="submit"
              className="px-6 py-2 bg-lite-blue text-white font-medium rounded-md shadow-sm">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentDetailsForm;
