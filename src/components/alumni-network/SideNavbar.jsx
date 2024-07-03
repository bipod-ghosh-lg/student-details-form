// src/components/SideNavbar.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStep } from "../../redux/slice/alumniStepSlice";
import { IoExitOutline } from "react-icons/io5";
const SideNavbar = () => {
  const { currentStep, completedSteps } = useSelector((state) => {
    // console.log(state);
    return state.stepsSlice;
  });
  const dispatch = useDispatch();
  console.log(currentStep);

  const steps = [
    "Personal Information",
    "Address",
    "Shipping",
    "Company",
    "Current Role",
  ];

  return (
    <div className="p-3 2xl:p-6 flex flex-col justify-between bg-gray-100 border shadow-lg w-full h-full min-h-[90vh] text-nowrap ">
      <div className="w-full">
        {steps.map((step, index) => (
          <div className="flex" key={index}>
            <div
              className={`w-1 h-10 transition-all duration-500 ${
                index + 1 <= currentStep ? "bg-[#00BDD6]" : " bg-inherit"
              } `}></div>

            <div
              className={`p-2 flex items-center gap-2 cursor-pointer ${
                index + 1 <= currentStep ? "font-bold text-[#00BDD6]" : ""
              }`}
              onClick={() => dispatch(setStep(index + 1))}>
              <input
                type="radio"
                checked={index + 1 <= currentStep}
                readOnly
                className="h-4 w-4 accent-[#00BDD6] border-4 !border-white"
              />

              {step}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex items-center justify-center gap-2 bg-red-400 text-white py-2 w-full px-5 rounded-md cursor-pointer">
          <IoExitOutline />
          <p className="">Logout</p>
        </div>
        <button className="text-[#00BDD6]">? Help & Feedback</button>
      </div>
    </div>
  );
};

export default SideNavbar;
