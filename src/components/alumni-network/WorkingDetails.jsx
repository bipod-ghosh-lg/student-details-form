import React, { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateFormData } from '../../redux/slice/alumniFormdata';
import WorkImg from '../../assets/images/business.png';

const WorkingDetails =forwardRef((props, ref) => {
    const formData = useSelector((state) => state.formData); // Access formData from Redux
    const dispatch = useDispatch();

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
      const { workingCompany, workingIndustry, workingRole, workingCountry, workingState, workingCitie } = formData;

      if (!workingCompany) {
        toast.warn("Please fill company name.");
        return false;
      }

      if (!workingIndustry) {
        toast.warn("Please select industry.");
        return false;
      }

      if (!workingRole) {
        toast.warn("Please fill your role.");
        return false;
      }

      if (!workingCountry) {
        toast.warn("Please select country.");
        return false;
      }

      if (!workingState) {
        toast.warn("Please select state.");
        return false;
      }

      if (!workingCitie) {
        toast.warn("Please select citie.");
        return false;
      }

      toast.success("Form submitted successfully.");
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
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-70 " htmlFor="industry">
            Industry
          </label>
          <select
            id="industry"
            name="workingIndustry"
            value={formData.workingIndustry}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="" disabled>
              Select your industry
            </option>
            {industries.map((industry, index) => (
              <option key={index} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">What is your Role</label>
          <input
            type="text"
            id="workingRole"
            name="workingRole"
            value={formData.workingRole}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
        {/* <div className="h-fit col-span-2 flex flex-col gap-2">
          <label className="block text-gray-700">Company Address</label>
          <input
            type="text"
            id="companyAddress"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div> */}
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            id="workingCountry"
            name="workingCountry"
            value={formData.workingCountry}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">State</label>
          <input
            type="text"
            id="workingState"
            name="workingState"
            value={formData.workingState}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">Citie</label>
          <input
            type="text"
            id="workingCitie"
            name="workingCitie"
            value={formData.workingCitie}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
      </div>
    </div>
  );
})

export default WorkingDetails