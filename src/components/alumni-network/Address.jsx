import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { prevStep } from "../../redux/slice/alumniStepSlice";
import { FaRegAddressCard } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import { instance } from "../../redux/api";
import { updateFormData } from "../../redux/slice/alumniFormdata";
// import "react-toastify/dist/ReactToastify.css";

const Address = forwardRef((props, ref) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.formData);

  const handleNext = () => {
    navigate("/shipping"); // Next step
  };

  const { currentStep, navigationDirection } = useSelector(
    (state) => state.stepsSlice
  );

  const handleBack = () => {
    dispatch(prevStep());
    navigate("/");
  };

  const validateForm = () => {
    const { country, state, zip, street, city } = formData;

    if (!country) {
      toast.warn("Please fill country fields.");
      return false;
    }

    if (!state) {
      toast.warn("Please fill state fields.");
      return false;
    }

    if (!zip) {
      toast.warn("Please fill zip fields.");
      return false;
    }

    if (!street) {
      toast.warn("Please fill street fields.");
      return false;
    }

    if (!city) {
      toast.warn("Please fill city fields.");
      return false;
    }
    toast.success("Level 2 completed");
    return true;
  };

  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));

    if (name === "country") {
      if (value) {
        const filtered = countries.filter((country) =>
          country.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCountries(filtered);
      } else {
        setFilteredCountries(countries);
      }
      setIsCountryOpen(true);
    }
  };

  const getCountry = async () => {
    try {
      const response = await instance.get();
      setCountries(response.data);
      setFilteredCountries(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const handleCountrySelect = (country) => {
    dispatch(updateFormData({ country }));
    setIsCountryOpen(false);
  };

  useEffect(() => {
    getCountry();
  }, []); // Only call getCountry once on mount

  useEffect(() => {
    const closeDropdown = (e) => {
      if (isCountryOpen && !e.target.closest("#country-dropdown")) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [isCountryOpen]);

  return (
    <div
      className={`${
        currentStep === 2
          ? navigationDirection === "next"
            ? "h-full w-full slide-in-right flex flex-col justify-center items-center gap-10 "
            : "h-full w-full slide-in-left flex flex-col justify-center items-center gap-10 "
          : "hidden"
      } p-5 2xl:py-10 px-7 `}>
      {/* <ToastContainer closeOnClick /> */}
      <div className="flex gap-4 justify-center items-center text-slate-500">
        <FaRegAddressCard size={30} />
        <h2 className="text-2xl font-bold ">Address</h2>
      </div>

      <form className="w-full h-fit content-center grid grid-cols-2 gap-4 2xl:gap-6 text-sm 2xl:text-lg font-semibold">
        <div className="mb-4 relative" id="country-dropdown">
          <label
            htmlFor="country"
            className="block text-gray-700 font-bold mb-2">
            Country
          </label>
          <input
            type="text"
            required
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 rounded-lg"
            autoComplete="off" 
            onClick={() => setIsCountryOpen(true)}
          />
          {isCountryOpen && (
            <div className="absolute z-10 max-h-40 w-full overflow-scroll bg-white border border-gray-300 rounded-lg shadow-lg mt-2">
              {filteredCountries.map((item) => (
                <div
                  key={item.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleCountrySelect(item.name)}>
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-4 relative">
          <label htmlFor="state" className="block text-gray-700 font-bold mb-2">
            State/Province
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 rounded-lg"
            autoComplete="off" // Disable browser auto suggestion
          />
        </div>
        <div className="mb-4">
          <label htmlFor="zip" className="block text-gray-700 font-bold mb-2">
            Zip/Postal Code
          </label>
          <input
            type="number"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="w-full  p-2 rounded-lg"
            autoComplete="off" // Disable browser auto suggestion
          />
        </div>
        <div className="mb-4 col-span-1">
          <label
            htmlFor="street"
            className="block text-gray-700 font-bold mb-2">
            Street Address
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full  p-2 rounded-lg"
            autoComplete="off" // Disable browser auto suggestion
          />
        </div>
        <div className="mb-4 col-span-2">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full  p-2 rounded-lg"
            autoComplete="off" // Disable browser auto suggestion
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="landmark"
            className="block text-gray-700 font-bold mb-2">
            Landmark
          </label>
          <input
            type="text"
            id="landmark"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            className="w-full  p-2 rounded-lg"
            autoComplete="off" // Disable browser auto suggestion
          />
        </div>
      </form>
    </div>
  );
});

export default Address;
