import {
  UPDATE_ADD_ADDRESS_POPUP_STATE,
  UPDATE_ADD_PRODUCT_POPUP_STATE,
  UPDATE_ORDER_CHECKOUT_POPUP_STATE,
  UPDATE_EXTRA_PROPS,
} from "../ActionTypes";

export const popUpReducer = (
  state = {
    addAddress: false,
    addProduct: false,
    orderCheckout: false,
    extraProps: {},
  },
  action
) => {
  switch (action.type) {
    case UPDATE_ADD_ADDRESS_POPUP_STATE: {
      return {
        ...state,
        addAddress: action.value,
      };
    }

    case UPDATE_ADD_PRODUCT_POPUP_STATE: {
      return {
        ...state,
        addProduct: action.value,
      };
    }

    case UPDATE_ORDER_CHECKOUT_POPUP_STATE: {
      return {
        ...state,
        orderCheckout: action.value,
      };
    }

    case UPDATE_EXTRA_PROPS: {
      return {
        ...state,
        extraProps: action.value,
      };
    }

    default:
      return state;
  }
};
