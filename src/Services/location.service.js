import axios from "axios";
import { PINCODE_TO_CITY_URL } from "../Utils/Constants/ApiConstants";

export const getCityFromPincode = async (pincode) => {
  try {
    const { data } = await axios.get(PINCODE_TO_CITY_URL + pincode);
    return data[0].PostOffice[0].District;
  } catch (err) {
    throw err;
  }
};
