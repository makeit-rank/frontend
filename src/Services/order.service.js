import axios from "axios";
import { ADD_PRODUCT_TO_ORDER_URL } from "../Utils/Constants/ApiConstants";

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
