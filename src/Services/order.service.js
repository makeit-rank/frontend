import axios from "axios";
import {
  ADD_PRODUCT_TO_ORDER_URL,
  ADD_CART_TO_ORDER_URL,
  GET_ORDER_FOR_SELLER,
  GET_USER_ORDERS_URL,
  GET_ORDER_DATA_BY_ID,
  UPDATE_ORDER_STATUS_URL,
  FETCH_ALL_PAYMENT_METHODS_URL,
} from "../Utils/Constants/ApiConstants";

export const addProductToOrder = async (
  accessToken,
  product_id,
  size,
  attachedFiles,
  address,
  country,
  currency,
  paymentMethod
) => {
  try {
    const { data } = await axios.post(
      ADD_PRODUCT_TO_ORDER_URL,
      {
        product_id,
        size,
        attachedFiles,
        address,
        country,
        currency,
        paymentMethod,
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

export const fetchAllPaymentMethods = async (accessToken, locationInfo) => {
  try {
    const { data } = await axios.post(
      FETCH_ALL_PAYMENT_METHODS_URL,
      {
        ...locationInfo,
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

function sign(method, urlPath, salt, timestamp, body) {
  try {
    let bodyString = "";
    if (body) {
      bodyString = JSON.stringify(body);
      bodyString = bodyString == "{}" ? "" : bodyString;
    }

    let toSign =
      method.toLowerCase() +
      urlPath +
      salt +
      timestamp +
      accessKey +
      secretKey +
      bodyString;
    log && console.log(`toSign: ${toSign}`);

    let hash = crypto.createHmac("sha256", secretKey);
    hash.update(toSign);
    const signature = Buffer.from(hash.digest("hex")).toString("base64");
    log && console.log(`signature: ${signature}`);

    return signature;
  } catch (error) {
    console.error("Error generating signature");
    throw error;
  }
}

export const initializeOrder = async (accessToken, cartItems, address) => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    salt = "12345678";

    const resp = await axios.post(
      "https://sandboxapi.rapyd.net/v1/",
      {
        amount: 100,
        currency: "INR",
        country: "IN",
      },
      {
        headers: {
          access_key: "sbpb_NzQwZjQ5ZjctZjQwZS00ZjQwLWI2ZjItZjQwZjQ5ZjQwZjQw",
          "Content-Type": "application/json",
          salt: "1234567890",
          timestamp: "1622020000",
        },
      }
    );
    console.log(resp);
    return resp;
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
