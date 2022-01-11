import axios from "axios";
import {
  GET_USER_DATA,
  ADD_ADDESS_URL,
  BECOME_A_SELLER_URL,
  GET_CART_DATA,
  REMOVE_CART_ITEM,
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

export const becomeASeller = async (
  accessToken,
  shop_name,
  gst_id,
  pickup_address
) => {
  try {
    const { data } = await axios.post(
      BECOME_A_SELLER_URL,
      {
        shop_name,
        gst_id,
        pickup_address,
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

export const getCartItemsData = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_CART_DATA, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const removeCartItem = async (accessToken, cart_id) => {
  try {
    const { data } = await axios.delete(
      REMOVE_CART_ITEM,
      {
        cart_id,
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
