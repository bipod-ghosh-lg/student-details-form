import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStep } from "../../redux/slice/alumniStepSlice";
import { IoExitOutline } from "react-icons/io5";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import { TbProgressCheck } from "react-icons/tb";
import { FaRegDotCircle } from "react-icons/fa";

const SideNavbar = () => {
  const stepRefs = useRef([]);
  const { currentStep } = useSelector((state) => state.stepsSlice);

  const formData = useSelector((state) => state.formData);
  const {
    personalValidationErrors,
    addressValidationErrors,
    shippingValidationErrors,
    currentRoleValidationErrors,
    educationValidationErrors,
    workingValidationErrors,
  } = formData;

  const dispatch = useDispatch();

  const baseSteps = [
    "Personal Information",
    "Billing",
    "Shipping",
    "Company",
    "Current Role",
    "Education",
  ];
  const company = true;
  const formValidationArray = [
    personalValidationErrors,
    addressValidationErrors,

    shippingValidationErrors,
    company,
    currentRoleValidationErrors,
    educationValidationErrors,
    workingValidationErrors,
  ];

  // Conditionally add the "Employer Details" step
  const steps =
    formData.currentRole === "employer"
      ? [...baseSteps, "Employer Details"]
      : baseSteps;

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

  const handledSetStep = (step) => {
    dispatch(setStep(step));
  };

  return (
    <div className="p-3 2xl:py-6 2xl:px-8 flex flex-col justify-between bg-[#FAFAFC] shadow-md  w-full h-full md:min-h-full text-nowrap">
      <div className="w-full flex md:flex-col overflow-scroll custom-scrollbar">
        {steps.map((step, index) => (
          <div
            className="flex flex-col md:flex-row"
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}>
            <div
              className={`w-full h-1 md:w-1 md:h-10 transition-all duration-500 ${
                index + 1 === currentStep
                  ? "bg-[#00BDD5] rounded-lg"
                  : "bg-inherit"
              }`}></div>

            <div
              className={`p-2 flex items-center gap-2 cursor-pointer ${
                index + 1 === currentStep ? "font-bold text-[#00BDD6]" : ""
              }`}
              onClick={() => handledSetStep(index + 1)}>
              {index + 1 < currentStep ? (
                <TbProgressCheck size={25} />
              ) : index + 1 === currentStep ? (
                <FaRegDotCircle size={20} />
              ) : (
                <input
                  type="radio"
                  readOnly
                  className="h-4 w-4 accent-[#00BDD5] border-4 !border-white"
                />
              )}
              {/* {console.log(formValidationArray[currentStep])} */}

              <p
                className={`text-sm ${
                  !formValidationArray[index] &&
                  formData.validationErrors.submitClicked
                    ? "text-red-500"
                    : ""
                }`}>
                {step}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:flex flex-col justify-center items-center gap-4 p-3">
        <div className="flex items-center justify-center gap-2 bg-red-400 text-white py-2 w-full px-5 rounded-md cursor-pointer">
          <IoExitOutline />
          <p className="">Logout</p>
        </div>
        <button className="text-[#00BDD5]">? Help & Feedback</button>
      </div>
    </div>
  );
};

export default SideNavbar;
