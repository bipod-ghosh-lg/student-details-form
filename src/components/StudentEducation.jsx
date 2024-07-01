import React, { useEffect, useState } from "react";
import workinFemaleImg from "../assets/images/workingGirl.png";
import workingMaleImg from "../assets/images/workingMan.png";
import graduatedGirl from "../assets/images/graduatedGirl.png";
import graduatedBoy from "../assets/images/graduatedBoy.png";
import { FaUserGraduate } from "react-icons/fa6";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdAccountTree } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";
import { GrOrganization } from "react-icons/gr";
import { SiCodesignal } from "react-icons/si";
import { GrUserExpert } from "react-icons/gr";
import { FaIndustry } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

import { PiBagFill } from "react-icons/pi";

const StudentEducation = ({
  handleChange,
  handleSubmit,
  formData,
  handleBack,
  activeStep,
  animationClass,
}) => {
  const [profeson, setProfeson] = useState("student");
  console.log(activeStep)

  const handleProfeson = (e) => {
    setProfeson(e.target.value);
    handleChange(e);
  };

  return (
    <div
      className={`flex fade-in-out-2 flex-col md:flex-row justify-center h-full w-full   text-sm transition-all duration-500 ${
        activeStep === 1 ? "flex" : "hidden"
      } ${animationClass}`}>
      <div
        className={`${
          formData.profesion === "student" ? "bg-cyan-300" : "bg-blue-400"
        } rounded-lg md:rounded-r-none w-full md:w-[60%] h-full flex flex-col gap-4 py-10 px-1 items-center text-gray-700`}>
        <div className="h-32 w-32 bg-orange-500 rounded-full p-4 overflow-hidden">
          {formData.gender === "Female" ? (
            formData.profesion === "student" ? (
              <img
                src={graduatedGirl}
                alt=""
                className=" h-full w-full object-contain"
              />
            ) : (
              <img
                src={workinFemaleImg}
                alt=""
                className="h-full w-full object-contain"
              />
            )
          ) : formData.profesion === "student" ? (
            <img src={graduatedBoy} alt="" className="" />
          ) : (
            <img src={workingMaleImg} alt="" className="" />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-nowrap text-xs w-full px-2 ">
          {formData.profesion === "student" ? (
            <>
              <div className="bg-white rounded-lg p-3 min-w-[120px] overflow-x-auto col-span-2 shadow-lg">
                <p className="">
                  I am currently <span className="">{formData.profesion}</span>
                </p>
              </div>

              <div className="bg-white rounded-lg col-span-2 p-2 min-w-[50%] justify-start flex items-center gap-2 overflow-x-auto shadow-lg">
                <FaBuildingColumns size={20} className="" />{" "}
                <p className="">{formData.instituteName}</p>
              </div>

              <div className="bg-white col-span-2 rounded-lg p-2 min-w-[120px] md:min-w-[150px] justify-start flex items-center gap-2shadow-lg ">
                <FaFlag size={20} className="" />
                <p className="">{formData.educationCountry}</p>
              </div>

              <div className="bg-white rounded-lg col-span-2  p-2 min-w-[200px]  w-full justify-start flex items-center gap-2 shadow-lg">
                <FaCity size={20} className="" />
                <p className="">{formData.educationCity}</p>
              </div>

              <div className="bg-white col-span-2 rounded-lg p-2   md:min-w-[120px] justify-start flex items-center gap-2 shadow-lg">
                <MdAccountTree size={20} className="" />{" "}
                <p className="">{formData.course}</p>
              </div>

              <div className="bg-white rounded-lg p-2 col-span-2 md:col-span-1 min-w-[120px] justify-start flex items-center gap-2 shadow-lg">
                <FaCalendar size={20} className="" />{" "}
                <p className="">{formData.passingYear}</p>
              </div>
              <div className="bg-white rounded-lg p-2 min-w-[50%] col-span-2 md:col-span-1 justify-start flex items-center gap-2  shadow-lg">
                <GiSpellBook size={20} className="" />{" "}
                <p className="">{formData.specialization}</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white rounded-lg p-2 min-w-[120px] overflow-x-auto col-span-2 shadow-lg">
                <p className="">
                  I am currently <span className="">{formData.profesion}</span>
                </p>
              </div>

              <div className="bg-white rounded-lg p-2 min-w-[120px] justify-start flex items-center gap-2 shadow-lg">
                <GrOrganization size={20} className="" />
                <p className="">{formData.organization}</p>
              </div>

              <div className="bg-white rounded-lg  p-2 min-w-[120px] justify-start flex items-center gap-2 shadow-lg">
                <SiCodesignal size={20} className="" />
                <p className="">{formData.role}</p>
              </div>

              <div className="bg-white rounded-lg p-2 min-w-[50%] justify-start flex items-center gap-2 shadow-lg">
                <GrUserExpert size={20} className="" />
                <p className="">{formData.experience} year</p>
              </div>

              <div className=" bg-white rounded-lg  p-2 min-w-[50%] justify-start flex items-center gap-2 shadow-lg">
                <FaIndustry size={20} className="" />
                <p className="">{formData.workIndustry}</p>
              </div>

              <div className="col-span-2 bg-white rounded-lg p-2 min-w-[50%] justify-start flex items-center gap-2 shadow-lg">
                <CiLocationOn size={20} className="" />
                <p className="">{formData.jobLocation}</p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="max-w-4xl h-auto  w-full p-6 bg-white pb-16 md:pb-0 ">
        <section className="mb-6 flex flex-col  gap-4">
          <h3 className="text-2xl text-center mb-4 font-bold">
            What is your latest update
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
            <div className="flex items-center w-full gap-2 justify-between text-nowrap ">
              <label
                htmlFor="profesion"
                className="block text-lg font-medium md:font-semibold">
                Currently i am a
              </label>
              <select
                name="profesion"
                className="p-2 rounded-lg border border-gray-300"
                value={formData.profesion}
                onChange={handleProfeson}>
                <option value="student" className="p-2">
                  Student
                </option>
                <option value="working">Working Profesonal</option>
              </select>
            </div>
            {profeson === "student" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium ">
                    Institute Name
                  </label>
                  <input
                    required
                    type="text"
                    name="instituteName"
                    value={formData.instituteName}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Country</label>
                  <input
                    required
                    type="text"
                    name="educationCountry"
                    value={formData.educationCountry}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">City</label>
                  <input
                    required
                    type="text"
                    name="educationCity"
                    value={formData.educationCity}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Course</label>
                  <input
                    required
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Passing Year
                  </label>
                  <input
                    required
                    type="date"
                    name="passingYear"
                    value={formData.passingYear}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Specialization
                  </label>
                  <input
                    required
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              </div>
            )}
            {profeson === "working" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    Organization
                  </label>
                  <input
                    required
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Role</label>
                  <input
                    required
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Experience in year
                  </label>
                  <input
                    required
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Industry</label>
                  <input
                    required
                    type="text"
                    name="workIndustry"
                    value={formData.workIndustry}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Location</label>
                  <input
                    required
                    type="text"
                    name="jobLocation"
                    value={formData.jobLocation}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              </div>
            )}
            <div className="flex w-full md:w-[59%] xl:w-[56%] justify-between  gap-4 md:absolute right-5 bottom-5 md:bottom-5">
              <button
                type="button"
                className="px-6 py-2 bg-lite-blue text-white font-medium rounded-md shadow-sm text-right"
                onClick={handleBack}>
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-lite-blue text-white font-medium rounded-md shadow-sm text-right">
                Next
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default StudentEducation;
