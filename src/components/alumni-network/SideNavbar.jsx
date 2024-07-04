import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStep } from "../../redux/slice/alumniStepSlice";
import { IoExitOutline } from "react-icons/io5";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import { TbProgressCheck } from "react-icons/tb";

const SideNavbar = () => {
  const { currentStep, completedSteps } = useSelector(
    (state) => state.stepsSlice
  );
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  const baseSteps = [
    "Personal Information",
    "Address",
    "Shipping",
    "Company",
    "Current Role",
    "Education",
  ];

  // Conditionally add the "Employer Details" step
  const steps =
    formData.currentRole === "employer"
      ? [...baseSteps, "Employer Details"]
      : baseSteps;

  const stepRefs = useRef([]);

  useEffect(() => {
    dispatch(updateFormData({ stepLength: steps.length }));
  }, [steps.length]);

  useEffect(() => {
    if (stepRefs.current[currentStep - 1]) {
      stepRefs.current[currentStep - 1].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [currentStep]);

  return (
    <div className="p-3 2xl:p-6 flex flex-col justify-between bg-gray-100 border shadow-lg md:w-full h-full md:min-h-[90vh] text-nowrap">
      <div className="w-full flex md:flex-col overflow-scroll custom-scrollbar">
        {steps.map((step, index) => (
          <div
            className="flex flex-col md:flex-row"
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}>
            <div
              className={`w-full h-1 md:w-1 md:h-10 transition-all duration-500 ${
                index + 1 === currentStep
                  ? "bg-[#00BDD6] rounded-lg"
                  : "bg-inherit"
              }`}></div>

            <div
              className={`p-2 flex items-center gap-2 cursor-pointer ${
                index + 1 === currentStep ? "font-bold text-[#00BDD6]" : ""
              }`}
              onClick={() => dispatch(setStep(index + 1))}>
              {index + 1 < currentStep ? (
                <TbProgressCheck size={20} />
              ) : (
                <input
                  type="radio"
                  readOnly
                  checked={index + 1 === currentStep}
                  className="h-4 w-4 accent-[#00BDD6] border-4 !border-white"
                />
              )}

              {step}
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:flex flex-col justify-center items-center gap-4">
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
