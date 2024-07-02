// src/components/Address.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { prevStep } from "../../redux/slice/alumniStepSlice";

const Address = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleNext = () => {
    navigate("/shipping"); // Next step
    };
    const { currentStep } = useSelector((state) => state.stepsSlice);

    const handleBack = () => {
      dispatch(prevStep());
    navigate("/");
  };

  return (
    <div
      className={`${
        currentStep === 2 ? "block slide-in-right" : "hidden"
      } p-4 bg-white rounded-lg shadow-md max-w-lg mx-auto`}>
      <h2 className="text-2xl font-bold mb-4">Address</h2>
      {/* Form fields for Address */}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={handleBack}
          className="bg-gray-500 text-white p-2 rounded">
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-[#00BDD6] text-white p-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Address;
