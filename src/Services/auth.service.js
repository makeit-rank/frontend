import axios from "axios";
import { SIGNUP_URL, LOGIN_URL } from "../Utils/Constants/ApiConstants";

export const signupUser = async (userData) => {
  try {
    const { data } = await axios.post(SIGNUP_URL, userData);
    return data;
  } catch (err) {
    throw err;
  }
};

export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(LOGIN_URL, userData);
    return data;
  } catch (err) {
    throw err;
  }
};
