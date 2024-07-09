import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import WorkImg from "../../assets/images/business.png";

const WorkingDetails = forwardRef((props, ref) => {
  const formData = useSelector((state) => state.formData); // Access formData from Redux
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const { currentStep, navigationDirection } = useSelector(
    (state) => state.stepsSlice
  );

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Retail",
    "Manufacturing",
    "Hospitality",
    "Real Estate",
    "Transportation",
    "Energy",
  ];

  const validateForm = () => {
    const {
      workingCompany,
      workingIndustry,
      workingRole,
      workingCountry,
      workingState,
      workingCitie,
    } = formData;
    const newErrors = {};

    if (!workingCompany) {
      newErrors.workingCompany = "Please fill company name.";
    }

    if (!workingIndustry) {
      newErrors.workingIndustry = "Please select industry.";
    }

    if (!workingRole) {
      newErrors.workingRole = "Please fill your role.";
    }

    if (!workingCountry) {
      newErrors.workingCountry = "Please select country.";
    }

    if (!workingState) {
      newErrors.workingState = "Please select state.";
    }

    if (!workingCitie) {
      newErrors.workingCitie = "Please select city.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div
      className={`${
        currentStep === 7
          ? navigationDirection === "next"
            ? " slide-in-right "
            : "slide-in-left"
          : "hidden"
      } py-5 md:py-6 2xl:py-12 h-full w-full  px-7 flex flex-col   gap-4 xl:gap-6 2xl:gap-10`}>
      <div className="flex gap-4  text-slate-500">
        <img src={WorkImg} alt="titleImg" className="w-7 h-6" />
        <h2 className="text-xl font-bold ">Working Details</h2>
      </div>
      <div className="w-full h-fit  grid grid-cols-2 gap-2 md:gap-y-1 xl:gap-y-2 2xl:gap-y-3 gap-x-3 md:gap-x-10 2xl:gap-x-12">
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Company Name
          </label>
          <input
            type="text"
            id="workingCompany"
            name="workingCompany"
            value={formData.workingCompany}
            onChange={handleChange}
            className={` block w-full rounded-md border-gray-300  py-1 px-2 ${
              errors.workingCompany && "border border-red-500 "
            }`}
          />
          {/* {errors.workingCompany && (
            <p className="text-red-500 text-xs italic">
              {errors.workingCompany}
            </p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label
            className="block text-gray-700 text-sm 2xl:text-md font-semibold"
            htmlFor="industry">
            Industry
          </label>
          <select
            id="industry"
            name="workingIndustry"
            value={formData.workingIndustry}
            onChange={handleChange}
            className={`${
              errors.workingIndustry && "border border-red-500 "
            } appearance-none block w-full rounded-md border-gray-300  py-1 px-2 text-gray-700 `}>
            <option value="" disabled>
              Select your industry
            </option>
            {industries.map((industry, index) => (
              <option key={index} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {/* {errors.workingIndustry && (
            <p className="text-red-500 text-xs italic">
              {errors.workingIndustry}
            </p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            What is your Role
          </label>
          <input
            type="text"
            id="workingRole"
            name="workingRole"
            value={formData.workingRole}
            onChange={handleChange}
            className={` ${
              errors.workingRole && "border border-red-500"
            } bblock w-full rounded-md border-gray-300  py-1 px-2`}
          />
          {/* {errors.workingRole && (
            <p className="text-red-500 text-xs italic">{errors.workingRole}</p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Country
          </label>
          <input
            type="text"
            id="workingCountry"
            name="workingCountry"
            value={formData.workingCountry}
            onChange={handleChange}
            className={` ${
              errors.workingCountry && "border border-red-500"
            } block w-full rounded-md border-gray-300  py-1 px-2`}
          />
          {/* {errors.workingCountry && (
            <p className="text-red-500 text-xs italic">
              {errors.workingCountry}
            </p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            State
          </label>
          <input
            type="text"
            id="workingState"
            name="workingState"
            value={formData.workingState}
            onChange={handleChange}
            className={`${
              errors.workingState && "border border-red-500"
            } block w-full rounded-md border-gray-300  py-1 px-2`}
          />
          {/* {errors.workingState && (
            <p className="text-red-500 text-xs italic">{errors.workingState}</p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            City
          </label>
          <input
            type="text"
            id="workingCitie"
            name="workingCitie"
            value={formData.workingCitie}
            onChange={handleChange}
            className={`${
              errors.workingCitie && "border border-red-500"
            } block w-full rounded-md border-gray-300  py-1 px-2`}
          />
          {/* {errors.workingCitie && (
            <p className="text-red-500 text-xs italic">{errors.workingCitie}</p>
          )} */}
        </div>
      </div>
    </div>
  );
});

export default WorkingDetails;
