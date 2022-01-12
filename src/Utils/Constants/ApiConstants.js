export const PINCODE_TO_CITY_URL = "https://api.postalpincode.in/pincode/";

export const BASE_URL =
  "http://makeit.centralindia.cloudapp.azure.com:8080/api/v1/";
export const PRIMARY_API = "http://localhost:8080/api/v1/";
export const STORAGE_API = "https://mongodb-storage.herokuapp.com/";
// export const BASE_URL =
//   "http://makeit.centralindia.cloudapp.azure.com:8080/api/v1/";
// export const STORAGE_API =
//   "http://makeit.centralindia.cloudapp.azure.com:8080/api/v1/";

export const AUTH_URL = PRIMARY_API + "auth/";
export const USER_URL = PRIMARY_API + "user/";
export const PRODUCT_URL = PRIMARY_API + "product/";
export const ORDER_URL = PRIMARY_API + "order/";

export const SIGNUP_URL = AUTH_URL + "signup";
export const LOGIN_URL = AUTH_URL + "login";
export const GET_USER_DATA = USER_URL + "getuserdata";
export const ADD_ADDESS_URL = USER_URL + "addAddress";
export const BECOME_A_SELLER_URL = USER_URL + "becomeaseller";
export const GET_CART_DATA = USER_URL + "getcart";
export const REMOVE_CART_ITEM = USER_URL + "removefromcart";
export const ADD_TO_CART_URL = USER_URL + "addtocart";
export const SEARCH_PRODUCTS = PRODUCT_URL + "atlassearch";
export const ADD_PRODUCT_URL = PRODUCT_URL + "addproduct";
export const GET_PRODUCT_DATA_BY_ID = PRODUCT_URL + "getproductbyid";
export const ADD_REVIEW_URL = PRODUCT_URL + "addreview";
export const ADD_PRODUCT_TO_ORDER_URL = ORDER_URL + "addorder";  

export const UPLOAD_IMAGE_URL = STORAGE_API + "addImages";
