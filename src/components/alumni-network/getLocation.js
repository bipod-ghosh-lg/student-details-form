import {instance} from "../../redux/api";
export const getCountry = async () => {
  try {
    const response = await instance.get();
    return response.data
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

export const getStates = async (countryIso2) => {
//   setCountryIso(countryIso2);
  try {
    const response = await instance.get(`/${countryIso2}/states`);
    return response.data
  } catch (error) {
    console.error("Error fetching states:", error);
  }
};

export const getcities = async (stateIso2) => {
  try {
    const response = await instance.get(
      `/${countryIso}/states/${stateIso2}/cities`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
};
