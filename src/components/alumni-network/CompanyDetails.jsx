import React from "react";
import { useDispatch, useSelector } from "react-redux";
import companyImg from "../../assets/images/building.png";
import { updateFormData } from "../../redux/slice/alumniFormdata";

const CompanyDetails = () => {
  const { currentStep, navigationDirection } = useSelector(
    (state) => state.stepsSlice
  );
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };
  return (
    <div
      className={`${
        currentStep === 4
          ? navigationDirection === "next"
            ? "h-full w-full slide-in-right flex flex-col justify-center items-center gap-10 "
            : "h-full w-full slide-in-left flex flex-col justify-center items-center gap-10 "
          : "hidden"
      } p-5 2xl:py-10 px-7 `}>
      <div className="flex gap-4 justify-center items-center text-slate-500">
        <img src={companyImg} alt="companyImg" className="w-8 h-8" />
        <h2 className="text-2xl font-bold ">Company Details(if any)</h2>
      </div>
      <div className="w-full h-fit content-center grid grid-cols-2 gap-4 2xl:gap-6 text-sm 2xl:text-lg font-semibold">
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">GST Number</label>
          <input
            type="text"
            id="companyGstNumber"
            name="companyGstNumber"
            value={formData.companyGstNumber}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
        <div className="h-fit col-span-2 flex flex-col gap-2">
          <label className="block text-gray-700">Company Address</label>
          <input
            type="text"
            id="companyAddress"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">Country</label>
          <input
            type="email"
            id="companyCountry"
            name="companyCountry"
            value={formData.companyCountry}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">State</label>
          <input
            type="email"
            id="companyState"
            name="companyState"
            value={formData.companyState}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">Citie</label>
          <input
            type="text"
            id="companyCitie"
            name="companyCitie"
            value={formData.companyCitie}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">Zipcode</label>
          <input
            type="text"
            id="companyZipcode"
            name="companyZipcode"
            value={formData.companyZipcode}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
