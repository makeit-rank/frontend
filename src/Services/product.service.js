import axios from "axios";
import { SEARCH_PRODUCTS } from "../Utils/Constants/ApiConstants";

export const searchProducts = async (query) => {
  try {
    const { data } = await axios.get(SEARCH_PRODUCTS, {
      query: query,
    });
    return data;
  } catch (err) {
    throw err;
  }
};
