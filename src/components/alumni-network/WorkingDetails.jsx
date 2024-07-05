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
            ? "h-full w-full slide-in-right flex flex-col justify-center items-center gap-10 "
            : "h-full w-full slide-in-left flex flex-col justify-center items-center gap-10 "
          : "hidden"
      } p-5 2xl:py-10 px-7 `}>
      <div className="flex gap-4 justify-center items-center text-slate-500">
        <img src={WorkImg} alt="titleImg" className="w-8 h-7" />
        <h2 className="text-2xl font-bold ">Working Details</h2>
      </div>
      <div className="w-full h-fit content-center grid grid-cols-2 gap-4 2xl:gap-6 text-sm 2xl:text-lg font-semibold">
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            id="workingCompany"
            name="workingCompany"
            value={formData.workingCompany}
            onChange={handleChange}
            className={`" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3" ${errors.workingCompany && "border border-red-500" }`}
          />
          {/* {errors.workingCompany && (
            <p className="text-red-500 text-xs italic">
              {errors.workingCompany}
            </p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700" htmlFor="industry">
            Industry
          </label>
          <select
            id="industry"
            name="workingIndustry"
            value={formData.workingIndustry}
            onChange={handleChange}
            className={`${errors.workingIndustry && "border border-red-500 "}shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}>
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
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">What is your Role</label>
          <input
            type="text"
            id="workingRole"
            name="workingRole"
            value={formData.workingRole}
            onChange={handleChange}
            className={` ${errors.workingRole && "border border-red-500"} block w-full rounded-md border-gray-300 shadow-sm py-2 px-3`}
          />
          {/* {errors.workingRole && (
            <p className="text-red-500 text-xs italic">{errors.workingRole}</p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            id="workingCountry"
            name="workingCountry"
            value={formData.workingCountry}
            onChange={handleChange}
            className={` ${errors.workingCountry && "border border-red-500"} block w-full rounded-md border-gray-300 shadow-sm py-2 px-3`}
          />
          {/* {errors.workingCountry && (
            <p className="text-red-500 text-xs italic">
              {errors.workingCountry}
            </p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">State</label>
          <input
            type="text"
            id="workingState"
            name="workingState"
            value={formData.workingState}
            onChange={handleChange}
            className={`${errors.workingState && "border border-red-500" } block w-full rounded-md border-gray-300 shadow-sm py-2 px-3`}
          />
          {/* {errors.workingState && (
            <p className="text-red-500 text-xs italic">{errors.workingState}</p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            id="workingCitie"
            name="workingCitie"
            value={formData.workingCitie}
            onChange={handleChange}
            className={`${errors.workingCitie && "border border-red-500" } block w-full rounded-md border-gray-300 shadow-sm py-2 px-3`}
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
