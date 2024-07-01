import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import StudentEducation from "./StudentEducation";
import StudentDetailsForm from "./StudentDetailsForm";
import Page3 from "./Page3";

const LevelBar = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNo: "",
    email: "",
    gender: "male",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    profesion: "student",
    educationCountry: "",
    educationCity: "",
    instituteName: "",
    course: "",
    passingYear: "",
    specialization: "",
    experience: "",
    workIndustry: "",
    jobLocation: "",
    organization: "",
    role: "",
    socialLink: "",
    expectations: "",
    communications: "email",
    contribute: "",
    checkbox: false,
  });

  const handleChange = (e) => {
    // console.log(e);
    if (e.target?.checked) {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else if (e?.phone) {
      setFormData({ ...formData, phoneNo: e.phone });
    } else if (e?.target?.name) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    if (activeStep < 2) {
      handleNext();
    } else {
      console.log(formData);
    }
  };

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const handleNext = (e) => {
    setAnimationClass("slide-out-left");
    setTimeout(() => {
      setActiveStep((prevActiveStep) => {
        console.log(prevActiveStep + 1);
        return prevActiveStep + 1;
      });
      setAnimationClass("slide-in-right");
    }, 300); // Match the animation duration
  };

  const handleBack = () => {
    setAnimationClass("slide-out-right");
    setTimeout(() => {
      setActiveStep((prevActiveStep) => {
        console.log(prevActiveStep - 1);
        return prevActiveStep - 1;
      });
      setAnimationClass("slide-in-left");
    }, 300); // Match the animation duration
  };

  const handleReset = (e) => {
    handleSubmit(e);
    setActiveStep(0);
  };

  const steps = [
    {
      label: "1",
      component: (
        <StudentDetailsForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          activeStep={activeStep}
          handleNext={handleNext}
          animationClass={animationClass}
        />
      ),
    },
    {
      label: "2",
      component: (
        <StudentEducation
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          handleBack={handleBack}
          activeStep={activeStep}
          animationClass={animationClass}
        />
      ),
    },
    {
      label: "3",
      component: (
        <Page3
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          handleBack={handleBack}
          activeStep={activeStep}
          animationClass={animationClass}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row  items-center">
      <div className="flex md:flex-col justify-center items-center ">
        {steps.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex mt-5 md:mt-0 md:pl-20 md:flex-col items-center w-full text-white ${
                index > activeStep ? "text-blue-500" : ""
              }`}>
              <div
                className={`${
                  index <= activeStep
                    ? " bg-lite-blue transition-all duration-500"
                    : "bg-gray-500 transition-all duration-500"
                } w-10 rounded-full text-center h-10 flex justify-center items-center`}>
                <h1 className="">{item.label}</h1>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`${
                    index < activeStep ? "bg-orange-500 " : "bg-gray-300"
                  } h-1 md:h-52 w-20 md:w-1 transition-all duration-500`}
                />
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="py-5 flex justify-center w-full ">
        {/* <div className="flex justify-center p-4  "> */}
        <div
          className={`flex  w-[90vw] md:w-[80vw] xl:w-[80vw] h-full md:h-[80vh] bg-white overflow-x-hidden overflow-y-auto  steel-bg  shadow-lg rounded-2xl 1`}>
          {steps[0].component}
          {steps[1].component}
          {steps[2].component}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default LevelBar;
