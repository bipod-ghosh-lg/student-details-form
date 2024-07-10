import React from "react";
import logo from "../../assets/images/logo.png";
import { ImExit } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { prevStep } from "../../redux/slice/alumniStepSlice";
import { setValidationErrors, submitForm } from "../../redux/slice/alumniFormdata";

const Header = () => {
  const { currentStep } = useSelector((state) => state.stepsSlice);
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  const baseSteps = [
    "Personal Information",
    "Billing",
    "Shipping",
    "Company",
    "Current Role",
    "Education",
    "Employer Details",
  ];
  const handlePrev = () => {
    dispatch(prevStep());
  };
  const handlesubmit = async () => {
    // dispatch(submitForm());
    dispatch(setValidationErrors({ submitClicked: true }));
    const validationErrors = formData.validationErrors;

    // let isValid = await validateCurrentStep();

    if (formData.currentRole === "employer") {
      if (
        !formData.personalValidationErrors ||
        !formData.addressValidationErrors ||
        !formData.shippingValidationErrors ||
        !formData.currentRoleValidationErrors ||
        !formData.educationValidationErrors ||
        !formData.workingValidationErrors

      ) {
        console.log("Please fill all the required fields.");
      } else {
        console.log("Form submitted successfully:", formData);
      }
    }

    if (formData.currentRole === "student") {

      console.log("come from useeffect", formData.currentRole);

      if (
        !formData.personalValidationErrors ||
        !formData.addressValidationErrors ||
        !formData.shippingValidationErrors ||
        !formData.currentRoleValidationErrors ||
        !formData.educationValidationErrors
      ) {
        console.log(validationErrors.education);
        console.log("Please fill all the required fields.");
      } else {
        console.log("Form submitted successfully:", formData);
      }
    }
  };
  return (
    <div className="w-full h-full shadow-md  flex justify-between items-center py-4 px-8 relative z-10">
      <div className="flex w-fit  h-full gap-6 md:gap-8 2xl:gap-12 justify-center items-center ">
        <div className="flex justify-center items-center gap-2 ">
          <div className="h-10 2xl:h-12 w-12 2xl:w-20 ">
            <img src={logo} alt="" className="h-full w-full object-contain" />
          </div>
          <p
            className={`hidden md:block  h-0 md:h-fit w-0 md:w-fit text-2xl font-normal text-gray-600 text-nowrap`}>
            <span className="text-[#00BDD6]">ASWINI </span>BAJAJ
          </p>
        </div>

        <button
          type="button"
          onClick={handlePrev}
          className={`hidden  ${
            currentStep <= 1
              ? "hidden"
              : " md:h-full md:w-full md:flex justify-center items-center gap-2"
          } `}>
          <IoIosArrowBack size={15} />
          Back to {baseSteps[currentStep - 2]} step
        </button>
      </div>

      <div className=" flex gap-4 text-sm md:text-base">
        {currentStep === formData.stepLength && (
          <button
            className=" bg-[#00BDD6] px-2 py-1 text-white rounded-md hover:bg-cyan-600 transition duration-700"
            onClick={handlesubmit}>
            Save
          </button>
        )}
        <button className=" bg-[#00BDD6] px-2 py-1 text-white rounded-md hover:bg-cyan-600 transition duration-700">
          Save Draft
        </button>
        <button className=" md:hidden p-1 border border-black rounded-md hover:bg-black hover:text-white flex items-center gap-2 ">
          Log Out
          <ImExit />
        </button>
      </div>
    </div>
  );
};

export default Header;
