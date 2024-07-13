import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import { MdWorkOutline } from "react-icons/md";
import LocationSelector from "./LocationSelector";
import useOutsideClick from "../../hooks/useOutsideClick";

const WorkingDetails = forwardRef((props, ref) => {
  const [errors, setErrors] = useState({});
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const targetRef = React.useRef(null);
  const { currentStep, navigationDirection } = useSelector(
    (state) => state.stepsSlice
  );
  const location = useSelector((state) => state.location);
  const { submitClicked } = formData.validationErrors;

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Retail",
    "Manufacturing",
    "Hospitality",
    "Real Estate",
    "Transportation",
    "Energy",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const {
      workingCompany,
      workingIndustry,
      workingRole,
      workingCountry,
      workingState,
      workingCitie,
    } = formData;
    const newErrors = {};
    console.log(
      workingCompany,
      workingIndustry,
      workingRole,
      workingCountry,
      workingState,
      workingCitie
    );

    if (!workingCompany) {
      newErrors.workingCompany = "Please fill company name.";
    }

    if (!workingIndustry) {
      newErrors.workingIndustry = "Please select industry.";
    }

    if (!workingRole) {
      newErrors.workingRole = "Please fill your role.";
    }

    if (!workingCountry) {
      newErrors.workingCountry = "Please select country.";
    }

    if (!workingState) {
      newErrors.workingState = "Please select state.";
    }

    if (!workingCitie) {
      newErrors.workingCitie = "Please select city.";
    }
    console.log(newErrors);

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      dispatch(updateFormData({ workingValidationErrors: true }));
    }
      return Object.keys(newErrors).length === 0;
  };

  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  useEffect(() => {
    if (submitClicked) {
      validateForm();
    }
  }, [submitClicked]);

  const handleBlur = (e) => {
    console.log("from handle blur", validateForm());
    dispatch(updateFormData({ workingValidationErrors: validateForm() }));
    validateForm();  
  };

 

  useOutsideClick(targetRef, () => {
      console.log("from outside click", validateForm());
      dispatch(updateFormData({ workingValidationErrors: validateForm() }));
      validateForm();
    })
  

  

  return (
    <div
      className={`${
        currentStep === 7
          ? navigationDirection === "next"
            ? " slide-in-right "
            : "slide-in-left"
          : "hidden"
      } py-5 md:py-6 2xl:py-12 h-full w-full  px-7 flex flex-col   gap-4 xl:gap-6 2xl:gap-10`}>
      <div className="flex gap-4  text-slate-500">
        <MdWorkOutline className="text-2xl text-[#00BDD6]" />
        <h2 className="text-xl font-bold ">Working Details</h2>
      </div>
      <form
        className="w-full h-fit  grid grid-cols-2 gap-2 md:gap-y-1 xl:gap-y-2 2xl:gap-y-3 gap-x-3 md:gap-x-10 2xl:gap-x-12"
        onBlur={handleBlur} ref={targetRef}>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Company Name
          </label>
          <input
            type="text"
            id="workingCompany"
            name="workingCompany"
            value={formData.workingCompany}
            onChange={handleChange}
            className={` block w-full rounded-md border-gray-300  py-1 px-2 ${
              errors.workingCompany && submitClicked && "border border-red-500 "
            }`}
          />
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label
            className="block text-gray-700 text-sm 2xl:text-md font-semibold"
            htmlFor="industry">
            Industry
          </label>
          <select
            id="industry"
            name="workingIndustry"
            value={formData.workingIndustry}
            onChange={handleChange}
            className={`${
              errors.workingIndustry &&
              submitClicked &&
              "border border-red-500 "
            } appearance-none block w-full rounded-md border-gray-300  py-1 px-2 text-gray-700 `}>
            <option value="" disabled>
              Select your industry
            </option>
            {industries.map((industry, index) => (
              <option key={index} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            What is your Role
          </label>
          <input
            type="text"
            id="workingRole"
            name="workingRole"
            value={formData.workingRole}
            onChange={handleChange}
            className={` ${
              errors.workingRole && submitClicked && "border border-red-500"
            } bblock w-full rounded-md border-gray-300  py-1 px-2`}
          />
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Country
          </label>
          <LocationSelector
            type="text"
            id="workingCountry"
            name="workingCountry"
            value={formData.workingCountry}
            onChange={handleChange}
            className={` ${
              errors.workingCountry && submitClicked && "border border-red-500"
            } block w-full rounded-md border-gray-300  py-1 px-2`}
            apiEndpoint={``}
            error={errors.workingCountry}
            handleValidate={validateForm}
          />
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            State
          </label>
          <LocationSelector
            type="text"
            id="workingState"
            name="workingState"
            value={formData.workingState}
            onChange={handleChange}
            className={`${
              errors.workingState && submitClicked && "border border-red-500"
            } block w-full rounded-md border-gray-300  py-1 px-2`}
            apiEndpoint={`/${location.workingCountryIso2}/states`}
            error={errors.workingState}
            handleValidate={validateForm}
          />
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            City
          </label>
          <LocationSelector
            type="text"
            id="workingCitie"
            name="workingCitie"
            value={formData.workingCitie}
            onChange={handleChange}
            className={`${
              errors.workingCitie && submitClicked && "border border-red-500"
            } block w-full rounded-md border-gray-300  py-1 px-2`}
            apiEndpoint={`/${location.workingCountryIso2}/states/${location.workingStateIso2}/cities`}
            error={errors.workingCitie}
            handleValidate={validateForm}
          />
        </div>
      </form>
    </div>
  );
});

export default WorkingDetails;
