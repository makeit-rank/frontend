import axios from "axios";
import {
  SEARCH_PRODUCTS,
  ADD_PRODUCT_URL,
} from "../Utils/Constants/ApiConstants";

export const searchProducts = async (query) => {
  try {
    const { data } = await axios.get(SEARCH_PRODUCTS + `?query="${query}"`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const addProduct = async (authToken, productData) => {
  try {
    const { data } = await axios.post(ADD_PRODUCT_URL, productData, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
