import React from "react";
import { useDispatch, useSelector } from "react-redux";
import companyImg from "../../assets/images/building.png";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import { MdOutlineWorkspacePremium } from "react-icons/md";

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
            ? " slide-in-right "
            : "slide-in-left"
          : "hidden"
      } py-5 md:py-6 2xl:py-12 h-full w-full  px-7 flex flex-col   gap-4 xl:gap-6 2xl:gap-10`}>
      <div className="flex gap-4  items-center text-slate-500">
        {/* <img src={companyImg} alt="companyImg" className="w-7 h-7" /> */}
        <MdOutlineWorkspacePremium className="text-2xl text-[#00BDD6]"/>
        <h2 className=" text-xl font-bold ">Company Details(if any)</h2>
      </div>
      <div className="w-full h-fit  grid grid-cols-2 gap-2 md:gap-y-1 xl:gap-y-2 2xl:gap-y-3 gap-x-3 md:gap-x-10 2xl:gap-x-12 ">
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300  py-1 px-2 "
          />
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            GST Number
          </label>
          <input
            type="text"
            id="companyGstNumber"
            name="companyGstNumber"
            value={formData.companyGstNumber}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300  py-1 px-2 "
          />
        </div>
        <div className="h-fit col-span-2 flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Company Address
          </label>
          <input
            type="text"
            id="companyAddress"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300  py-1 px-2 "
          />
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Country
          </label>
          <input
            type="email"
            id="companyCountry"
            name="companyCountry"
            value={formData.companyCountry}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300  py-1 px-2 "
          />
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            State
          </label>
          <input
            type="email"
            id="companyState"
            name="companyState"
            value={formData.companyState}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300  py-1 px-2 "
          />
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Citie
          </label>
          <input
            type="text"
            id="companyCitie"
            name="companyCitie"
            value={formData.companyCitie}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300  py-1 px-2 "
          />
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Zipcode
          </label>
          <input
            type="text"
            id="companyZipcode"
            name="companyZipcode"
            value={formData.companyZipcode}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300  py-1 px-2 "
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
