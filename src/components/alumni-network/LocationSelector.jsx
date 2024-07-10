import React, { useState, useEffect, useRef } from "react";
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
  iso2,
}) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const targetRef = useRef()
  const location = useSelector((state) => {
    return state.location;
  });

  useOutsideClick(targetRef, () => setIsOpen(false));


  useEffect(() => {
    const fetchData = async () => {
      console.log(apiEndpoint, "from fetchData" , name);
      try {
        const response = await instance.get(apiEndpoint);
        setItems(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        console.error(`Error fetching ${name}:`, error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

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
    console.log(name)
    if(name === "addressCountry"){
      dispatch(
        updateLocation({
          addressCountry: item.name,
          addressCountryIso2: item.iso2,
         
        })
      );
    }
    if(name === "shippingCountry"){
      dispatch(updateLocation({ shippingCountry: item.name, shippingCountryIso2: item.iso2}));
    }
    if(name === "addressState"){
      dispatch(updateLocation({ addressState: item.name, addressStateIso2: item.iso2 }));
    }
    if (name === "shippingState") {
      
      dispatch(updateLocation({ shippingState: item.name, shippingStateIso2: item.iso2 }));
    }

    onChange({ target: { name, value: item.name } });
    setIsOpen(false);
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
        className="w-full px-2 py-1 rounded-lg"
        autoComplete="nope"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && filteredItems.length > 0 && (
        <div className="absolute z-10 max-h-40 w-full overflow-y-scroll bg-white border border-gray-300 rounded-lg shadow-lg mt-10 ">
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
