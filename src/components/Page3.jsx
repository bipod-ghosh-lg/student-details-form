import React from "react";
import workinFemaleImg from "../assets/images/workingGirl.png";
import workingMaleImg from "../assets/images/workingMan.png";
import graduatedGirl from "../assets/images/graduatedGirl.png";
import graduatedBoy from "../assets/images/graduatedBoy.png";
import { FaLink } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Page3 = ({
  handleChange,
  formData,
  handleSubmit,
  handleBack,
  activeStep,
  animationClass,
}) => {
  return (
    <div
      className={`flex-col md:flex-row justify-center h-full w-full  overflow-y-auto pb-5 md:pb-0 ${
        activeStep === 2 ? "flex" : "hidden"
      } text-sm ${animationClass} overflow-hidden`}>
      <div className="bg-green-200 rounded-lg md:rounded-r-none w-full md:w-[60%] h-full flex flex-col gap-2 py-10 px-1 items-center text-gray-700">
        <div className="h-40 w-40 bg-orange-500 rounded-full p-4 overflow-hidden">
          {formData.gender === "Female" ? (
            formData.profesion === "student" ? (
              <img src={graduatedGirl} alt="Graduated Girl" className="" />
            ) : (
              <img src={workinFemaleImg} alt="Working Female" className="" />
            )
          ) : formData.profesion === "student" ? (
            <img src={graduatedBoy} alt="Graduated Boy" className="" />
          ) : (
            <img src={workingMaleImg} alt="Working Male" className="" />
          )}
        </div>
        <div className="grid grid-cols-1 gap-2 text-nowrap text-xs w-[90%]">
          <div className="bg-white rounded-lg p-2 justify-start flex items-center gap-2 overflow-x-auto ">
            <FaLink size={20} />
            <h1 className="">{formData.socialLink}</h1>
          </div>
          <div className="bg-white rounded-lg p-2 justify-start flex items-center gap-5 overflow-x-auto ">
            {formData.communications === "linkedin" ? (
              <AiFillLinkedin size={20} />
            ) : formData.communications === "phone" ? (
              <FaPhone size={20} />
            ) : formData.communications === "whatsapp" ? (
              <BsWhatsapp size={20} />
            ) : (
              <MdOutlineMailOutline size={20} />
            )}
            <h1 className="">{formData.communications}</h1>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-white text-sm font-normal h-full">
        <h1 className="text-2xl mb-4 text-center font-bold">
          Additional Information
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="text-nowrap flex flex-col">
              <label className="">Social Media Links</label>
              <input
                required
                type="url"
                className="mt-1 block w-full border outline-none p-2 border-gray-300 rounded-md shadow-sm"
                name="socialLink"
                value={formData.socialLink}
                onChange={handleChange}
              />
            </div>
            <div className="w-full justify-between flex flex-col text-nowrap ">
              <label className="">Preferred mode of communication</label>
              <select
                required
                name="communications"
                className="mt-1 block w-full border text-center outline-none p-2 border-gray-300 rounded-md shadow-sm"
                value={formData.communications || "email"}
                onChange={handleChange}>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="linkedin">LinkedIn</option>
              </select>
            </div>
            <div className="">
              <label className="">
                What are your expectations from this alumni forum
              </label>
              <textarea
                required
                name="expectations"
                placeholder="e.g., mentoring, job opportunities, collaborations, etc."
                className="mt-1 block w-full border text-center outline-none p-2 border-gray-300 rounded-md shadow-sm"
                value={formData.expectations}
                onChange={handleChange}
              />
            </div>
            <div className="grid-cols-2">
              <label className="">
                How do you plan to contribute to the growth of the network
              </label>
              <textarea
                required
                name="contribute"
                value={formData.contribute}
                onChange={handleChange}
                placeholder="e.g., achieve engagement, blog, event organizations, etc."
                className="mt-1 block w-full border text-center outline-none p-2 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="flex items-center gap-4 ">
              <input
                required
                type="checkbox"
                name="checkbox"
                checked={formData.checkbox}
                onChange={handleChange}
              />
              <label>I agree to all terms & conditions review your form</label>
            </div>
          </div>
          <div className="flex justify-between gap-4 absolute right-5 bottom-2 md:bottom-5">
            <button
              type="button"
              className="px-6 py-2 bg-lite-blue text-white font-medium rounded-md shadow-sm text-right"
              onClick={handleBack}>
              Back
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-lite-blue text-white font-medium rounded-md shadow-sm text-right">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page3;
