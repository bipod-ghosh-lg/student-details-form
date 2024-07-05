import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import titleImg from "../../assets/images/title.png";

const CurrentRole = forwardRef((props, ref) => {
  const formData = useSelector((state) => state.formData); // Access formData from Redux
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const { currentStep, navigationDirection } = useSelector(
    (state) => state.stepsSlice
  );

  const validateForm = () => {
    const { currentRole } = formData;

    if (!currentRole) {
      setErrors({ currentRole: "Current role is required" });
      return false;
    }

    return true;
  };

  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));

    // Clear error message when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  return (
    <div
      className={`${
        currentStep === 5
          ? navigationDirection === "next"
            ? "h-full w-full slide-in-right flex flex-col justify-center items-center gap-10 "
            : "h-full w-full slide-in-left flex flex-col justify-center items-center gap-10 "
          : "hidden"
      } p-5 2xl:py-10 px-7 `}>
      <div className="flex gap-4 justify-center items-center text-slate-500">
        <img src={titleImg} alt="titleImg" className="w-8 h-7" />
        <h2 className="text-2xl font-bold ">Current Role</h2>
      </div>
      <div className="h-fit col-span-2 flex flex-col w-full justify-center items-center gap-4 text-nowrap">
        <label htmlFor="currentRole" className="block text-lg">
          Select your current role
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="currentRole"
          id="currentRole"
          value={formData.currentRole}
          onChange={handleChange}>
          <option value="" disabled>
            Select your current role
          </option>
          <option value="student">Student</option>
          <option value="employer">Employer</option>
        </select>
        {errors.currentRole && (
          <p className="text-red-500 text-xs italic">{errors.currentRole}</p>
        )}
      </div>
    </div>
  );
});

export default CurrentRole;
