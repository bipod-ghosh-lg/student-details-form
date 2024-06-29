import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import StudentEducation from "./StudentEducation";
import StudentDetailsForm from "./StudentDetailsForm";
import Page3 from "./Page3";

const LevelBar = () => {
  const [activeStep, setActiveStep] = useState(0);

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
    }
    else if (e?.phone) {
      setFormData({ ...formData, phoneNo: e.phone });
    } else if(e?.target?.name) {
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
    setActiveStep((prevActiveStep) => {
      console.log(prevActiveStep + 1);
      return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      console.log(prevActiveStep - 1);
      return prevActiveStep - 1
    });
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
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center ">
      <div className="flex justify-center items-center mt-4">
        {steps.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex items-center w-full text-white ${
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
                  } h-0.5  mx-2 w-16 md:w-24 lg:w-40 xl:w-72 transition-all duration-500`}
                />
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="mt-8 w-full ">
        <div className="flex justify-center p-4  ">
          <div className="flex  w-[80vw] xl:w-[60vw] h-[75vh] bg-white absolute overflow-hidden   shadow-lg rounded-2xl ">
            {steps[0].component}
            {steps[1].component}
            {steps[2].component}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelBar;
