import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep, setStep } from "../../redux/slice/alumniStepSlice";
import { setValidationErrors } from "../../redux/slice/alumniFormdata";
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

  
  

  const validateCurrentStep = async () => {
    let isValid = true;
    switch (currentStep) {
      case 1:
        if (personalRef.current) {
          isValid = await personalRef.current.validateForm();
          dispatch(setValidationErrors({ personal: isValid }));
        }
        break;
      case 2:
        if (addressRef.current) {
          isValid = await addressRef.current.validateForm();
          dispatch(setValidationErrors({ address: isValid }));
        }
        break;
      case 3:
        if (shippingRef.current) {
          isValid = await shippingRef.current.validateForm();
          dispatch(setValidationErrors({ shipping: isValid }));
        }
        break;
      case 5:
        if (roleRef.current) {
          isValid = await roleRef.current.validateForm();
          dispatch(setValidationErrors({ role: isValid }));
        }
        break;
      case 6:
        if (educationRef.current) {
          isValid = await educationRef.current.validateForm();
          dispatch(setValidationErrors({ education: isValid }));
        }
        break;
      case 7:
        if (workingRef.current) {
          console.log("workingRef.current", workingRef.current);
          isValid = await workingRef.current.validateForm();
          dispatch(setValidationErrors({ working: isValid }));
        }
        break;
      default:
        break;
    }
    return isValid;
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    // if (isValid) {
      dispatch(nextStep());
    // }
  };

  useEffect(() => {
    if (formData.validationErrors.submitClicked) {
      validateCurrentStep();
    }
  }, [currentStep]);

  const handlePrev = () => {
    dispatch(prevStep());
  };

  useEffect(() => {}, [formData.validationErrors.submitClicked]);

  const handleSubmit = async () => {
    dispatch(setValidationErrors({ submitClicked: true }));
    const validationErrors = formData.validationErrors;

    let isValid = await validateCurrentStep();

    if (formData.currentRole === "employer") {
      if (
        !validationErrors.personal ||
        !validationErrors.address ||
        !validationErrors.shipping ||
        !validationErrors.role ||
        !validationErrors.education ||
        !validationErrors.working
      ) {
        console.log("Please fill all the required fields.");
        
      } else {
        console.log("Form submitted successfully:", formData);
      }
    } else {
      if (
        !validationErrors.personal ||
        !validationErrors.address ||
        !validationErrors.shipping ||
        !validationErrors.role ||
        !validationErrors.education
      ) {
        console.log(validationErrors.education);
        console.log("Please fill all the required fields.");
        
      } else {
        console.log("Form submitted successfully:", formData);
      }
    }
  };

  useEffect(() => {
    if (currentStep === formData.stepLength) {
      handleSubmit();
    }
  }, [formData.validationErrors.submitClicked]);

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
          <button
            type="submit"
            onClick={
              currentStep === formData.stepLength ? handleSubmit : handleNext
            }
            className="p-2 rounded bg-[#00BDD6] w-full col-span-2">
            {currentStep === formData.stepLength ? "Submit" : "Next"}
          </button>
        </div>
        <button
          type="button"
          onClick={handlePrev}
          className={`${currentStep <= 1 ? "hidden" : "w-[40%] flex gap-2"}`}>
          <IoMdArrowRoundBack size={25} />
          Back
        </button>
        <div className="absolute h-10 w-10 bottom-5 md:bottom-10 right-10 cursor-pointer">
          <img src={whatsappImg} alt="WhatsApp" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AnimatedOutlet;
