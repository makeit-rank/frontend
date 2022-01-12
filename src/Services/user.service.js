import axios from "axios";
import {
  GET_USER_DATA,
  ADD_ADDESS_URL,
  BECOME_A_SELLER_URL,
  GET_CART_DATA,
  REMOVE_CART_ITEM,
  ADD_TO_CART_URL,
  ADD_TO_WISHLIST_URL,
  REMOVE_FROM_WISHLIST_URL,
  MOVE_TO_WISHLIST_URL,
  ADD_CART_TO_ORDER_URL,
  GET_WISHLIST_DATA,
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
    const { data } = await axios.delete(REMOVE_CART_ITEM, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        cart_id,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
export const getWishlist = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_WISHLIST_DATA, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
export const addProductToCart = async (
  accessToken,
  product_id,
  size,
  attachedFiles
) => {
  try {
    const { data } = await axios.post(
      ADD_TO_CART_URL,
      {
        product_id,
        size,
        attachedFiles,
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

export const addProductToWishlist = async (accessToken, product_id) => {
  try {
    const { data } = await axios.post(
      ADD_TO_WISHLIST_URL,
      {
        product_id,
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

export const removeProductFromWishlist = async (accessToken, product_id) => {
  try {
    const { data } = await axios.delete(REMOVE_FROM_WISHLIST_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        product_id,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const moveProductFromCartToWishlist = async (accessToken, cart_id) => {
  try {
    const { data } = await axios.post(
      MOVE_TO_WISHLIST_URL,
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
