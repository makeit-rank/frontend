import axios from "axios";
import {
  ADD_PRODUCT_TO_ORDER_URL,
  ADD_CART_TO_ORDER_URL,
  GET_USER_ORDERS_URL,
} from "../Utils/Constants/ApiConstants";

export const addProductToOrder = async (
  accessToken,
  product_id,
  size,
  attachedFiles,
  address
) => {
  try {
    const { data } = await axios.post(
      ADD_PRODUCT_TO_ORDER_URL,
      {
        product_id,
        size,
        attachedFiles,
        address,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const addCartToOrder = async (accessToken, address) => {
  try {
    const { data } = await axios.post(
      ADD_CART_TO_ORDER_URL,
      {
        address,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const getUserOrders = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_USER_ORDERS_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
