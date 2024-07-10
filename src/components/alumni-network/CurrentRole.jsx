import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import titleImg from "../../assets/images/title.png";
import { RiUserStarLine } from "react-icons/ri";

const CurrentRole = forwardRef((props, ref) => {
  const formData = useSelector((state) => state.formData); // Access formData from Redux
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const { currentStep, navigationDirection } = useSelector(
    (state) => state.stepsSlice
  );
  const {submitClicked} = formData.validationErrors

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

  const handleBlur = (e) => {
    
    console.log("from handle blur", validateForm());
    dispatch(updateFormData({ currentRoleValidationErrors: validateForm() }));
    validateForm();
  };

  return (
    <div
      className={`${
        currentStep === 5
          ? navigationDirection === "next"
            ? " slide-in-right "
            : "slide-in-left"
          : "hidden"
      } py-5 md:py-6 2xl:py-12 h-full w-full  px-7 flex flex-col   gap-4 xl:gap-6 2xl:gap-10`}>
      <div className="flex gap-4   text-slate-500">
        {/* <img src={titleImg} alt="titleImg" className="w-8 h-7" /> */}
        <RiUserStarLine className="text-2xl text-[#00BDD6]" />
        <h2 className="text-xl font-bold  ">Current Role</h2>
      </div>
      <div
        className="h-fit col-span-2 flex flex-col w-full justify-center  gap-1  xl:gap-y-2 2xl:gap-2 text-nowrap"
        onBlur={handleBlur}>
        <label
          htmlFor="currentRole"
          className="block text-gray-700 text-sm 2xl:text-md font-semibold">
          I am Currently a
        </label>
        <select
          className={`${
            errors.currentRole && submitClicked && "border border-red-500 "
          }shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          name="currentRole"
          id="currentRole"
          value={formData.currentRole}
          onChange={handleChange}>
          <option value="" disabled>
            --Select your role--
          </option>
          <option value="student" name="currentRole">
            Student
          </option>
          <option value="employer" name="currentRole">
            Employer
          </option>
        </select>
        {/* {errors.currentRole && (
          <p className="text-red-500 text-xs italic">{errors.currentRole}</p>
        )} */}
      </div>
    </div>
  );
});

export default CurrentRole;
