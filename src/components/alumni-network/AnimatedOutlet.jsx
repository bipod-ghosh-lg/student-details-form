import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../../redux/slice/alumniStepSlice";
import PersonalInformation from "./PersonalInformation";
import Address from "./Address";
import whatsappImg from "../../assets/images/whatsapp.png";
import { ToastContainer } from "react-toastify";
import Shipping from "./Shipping";
import CompanyDetails from "./CompanyDetails";
import CurrentRole from "./CurrentRole";
import Education from "./Education";
import WorkingDetails from "./WorkingDetails";

const AnimatedOutlet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const addressRef = useRef();
  const personalRef = useRef();
  const shippingRef = useRef();
  const roleRef = useRef();
  const educationRef = useRef();
  const workingRef = useRef();
  const { currentStep } = useSelector((state) => state.stepsSlice);
  const formData = useSelector((state) => state.formData);

  const handleNext = () => {
    if (
      currentStep === 1 &&
      personalRef.current &&
      personalRef.current.validateForm()
    ) {
      dispatch(nextStep());
    }
    if (
      currentStep === 2 &&
      addressRef.current &&
      addressRef.current.validateForm()
    ) {
      dispatch(nextStep());
    }
    if (
      currentStep === 3 &&
      shippingRef.current &&
      shippingRef.current.validateForm()
    ) {
      dispatch(nextStep());
    }
    if (currentStep === 4) {
      dispatch(nextStep());
    }
    if (
      currentStep === 5 &&
      roleRef.current &&
      roleRef.current.validateForm()
    ) {
      dispatch(nextStep());
    }
    if (
      currentStep === 6 &&
      educationRef.current &&
      educationRef.current.validateForm()
    ) {
      if (formData.currentRole === "employer") dispatch(nextStep());
    }
    if (
      currentStep === 7 &&
      workingRef.current &&
      workingRef.current.validateForm()
    ) {
      dispatch(nextStep());
    }
    
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  return (
    <div className="h-full w-full max-w-4xl mx-auto flex flex-col justify-center items-center gap-4 overflow-hidden">
      <div className="relative w-full">
        <ToastContainer
          // className={"absolute w-[70%] md:w-[40%]  top-0 left-0 md:left-[10%]"}
          position="top-right"
          autoClose={1000}
        />
      </div>
      <div className="h-[75%] 2xl:h-[80%] w-[90vw] md:w-[80%] 2xl:w-[45vw] bg-white border rounded-lg shadow-lg flex justify-center items-center overflow-hidden">
        <PersonalInformation ref={personalRef} />
        <Address ref={addressRef} />
        <Shipping ref={shippingRef} />
        <CompanyDetails />
        <CurrentRole ref={roleRef} />
        <Education ref={educationRef} />
        {formData.currentRole === "employer" && <WorkingDetails ref={workingRef}/>}
      </div>
      <div className="w-[90vw] md:w-[80%] flex justify-between items-center 2xl:w-[45vw] text-white">
        <button
          type="button"
          onClick={handlePrev}
          className={`p-2 rounded bg-[#00BDD6] ${
            currentStep <= 1 ? "hidden" : "w-[40%]"
          } col-span-2`}>
          Back
        </button>
        <button
          type="submit"
          onClick={handleNext}
          className={`p-2 rounded ${
            formData.stepLength === currentStep ? "bg-blue-500" : "bg-[#00BDD6]"
          }  ${currentStep <= 1 ? "w-full" : "w-[40%]"} col-span-2`}>
          {formData.stepLength === currentStep ? "Submit" : "Next"}
        </button>
      </div>
      <div className="absolute h-10 w-10 bottom-5 md:bottom-10 right-10 cursor-pointer">
        <img src={whatsappImg} alt="" className="" />
      </div>
    </div>
  );
};

export default AnimatedOutlet;
