import axios from "axios";
import {
  SEARCH_PRODUCTS,
  ADD_PRODUCT_URL,
  GET_PRODUCT_DATA_BY_ID,
  ADD_REVIEW_URL,
  GET_SELLER_PRODUCTS,
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

export const getProductDataById = async (productId) => {
  try {
    const { data } = await axios.get(
      GET_PRODUCT_DATA_BY_ID + `?product_id="${productId}"`
    );
    return data;
  } catch (err) {
    throw err;
  }
};
export const getSellerProduct = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_SELLER_PRODUCTS, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const addReviewToProduct = async (
  authToken,
  product_id,
  star,
  description
) => {
  try {
    const { data } = await axios.post(
      ADD_REVIEW_URL,
      {
        product_id,
        star,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};
