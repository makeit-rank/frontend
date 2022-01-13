export const PINCODE_TO_CITY_URL = "https://api.postalpincode.in/pincode/";

export const BASE_URL =
  "https://makeit.centralindia.cloudapp.azure.com/api/v1/";
export const STORAGE_URL = "https://mongodb-storage.herokuapp.com/";

export const AUTH_URL = BASE_URL + "auth/";
export const USER_URL = BASE_URL + "user/";
export const PRODUCT_URL = BASE_URL + "product/";
export const ORDER_URL = BASE_URL + "order/";

export const SIGNUP_URL = AUTH_URL + "signup";
export const LOGIN_URL = AUTH_URL + "login";
export const GET_USER_DATA = USER_URL + "getuserdata";
export const ADD_ADDESS_URL = USER_URL + "addAddress";
export const BECOME_A_SELLER_URL = USER_URL + "becomeaseller";
export const GET_CART_DATA = USER_URL + "getcart";
export const REMOVE_CART_ITEM = USER_URL + "removefromcart";
export const ADD_TO_CART_URL = USER_URL + "addtocart";
export const ADD_TO_WISHLIST_URL = USER_URL + "addtowishlist";
export const REMOVE_FROM_WISHLIST_URL = USER_URL + "removefromwishlist";
export const MOVE_TO_WISHLIST_URL = USER_URL + "movetowishlist";
export const GET_WISHLIST_DATA = USER_URL + "getwishlist";
export const SEARCH_PRODUCTS = PRODUCT_URL + "atlassearch";
export const ADD_PRODUCT_URL = PRODUCT_URL + "addproduct";
export const GET_PRODUCT_DATA_BY_ID = PRODUCT_URL + "getproductbyid";
export const ADD_REVIEW_URL = PRODUCT_URL + "addreview";
export const ADD_PRODUCT_TO_ORDER_URL = ORDER_URL + "addorder";
export const ADD_CART_TO_ORDER_URL = ORDER_URL + "addcartorder";
export const GET_USER_ORDERS_URL = ORDER_URL + "getorderforuser";
export const GET_SELLER_PRODUCTS = PRODUCT_URL + "getproductseller";
export const GET_ORDER_DATA_BY_ID = ORDER_URL + "getorderbyid";
export const UPDATE_ORDER_STATUS_URL = ORDER_URL + "updatestatus";

export const UPLOAD_IMAGE_URL = STORAGE_URL + "addImages";
export const GET_ORDER_FOR_SELLER = ORDER_URL + "getorderforseller";
