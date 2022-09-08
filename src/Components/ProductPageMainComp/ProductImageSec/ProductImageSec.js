import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ProductImageSec.module.css";
import Button from "./../../Button/index";
import { PRODUCT_PAGE_DATA } from "../../../Utils/Constants/StaticData";
import WishlistIcon from "./../../WishlistIcon/index";
import notify from "./../../../Utils/Helpers/notifyToast";
import { addProductToCart } from "../../../Services/user.service";
import {
  addProductToOrder,
  fetchAllPaymentMethods,
} from "./../../../Services/order.service";
import { useNavigate } from "react-router-dom";
import { getCurrencyAndCountry } from "../../../Services/location.locale.service";
import {
  UPDATE_EXTRA_PROPS,
  UPDATE_ORDER_CHECKOUT_POPUP_STATE,
} from "../../../Redux/ActionTypes";

function ProductImageSec({
  images,
  productId,
  productDetails,
  currentSelections,
}) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState(0);

  const addToCart = async () => {
    try {
      const response = await addProductToCart(
        userData.accessToken,
        productId,
        productDetails.various_size[currentSelections.size],
        Object.values(currentSelections.attachments)
      );
      notify("Successfully added to cart", "success");
    } catch (err) {
      console.log(err);
      notify("Failed to add product to cart", "error");
    }
  };

  const placeOrder = async () => {
    if (userData?.address?.length > 0) {
      const orderServiceProps = [
        userData.accessToken,
        productId,
        productDetails.various_size[currentSelections.size],
        Object.values(currentSelections.attachments),
        userData.address[currentSelections.address],
      ];

      dispatch({
        type: UPDATE_EXTRA_PROPS,
        value: {
          orderServiceProps,
        },
      });

      dispatch({
        type: UPDATE_ORDER_CHECKOUT_POPUP_STATE,
        value: true,
      });
    } else {
      notify("Please add address", "error");
      navigate("/profile/");
    }

    // const localeObj = getCurrencyAndCountry();
    // const paymentMethods = await fetchAllPaymentMethods(userData.accessToken, {
    //   country: localeObj.country,
    //   currency: localeObj.currency,
    // });
    // console.log(paymentMethods);
    // if (userData?.address?.length > 0) {
    //   console.log("Place order");
    //   try {
    //     const response = await addProductToOrder(
    //       userData.accessToken,
    //       productId,
    //       productDetails.various_size[currentSelections.size],
    //       Object.values(currentSelections.attachments),
    //       userData.address[currentSelections.address],
    //       localeObj.country,
    //       localeObj.currency,
    //       paymentMethods.map((method) => method.type).slice(0, 3)
    //     );
    //     notify("Successfully placed order", "success");
    //     window.addEventListener("onCheckoutPaymentSuccess", (event) => {
    //       console.log(event.detail);
    //       // Returns 'Payment' object.
    //       // Client code.
    //     });
    //     window.addEventListener("onCheckoutPaymentFailure", (event) => {
    //       console.error(event.detail.error);
    //       // Returns an error message from the API.
    //       // Client code.
    //     });
    //     window.addEventListener("onLoading", (event) => {
    //       console.log(event.detail.loading);
    //       // returns true or false depending on the loading state
    //       // client code
    //     });
    //     window.addEventListener("onCheckoutUpdateCardSuccess", (event) => {
    //       console.log(event.detail);
    //       // Returns payment method object.
    //       // client code
    //     });
    //     window.addEventListener("onCheckoutDeleteCardSuccess", (event) => {
    //       console.log(event.detail);
    //       // Returns deleted payment method object.
    //       // client code
    //     });
    //     let checkout = new RapydCheckoutToolkit({
    //       pay_button_text: "Click to pay",
    //       // Text that appears on the 'Pay' button.
    //       // String. Maximum length is 16 characters.
    //       // Default is "Place Your Order". Optional.
    //       pay_button_color: "blue",
    //       // Color of the 'Pay' button. String.
    //       // Standard CSS color name or hexadecimal code such as #323fff.
    //       // Default is the color that is returned in the 'merchant_color'
    //       // field of the response to 'Create Checkout Page'. Optional.
    //       id: response.checkout_id,
    //       // ID of the 'Create Checkout Page' response. String. Required.
    //       close_on_complete: false,
    //       // Causes the embedded Rapyd Checkout Toolkit window to close
    //       // when the payment is complete. Boolean. Default is 'true'. Optional.
    //       page_type: "collection",
    //       // Default is "collection". Optional.
    //     });
    //     // Instantiating ‘checkout’ with parametersInstantiating 'checkout' & setting variables
    //     checkout.displayCheckout();
    //   } catch (err) {
    //     console.log(err);
    //     notify("Failed to place order", "error");
    //   }
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSecWrapper}>
        {images.map((image, index) => (
          <div
            key={index}
            className={
              styles.ImageWrapper +
              " " +
              (index === currentImage ? styles.Active : "")
            }
            onMouseEnter={() => setCurrentImage(index)}
          >
            <img src={image} alt="product" className={styles.Image} />
          </div>
        ))}
      </div>
      <div className={styles.RightSecWrapper}>
        <div className={styles.PrimaryImageWrapper}>
          <img
            src={images[currentImage]}
            alt="product"
            className={styles.PrimaryImage}
            onLoad={(e) => {
              e.target.style.opacity = 1;
            }}
          />
          <div className={styles.AddToWishListWrapper}>
            <WishlistIcon productId={productId} />
          </div>
        </div>
        <div className={styles.ButtonsWrapper}>
          <Button
            name={PRODUCT_PAGE_DATA.addToCart}
            onClick={addToCart}
            primaryColor="var(--primary-blue)"
            inverted
            wrapperClass={styles.AddToCartButton + " " + styles.Button}
          />
          <Button
            name={PRODUCT_PAGE_DATA.placeOrder}
            onClick={placeOrder}
            primaryColor="var(--primary-blue)"
            wrapperClass={styles.PlaceOrderButton + " " + styles.Button}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImageSec;
