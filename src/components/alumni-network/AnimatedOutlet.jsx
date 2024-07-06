import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../../redux/slice/alumniStepSlice";
// import { setValidationErrors } from "../../redux/slice/formDataSlice";
import PersonalInformation from "./PersonalInformation";
import Address from "./Address";
import whatsappImg from "../../assets/images/whatsapp.png";
import { ToastContainer, toast } from "react-toastify";
import Shipping from "./Shipping";
import CompanyDetails from "./CompanyDetails";
import CurrentRole from "./CurrentRole";
import Education from "./Education";
import WorkingDetails from "./WorkingDetails";
import { IoMdArrowRoundBack } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { setValidationErrors } from "../../redux/slice/alumniFormdata";

const AnimatedOutlet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const addressRef = useRef();
  const personalRef = useRef();
  const shippingRef = useRef();
  const roleRef = useRef();
  const educationRef = useRef();
  const workingRef = useRef();
  const { currentStep } = useSelector((state) => state.stepsSlice);
  const formData = useSelector((state) => state.formData);

  const handleNext = () => {
    let isValid = true;
    console.log(currentStep)

    if (currentStep === 1 && personalRef.current) {
      isValid = personalRef.current.validateForm();
      dispatch(setValidationErrors({ personal: isValid }));
    }
    if (currentStep === 2 && addressRef.current) {
      isValid = addressRef.current.validateForm();
      dispatch(setValidationErrors({ address: isValid }));
    }
    if (currentStep === 3 && shippingRef.current) {
      isValid = shippingRef.current.validateForm();
      dispatch(setValidationErrors({ shipping: isValid }));
    }
    if (currentStep === 5 && roleRef.current) {
      isValid = roleRef.current.validateForm();
      dispatch(setValidationErrors({ role: isValid }));
    }
    if (currentStep === 6 && educationRef.current) {
      isValid = educationRef.current.validateForm();
      
      dispatch(setValidationErrors({ education: isValid }));
      
      // if (formData.currentRole === "student") {
      //   isValid = true;
      // }
    }
    if (currentStep === 7 && workingRef.current) {
      isValid = workingRef.current.validateForm();
      console.log(isValid, "working");
      dispatch(setValidationErrors({ working: isValid }));
    }

    dispatch(nextStep());
  };

  const handlePrev = () => {
    // dispatch(setValidationErrors({ submitClicked: false }));
    dispatch(prevStep());
  };

  const handleSubmit = () => {
    const validationErrors = formData.validationErrors;
    dispatch(setValidationErrors({ submitClicked: true }));

    // Handle form submission
    console.log("Form submitted successfully:", formData);
  };

  return (
    <div className="h-full w-full max-w-5xl mx-auto flex flex-col items-center overflow-hidden">
      <div className="px-10 py-5 md:py-4 xl:py-10 2xl:py-16 2xl:p-20 w-full flex items-center justify-center">
        <h1 className="text-md md:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-center">
          Get Your Alumni Network Today
        </h1>
      </div>

      <div className="h-fit flex flex-col gap-4 2xl:gap-8 min-h-[20vh] 2xl:max-h-[60vh] w-[90vw] md:w-[60vw] 2xl:w-[50vw] mx-auto">
        <div className="h-fit w-full bg-white border rounded-lg flex justify-center items-center overflow-y-auto overflow-x-hidden">
          <PersonalInformation ref={personalRef} />
          <Address ref={addressRef} />
          <Shipping ref={shippingRef} />
          <CompanyDetails />
          <CurrentRole ref={roleRef} />
          <Education ref={educationRef} />
          {formData.currentRole === "employer" && (
            <WorkingDetails ref={workingRef} />
          )}
        </div>
        <div className="w-full flex-col flex justify-between items-center text-white">
          {currentStep === formData.stepLength ? (
            <button
              type="submit"
              onClick={handleSubmit}
              className="p-2 rounded bg-[#00BDD6] w-full col-span-2">
              Submit
            </button>
          ) : (
            <button
              type="submit"
              onClick={
                currentStep === formData.stepLength ? handleSubmit : handleNext
              }
              className="p-2 rounded bg-[#00BDD6] w-full col-span-2">
              Next
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={handlePrev}
          className={`${currentStep <= 1 ? "hidden" : "w-[40%] flex gap-2"}`}>
          <IoMdArrowRoundBack size={25} />
          Back
        </button>
        <div className="absolute h-10 w-10 bottom-5 md:bottom-10 right-10 cursor-pointer">
          <img src={whatsappImg} alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AnimatedOutlet;
