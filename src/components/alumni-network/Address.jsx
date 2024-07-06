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
import { instance } from "../../redux/api";
import { updateFormData } from "../../redux/slice/alumniFormdata";
import addressImg from "../../assets/images/location.png";

const Address = forwardRef((props, ref) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [countryIso, setCountryIso] = useState("");
  const [cities, setCities] = useState([]);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.formData);

  const handleNext = () => {
    if (validateForm()) {
      navigate("/shipping"); // Next step
    }
  };

  const { currentStep, navigationDirection } = useSelector(
    (state) => state.stepsSlice
  );

  const handleBack = () => {
    dispatch(prevStep());
    navigate("/");
  };

  const validateForm = () => {
    const newErrors = {};
    const { country, state, zipcode, street, citie, landmark } = formData;

    if (!country) {
      newErrors.country = "Please fill in the country field.";
    }

    if (!state) {
      newErrors.state = "Please fill in the state field.";
    }

    if (!zipcode) {
      newErrors.zipcode = "Please fill in the zip code field.";
    }

    if (!street) {
      newErrors.street = "Please fill in the street address field.";
    }

    if (!citie) {
      newErrors.citie = "Please fill in the city field.";
    }

    if (!landmark) {
      newErrors.landmark = "Please fill in the landmark field.";
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
    if (name === "citie") {
      if (value) {
        const filtered = cities.filter((city) =>
          city.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCities(filtered);
      } else {
        setFilteredCities(cities);
      }
      setIsCitiesOpen(true);
    }

    // Clear error message when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
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

  const getStates = async (countryIso2) => {
    setCountryIso(countryIso2);
    try {
      const response = await instance.get(`/${countryIso2}/states`);
      setStates(response.data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const getcities = async (stateIso2) => {
    try {
      const response = await instance.get(
        `/${countryIso}/states/${stateIso2}/cities`
      );
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCountrySelect = (country, iso2) => {
    dispatch(updateFormData({ country }));
    setIsCountryOpen(false);
    getStates(iso2); // Fetch states based on selected country's ISO2 code
  };

  const handleStateSelect = (state, iso2) => {
    dispatch(updateFormData({ state }));
    setIsStateOpen(false);
    getcities(iso2);
  };

  const handlecitieSelect = (citie) => {
    dispatch(updateFormData({ citie }));
    setIsCitiesOpen(false);
  };

  useEffect(() => {
    getCountry();
  }, []); // Only call getCountry once on mount

  useEffect(() => {
    const closeDropdown = (e) => {
      if (isCountryOpen && !e.target.closest("#country-dropdown")) {
        setIsCountryOpen(false);
      }
      if (isStateOpen && !e.target.closest("#state-dropdown")) {
        setIsStateOpen(false);
      }
      if (isCitiesOpen && !e.target.closest("#citie-dropdown")) {
        setIsCitiesOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [isCountryOpen, isStateOpen, isCitiesOpen]);

  return (
    <div
      className={`${
        currentStep === 2
          ? navigationDirection === "next"
            ? " slide-in-right "
            : "slide-in-left"
          : "hidden"
      } py-5 md:py-6 2xl:py-12 h-full w-full  px-7 flex flex-col   gap-4 xl:gap-6 2xl:gap-10`}>
      <div className="flex gap-4   text-slate-500">
        <img src={addressImg} alt="addressImg" className="w-7 h-7" />
        <h2 className="text-xl font-bold ">Address</h2>
      </div>

      <form
        className="w-full h-fit  grid grid-cols-2 gap-2 md:gap-y-1 xl:gap-y-2 2xl:gap-y-3 gap-x-3 md:gap-x-10 2xl:gap-x-12 "
        autoComplete="nope">
        <div
          className="h-fit flex flex-col gap-1 relative"
          id="country-dropdown">
          <label
            htmlFor="country"
            className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Country
          </label>
          <input
            type="text"
            required
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`${
              errors.country ? " border border-red-500  " : ""
            } w-full px-2 py-1 rounded-lg`}
            autoComplete="nope"
            onClick={() => setIsCountryOpen(true)}
          />
          {isCountryOpen && (
            <div className="absolute z-10 max-h-40 w-full overflow-y-scroll bg-white border border-gray-300 rounded-lg shadow-lg mt-14">
              {filteredCountries.map((item) => (
                <div
                  key={item.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleCountrySelect(item.name, item.iso2)}>
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="h-fit flex flex-col gap-1 relative" id="state-dropdown">
          <label
            htmlFor="state"
            className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            State/Province
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            readOnly
            className={`${
              errors.state ? "border border-red-500" : ""
            } w-full px-2 py-1 rounded-lg`}
            autoComplete="nope"
            onClick={() => setIsStateOpen(true)}
          />
          {isStateOpen && (
            <div className="absolute z-10 max-h-40 w-full overflow-y-scroll bg-white border border-gray-300 rounded-lg shadow-lg mt-14">
              {states.map((item) => (
                <div
                  key={item.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleStateSelect(item.name, item.iso2)}>
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="h-fit flex flex-col gap-1">
          <label
            htmlFor="zipcode"
            className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Zip/Postal Code
          </label>
          <input
            type="number"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            className={` ${
              errors.zipcode ? "border border-red-500" : ""
            } w-full px-2 py-1 rounded-lg`}
            autoComplete="nope"
          />
        </div>
        <div className="h-fit flex flex-col gap-1 col-span-1">
          <label
            htmlFor="street"
            className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Street Address
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className={` ${
              errors.street ? "border border-red-500" : ""
            } w-full px-2 py-1 rounded-lg`}
            autoComplete="nope"
          />
        </div>
        <div className="h-fit flex flex-col gap-1 col-span-2 relative">
          <label
            htmlFor="citie"
            className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            City
          </label>
          <input
            type="text"
            id="citie"
            name="citie"
            value={formData.citie}
            onChange={handleChange}
            className={` ${
              errors.citie && "border border-red-500"
            } w-full px-2 py-1 rounded-lg`}
            autoComplete="nope"
            onClick={() => setIsCitiesOpen(true)}
          />
          {isCitiesOpen && filteredCities && (
            <div className="absolute z-10 max-h-32 flex flex-col min-w-56 max-w-96 overflow-y-scroll bg-white border border-gray-300 rounded-lg shadow-lg mt-14">
              {filteredCities.map((item) => (
                <div
                  key={item.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handlecitieSelect(item.name)}>
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="h-fit flex flex-col gap-1 col-span-2">
          <label
            htmlFor="landmark"
            className="block text-gray-700 text-sm 2xl:text-md font-semibold">
            Landmark
          </label>
          <input
            type="text"
            id="landmark"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            className={` ${
              errors.landmark ? "border border-red-500" : ""
            } w-full px-2 py-1 rounded-lg`}
            autoComplete="nope"
          />
        </div>
      </form>
    </div>
  );
});

export default Address;
