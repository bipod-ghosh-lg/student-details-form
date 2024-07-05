import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoPerson } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateFormData } from "../../redux/slice/alumniFormdata";

const PersonalInformation = forwardRef((props, ref) => {
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const { currentStep } = useSelector((state) => state.stepsSlice);
  const formData = useSelector((state) => state.formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));

    if (name === "phone" && sameAsPhone) {
      dispatch(updateFormData({ whatsapp: value }));
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleCheckboxChange = () => {
    setSameAsPhone(!sameAsPhone);
    if (!sameAsPhone) {
      dispatch(updateFormData({ whatsapp: formData.phone }));
    }
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, whatsapp, dob, gender } =
      formData;
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = "Please fill in the First Name.";
      setErrors(newErrors);
      return false
    }
    if (!lastName) {
      newErrors.lastName = "Please fill in the Last Name.";
      setErrors(newErrors);
      return false;
    }
    
     if (!email) {
       newErrors.email = "Please fill in the Email Address.";
       setErrors(newErrors);
       return false;
     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
       newErrors.email = "Please enter a valid email address.";
       setErrors(newErrors);
       return false;
     }
    if (!phone) {
      newErrors.phone = "Please fill in the Phone Number.";
      setErrors(newErrors);
      return false;
    }
    if (!whatsapp) {
      newErrors.whatsapp = "Please fill in the WhatsApp Number.";
      setErrors(newErrors);
      return false;
    }
    if (!dob) {
      newErrors.dob = "Please fill in the Date of Birth.";
      setErrors(newErrors);
      return false;
    }
    if (!gender) {
      newErrors.gender = "Please select a Gender.";
      setErrors(newErrors);
      return false;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  return (
    <div
      className={`${
        currentStep === 1
          ? "flex flex-col justify-center items-center slide-in-left"
          : "hidden slide-out-right"
      } p-5 2xl:py-10 px-7 w-full h-full`}>
      <div className="flex gap-2 mb-4 items-center">
        <IoPerson className="text-2xl text-[#00BDD6]" />
        <h2 className="text-xl font-bold">Personal Information</h2>
      </div>

      <form className="w-full h-fit content-center grid grid-cols-2 gap-4 2xl:gap-6 text-sm 2xl:text-lg font-semibold">
        <div className="h-fit">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-1 px-2"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">{errors.firstName}</p>
          )}
        </div>
        <div className="h-fit">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-1 px-2"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic">{errors.lastName}</p>
          )}
        </div>
        <div className="h-fit col-span-2">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-1 px-2"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div className="h-fit col-span-2">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-1 px-2"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic">{errors.phone}</p>
          )}
        </div>
        <div className="h-fit col-span-2">
          <label className="block text-gray-700">WhatsApp Number</label>
          <input
            type="number"
            name="whatsapp"
            id="whatsapp"
            value={sameAsPhone ? formData.phone : formData.whatsapp}
            onChange={handleChange}
            disabled={sameAsPhone}
            className="block w-full rounded-md border-gray-300 shadow-sm py-1 px-2"
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-xs italic">{errors.whatsapp}</p>
          )}
          <div className="h-fit mt-2 flex items-center">
            <input
              type="checkbox"
              checked={sameAsPhone}
              onChange={handleCheckboxChange}
              className="h-4 w-4 checked:border-white accent-[#00BDD6]"
            />
            <label className="ml-2 text-gray-700">Same as Phone Number</label>
          </div>
        </div>
        <div className="h-fit mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-1 px-2"
          />
          {errors.dob && (
            <p className="text-red-500 text-xs italic">{errors.dob}</p>
          )}
        </div>
        <div className="h-fit mb-4">
          <label className=" text-gray-700">Gender</label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm p-1">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-xs italic">{errors.gender}</p>
          )}
        </div>
      </form>
    </div>
  );
});

export default PersonalInformation;
