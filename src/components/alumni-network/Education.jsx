import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import educationImg from "../../assets/images/scholarship.png";
import { PiStudentBold } from "react-icons/pi";

const Education = forwardRef((props, ref) => {
  const formData = useSelector((state) => state.formData); // Access formData from Redux
  const dispatch = useDispatch();

  const { currentStep, navigationDirection } = useSelector(
    (state) => state.stepsSlice
  );

  const { submitClicked } = formData.validationErrors;

  const [courses, setCourses] = useState([]);
  const [errors, setErrors] = useState({});

  const fieldsAndCourses = [
    {
      field: "Engineering",
      courses: ["Computer Science", "Mechanical", "Electrical"],
    },
    { field: "Business", courses: ["Finance", "Marketing", "Management"] },
    { field: "Arts", courses: ["History", "Literature", "Philosophy"] },
  ];

  useEffect(() => {
    const selectedField = formData.fieldOfStudy;
    if (selectedField) {
      const foundField = fieldsAndCourses.find(
        (fieldObj) => fieldObj.field === selectedField
      );
      setCourses(foundField ? foundField.courses : []);
    }
  }, [formData.fieldOfStudy]);

  const validateForm = () => {
    const {
      institution,
      degree,
      fieldOfStudy,
      course,
      graduationYear,
      educationCountry,
      educationState,
      educationCitie,
    } = formData;

    const newErrors = {};

    if (!institution)
      newErrors.institution = "Please fill your institution name.";
    if (!degree) {
      newErrors.degree = "Please fill your degree.";
      
    }
    if (!fieldOfStudy) {
      newErrors.fieldOfStudy = "Please fill your field.";
      
    }
    if (!course) {
      newErrors.course = "Please fill your course.";
      
    }
    if (!graduationYear){
      newErrors.graduationYear = "Please fill your graduation year.";
      
    }
    if (!educationCountry) {
      newErrors.educationCountry = "Please fill your country.";
      
    }
      
    if (!educationState) {
      newErrors.educationState = "Please fill your state.";
      
    }
    if (!educationCitie) {
      newErrors.educationCitie = "Please fill your city.";
      
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    validateForm()
  };

  useEffect(() => {
    validateForm();
  }, [submitClicked]);

  const handleBlur = (e) => {
    
    console.log("from handle blur", validateForm());
    dispatch(updateFormData({ educationValidationErrors: validateForm() }));
    validateForm();
  };

  return (
    <div
      className={`${
        currentStep === 6
          ? navigationDirection === "next"
            ? " slide-in-right "
            : "slide-in-left"
          : "hidden"
      } py-5 md:py-6 2xl:py-12 h-full w-full  px-7 flex flex-col   gap-4 xl:gap-6 2xl:gap-10`}>
      <div className="flex gap-4   text-slate-500">
        {/* <img src={educationImg} alt="educationImg" className="w-8 h-8" /> */}
        <PiStudentBold className="text-2xl text-[#00BDD6]" />
        <h1 className="text-xl font-bold">Education details</h1>
      </div>
      <div
        className="w-full h-fit  grid grid-cols-2 gap-2 md:gap-y-1 xl:gap-y-2 2xl:gap-y-3 gap-x-3 md:gap-x-10 2xl:gap-x-12"
        onBlur={handleBlur}>
        <div className="h-fit flex flex-col gap-1">
          <label
            className="block text-gray-700 text-sm 2xl:text-md font-semibold"
            htmlFor="institution">
            Institution Name
          </label>
          <input
            id="institution"
            name="institution"
            type="text"
            value={formData.institution}
            onChange={handleChange}
            className={`${
              errors.institution && submitClicked && "border border-red-500 "
            } block w-full rounded-md border-gray-300  py-1 px-2 `}
            required
          />
          {/* {errors.institution && (
            <p className="text-red-500 text-xs italic">{errors.institution}</p>
          )} */}
        </div>

        <div className="h-fit flex flex-col gap-1">
          <label
            className="block text-gray-700 text-sm 2xl:text-md font-semibold"
            htmlFor="degree">
            Degree
          </label>
          <select
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className={`${
              errors.degree && submitClicked && "border border-red-500 "
            } block w-full rounded-md border-gray-300  py-1 px-2 `}
            required>
            <option value="">Select Degree</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
          {/* {errors.degree && (
            <p className="text-red-500 text-xs italic">{errors.degree}</p>
          )} */}
        </div>

        <div className="h-fit flex flex-col gap-1">
          <label
            className="block text-gray-700 text-sm 2xl:text-md font-semibold"
            htmlFor="fieldOfStudy">
            Field of Study
          </label>
          <select
            id="fieldOfStudy"
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleChange}
            className={`${
              errors.fieldOfStudy && submitClicked && "border border-red-500"
            } block w-full rounded-md border-gray-300  py-1 px-2 leading-tight focus:outline-none focus:shadow-outline`}
            required>
            <option value="">Select Field of Study</option>
            {fieldsAndCourses.map((fieldObj) => (
              <option key={fieldObj.field} value={fieldObj.field}>
                {fieldObj.field}
              </option>
            ))}
          </select>
          {/* {errors.fieldOfStudy && (
            <p className="text-red-500 text-xs italic">{errors.fieldOfStudy}</p>
          )} */}
        </div>

        <div className="h-fit flex flex-col gap-1">
          <label
            className="block text-gray-700 text-sm 2xl:text-md font-semibold"
            htmlFor="course">
            Course
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`${
              errors.course && submitClicked && "border border-red-500"
            } block w-full rounded-md border-gray-300  py-1 px-2 leading-tight focus:outline-none focus:shadow-outline`}
            required>
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          {/* {errors.course && (
            <p className="text-red-500 text-xs italic">{errors.course}</p>
          )} */}
        </div>

        <div className="h-fit flex flex-col gap-1">
          <label
            className="block text-gray-700 text-sm 2xl:text-md font-semibold"
            htmlFor="graduationYear">
            Graduation Year
          </label>
          <input
            id="graduationYear"
            name="graduationYear"
            type="number"
            value={formData.graduationYear}
            onChange={handleChange}
            className={`${
              errors.graduationYear && submitClicked && "border border-red-500 "
            }  block w-full rounded-md border-gray-300  py-1 px-2 text-gray-700 `}
            required
          />
          {/* {errors.graduationYear && (
            <p className="text-red-500 text-xs italic">
              {errors.graduationYear}
            </p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Country
          </label>
          <input
            type="text"
            id="educationCountry"
            name="educationCountry"
            value={formData.educationCountry}
            onChange={handleChange}
            className={` ${
              errors.educationCountry &&
              submitClicked &&
              "border border-red-500"
            } block w-full rounded-md border-gray-300  py-1 px-2`}
          />
          {/* {errors.educationCountry && (
            <p className="text-red-500 text-xs italic">
              {errors.educationCountry}
            </p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            State
          </label>
          {/* {console.log(formData.educationState)} */}
          <input
            type="text"
            id="educationState"
            name="educationState"
            value={formData.educationState}
            onChange={handleChange}
            className={` ${
              errors.educationState && submitClicked && "border border-red-500 "
            }block w-full rounded-md border-gray-300  py-1 px-2`}
          />
          {/* {errors.educationState && (
            <p className="text-red-500 text-xs italic">
              {errors.educationState}
            </p>
          )} */}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            City
          </label>
          <input
            type="text"
            id="educationCitie"
            name="educationCitie"
            value={formData.educationCitie}
            onChange={handleChange}
            className={` ${
              errors.educationCitie && submitClicked && "border border-red-500"
            } block w-full rounded-md border-gray-300  py-1 px-2`}
          />
          {/* {errors.educationCitie && (
            <p className="text-red-500 text-xs italic">
              {errors.educationCitie}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
});

export default Education;
