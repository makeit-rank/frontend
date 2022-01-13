import axios from "axios";
import {
  ADD_PRODUCT_TO_ORDER_URL,
  ADD_CART_TO_ORDER_URL,
  GET_ORDER_FOR_SELLER,
  GET_USER_ORDERS_URL,
  GET_ORDER_DATA_BY_ID,
  UPDATE_ORDER_STATUS_URL,
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
export const getOrderForSeller = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_ORDER_FOR_SELLER, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
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

export const getOrderDataById = async (accessToken, order_id) => {
  try {
    const { data } = await axios.get(GET_ORDER_DATA_BY_ID, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        order_id: `"${order_id}"`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const updateOrderStatus = async (
  accessToken,
  order_id,
  status,
  Textdata,
  ImageData,
  changeStatus
) => {
  try {
    const { data } = await axios.put(
      UPDATE_ORDER_STATUS_URL,
      {
        order_id,
        status,
        Textdata,
        ImageData,
        changeStatus,
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
