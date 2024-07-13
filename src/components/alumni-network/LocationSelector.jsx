import React, { useState, useRef } from "react";
import { instance } from "../../redux/api";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation } from "../../redux/slice/locationSlice";
import useOutsideClick from "../../hooks/useOutsideClick";

const LocationSelector = ({
  label,
  name,
  value,
  onChange,
  apiEndpoint,
  error,
  onlyRaad,
  handleValidate,
}) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const formData = useSelector((state) => state.formData);

  const { submitClicked } = formData.validationErrors;

  const dispatch = useDispatch();
  const targetRef = useRef();
  const location = useSelector((state) => state.location);

  useOutsideClick(targetRef, () => setIsOpen(false));

  const fetchData = async () => {
    console.log(apiEndpoint, "from fetchData", name);
    try {
      const response = await instance.get(apiEndpoint);
      setItems(response.data);
      setFilteredItems(response.data);
    } catch (error) {
      // console.error(`Error fetching ${name} for this ${apiEndpoint}:`, error);
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    onChange(e);

    if (value) {
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
    setIsOpen(true);
  };

  const handleItemSelect = (item) => {
    console.log(item, "from handleItemSelect");
    console.log(name);
    if (name === "addressCountry") {
      dispatch(
        updateLocation({
          addressCountry: item.name,
          addressCountryIso2: item.iso2,
        })
      );
    }
    if (name === "shippingCountry") {
      dispatch(
        updateLocation({
          shippingCountry: item.name,
          shippingCountryIso2: item.iso2,
        })
      );
    }
    if (name === "addressState") {
      dispatch(
        updateLocation({ addressState: item.name, addressStateIso2: item.iso2 })
      );
    }
    if (name === "shippingState") {
      dispatch(
        updateLocation({
          shippingState: item.name,
          shippingStateIso2: item.iso2,
        })
      );
    }

    if (name === "companyCountry") {
      dispatch(
        updateLocation({
          companyDetailsCountry: item.name,
          companyDetailsCountryIso2: item.iso2,
        })
      );
    }

    if (name === "companyState") {
      dispatch(
        updateLocation({
          companyDetailsState: item.name,
          companyDetailsStateIso2: item.iso2,
        })
      );
    }

    if (name === "educationCountry") {
      dispatch(
        updateLocation({
          educationCountry: item.name,
          educationCountryIso2: item.iso2,
        })
      );
    }

    if (name === "educationState") {
      dispatch(
        updateLocation({
          educationState: item.name,
          educationStateIso2: item.iso2,
        })
      );
    }

    if (name === "workingCountry") {
      dispatch(
        updateLocation({
          workingCountry: item.name,
          workingCountryIso2: item.iso2,
        })
      );
    }

    if (name === "workingState") {
      dispatch(
        updateLocation({ workingState: item.name, workingStateIso2: item.iso2 })
      );
    }
    onChange({ target: { name, value: item.name } });
    setIsOpen(false);
   
    
  };

  const handleInputClick = async () => {
    if (!isOpen) {
      await fetchData();
    }
    setIsOpen(true);
  };

  return (
    <div ref={targetRef} className="h-fit flex flex-col gap-1 relative ">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm 2xl:text-md font-semibold">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleInputChange}
        className={`w-full px-2 py-1 rounded-lg ${
          submitClicked && error && "border border-red-500"
        }`}
        autoComplete="nope"
        onClick={handleInputClick}
        readOnly={onlyRaad}
      />
      {isOpen && !onlyRaad && filteredItems.length > 0 && (
        <div className="max-h-36 w-full overflow-y-scroll bg-white border border-gray-300 rounded-lg shadow-lg absolute mt-10 z-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleItemSelect(item)}>
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
