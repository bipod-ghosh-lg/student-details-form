import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../../redux/slice/alumniStepSlice";
import PersonalInformation from "./PersonalInformation";
import Address from "./Address";
import whatsappImg from "../../assets/images/whatsapp.png";
import { ToastContainer } from "react-toastify";
import Shipping from "./Shipping";

const AnimatedOutlet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const addressRef = useRef();
  const personalRef = useRef();
  const { currentStep } = useSelector((state) => state.stepsSlice);

  const handleNext = () => {
    console.log(personalRef)
    if(currentStep === 1 && personalRef.current && personalRef.current.validateForm()) {
      dispatch(nextStep());
    }
    if (currentStep === 2 && addressRef.current && addressRef.current.validateForm()) {
      dispatch(nextStep());
    } 
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  return (
    <div className="h-full w-full max-w-4xl mx-auto flex flex-col justify-center items-center gap-4 overflow-hidden">
      <div className="relative w-full">
        <ToastContainer className={"absolute w-[70%] md:w-[40%]  top-0 left-0 md:left-[10%]"} />
      </div>
      <div className="h-[75%] 2xl:h-[80%] w-[90vw] md:w-[80%] 2xl:w-[45vw] bg-white border rounded-lg shadow-lg flex justify-center items-center overflow-hidden">
        <PersonalInformation ref={personalRef} />
        <Address ref={addressRef} />
        <Shipping />
      </div>
      <div className="w-[90vw] md:w-[80%] flex justify-between items-center 2xl:w-[45vw] text-white">
        <button
          type="button"
          onClick={handlePrev}
          className={`p-2 rounded bg-[#00BDD6] ${
            currentStep <= 1 ? "hidden" : "w-[40%]"
          } col-span-2`}>
          cancel
        </button>
        <button
          type="submit"
          onClick={handleNext}
          className={`p-2 rounded bg-[#00BDD6] ${
            currentStep <= 1 ? "w-full" : "w-[40%]"
          } col-span-2`}>
          Next
        </button>
      </div>
      <div className="absolute h-10 w-10 bottom-5 md:bottom-10 right-10 cursor-pointer">
        <img src={whatsappImg} alt="" className="" />
      </div>
    </div>
  );
};

export default AnimatedOutlet;
