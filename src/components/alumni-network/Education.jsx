import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import educationImg from "../../assets/images/scholarship.png";

const Education = forwardRef((props, ref) => {
  const formData = useSelector((state) => state.formData); // Access formData from Redux
  const dispatch = useDispatch();

  const { currentStep, navigationDirection } = useSelector(
    (state) => state.stepsSlice
  );

  const [courses, setCourses] = useState([]);

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

    if (!institution) {
      toast.warn("Please fill your institution name.");
      return false;
    }
    if (!degree) {
      toast.warn("Please fill your degree");
      return false;
    }

    if (!fieldOfStudy) {  
      toast.warn("Please fill your field.");
      return false;
    }

    if (!course) {
      toast.warn("Please fill your course.");
      return false;
    }

    if (!graduationYear) {
      toast.warn("Please fill your graduation year.");
      return false;
    }

    if (!educationCountry) {  
      toast.warn("Please fill your country.");
      return false;
    }

    if (!educationState) {
      toast.warn("Please fill your state.");
      return false;
    }

    if (!educationCitie) {
      toast.warn("Please fill your citie.");
      return false;
    }

    toast.success("");
    return true;
  };

  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  return (
    <div
      className={`${
        currentStep === 6
          ? navigationDirection === "next"
            ? "h-full w-full slide-in-right flex flex-col justify-center items-center gap-10 "
            : "h-full w-full slide-in-left flex flex-col justify-center items-center gap-10 "
          : "hidden"
      } p-5 2xl:py-10 px-7 `}>
      <div className="flex gap-4 justify-center items-center text-slate-500">
        <img src={educationImg} alt="educationImg" className="w-8 h-8" />
        <h1 className="text-2xl font-bold">Education details</h1>
      </div>
      <div className="w-full h-fit content-center grid grid-cols-2 gap-4 2xl:gap-6 text-sm 2xl:text-lg font-semibold">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="institution">
            Institution Name
          </label>
          <input
            id="institution"
            name="institution"
            type="text"
            value={formData.institution}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="degree">
            Degree
          </label>
          <select
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
            <option value="">Select Degree</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fieldOfStudy">
            Field of Study
          </label>
          <select
            id="fieldOfStudy"
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
            <option value="">Select Field of Study</option>
            {fieldsAndCourses.map((fieldObj) => (
              <option key={fieldObj.field} value={fieldObj.field}>
                {fieldObj.field}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="course">
            Course
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="graduationYear">
            Graduation Year
          </label>
          <input
            id="graduationYear"
            name="graduationYear"
            type="number"
            value={formData.graduationYear}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            id="educationCountry"
            name="educationCountry"
            value={formData.educationCountry}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">State</label>
          <input
            type="text"
            id="educationState"
            name="educationState"
            value={formData.educationState}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
        <div className="h-fit flex flex-col gap-2">
          <label className="block text-gray-700">Citie</label>
          <input
            type="text"
            id="educationCitie"
            name="educationCitie"
            value={formData.educationCitie}
            onChange={handleChange}
            className=" block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
          />
        </div>
      </div>
    </div>
  );
});

export default Education;
