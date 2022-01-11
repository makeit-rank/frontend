import axios from "axios";
import {
  GET_USER_DATA,
  ADD_ADDESS_URL,
  BECOME_A_SELLER_URL,
} from "../Utils/Constants/ApiConstants";

export const getUserData = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_USER_DATA, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const addAddress = async (accessToken, address) => {
  try {
    const { data } = await axios.post(ADD_ADDESS_URL, address, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
