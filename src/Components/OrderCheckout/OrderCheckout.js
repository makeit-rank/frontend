import React, { useEffect, useRef, useState } from "react";

import styles from "./OrderCheckout.module.css";
import { useSelector } from "react-redux";

import { ADD_PRODUCT_POPUP_DATA } from "../../Utils/Constants/StaticData";
import notify from "../../Utils/Helpers/notifyToast";

import Button from "../Button";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { addProduct } from "../../Services/product.service";
import { getCurrencyAndCountry } from "../../Services/location.locale.service";
import Preloader from "./../Preloader/Preloader";
import {
  addProductToOrder,
  fetchAllPaymentMethods,
  markOrderPaymentSuccess,
} from "../../Services/order.service";

function OrderCheckout({ closePopupFunction, orderServiceProps }) {
  const formRef = useRef();
  const locationData = useRef(getCurrencyAndCountry());
  const userData = useSelector((state) => state.userReducer.userData);
  const [allPaymentMethods, setAllPaymentMethods] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isDoneSelectingPaymentMethod, setIsDoneSelectingPaymentMethod] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllPaymentMethods();
  }, []);

  useEffect(() => {
    window.addEventListener(
      "onCheckoutPaymentSuccess",
      onCheckoutPaymentSuccess
    );
    window.addEventListener(
      "onCheckoutPaymentFailure",
      onCheckoutPaymentFailure
    );
    window.addEventListener("onLoading", onLoading);
    window.addEventListener(
      "onCheckoutUpdateCardSuccess",
      onCheckoutUpdateCardSuccess
    );
    window.addEventListener(
      "onCheckoutDeleteCardSuccess",
      onCheckoutDeleteCardSuccess
    );

    return () => {
      window.removeEventListener(
        "onCheckoutPaymentSuccess",
        onCheckoutPaymentSuccess
      );
      window.removeEventListener(
        "onCheckoutPaymentFailure",
        onCheckoutPaymentFailure
      );
      window.removeEventListener("onLoading", onLoading);
      window.removeEventListener(
        "onCheckoutUpdateCardSuccess",
        onCheckoutUpdateCardSuccess
      );
      window.removeEventListener(
        "onCheckoutDeleteCardSuccess",
        onCheckoutDeleteCardSuccess
      );
    };
  }, []);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await addProductToOrder(
        ...orderServiceProps,
        locationData.current.country,
        locationData.current.currency,
        [selectedPaymentMethod]
      );

      setIsDoneSelectingPaymentMethod(true);
      let checkout = new RapydCheckoutToolkit({
        id: response.checkout_id,
        close_on_complete: false,
      });
      checkout.displayCheckout();
    } catch (err) {
      console.log(err);
      notify("Failed to place order", "error");
    }
    setIsLoading(false);
  };

  const getAllPaymentMethods = async () => {
    try {
      const paymentMethods = await fetchAllPaymentMethods(
        userData.accessToken,
        {
          country: locationData.current.country,
          currency: locationData.current.currency,
        }
      );

      // find unique catigories of payment methods
      const uniquePaymentMethodCategories = [
        ...new Set(paymentMethods.map((item) => item.category)),
      ];
      console.log(uniquePaymentMethodCategories);
      setAllPaymentMethods(paymentMethods);

      setSelectedPaymentMethod(paymentMethods[0].type);
    } catch (err) {
      console.log(err);
    }
  };

  const onCheckoutPaymentSuccess = async (event) => {
    console.log(event.detail);
    notify("Payment Successful", "success");
    // API call to update order status
    await markOrderPaymentSuccess(userData.accessToken, {
      checkout_id:
        event.detail.complete_payment_url.split("/")[
          event.detail.complete_payment_url.split("/").length - 1
        ],
      payment_id: event.detail.id,
    });
    setIsLoading(false);
    setIsDoneSelectingPaymentMethod(false);
    setSelectedPaymentMethod(null);
    closePopupFunction();
  };
  const onCheckoutPaymentFailure = (event) => {
    console.log(event.detail);
  };
  const onLoading = (event) => {
    console.log(event.detail.loading);
  };
  const onCheckoutUpdateCardSuccess = (event) => {
    console.log(event.detail);
  };
  const onCheckoutDeleteCardSuccess = (event) => {
    console.log(event.detail);
  };

  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.HeadingPrimary}>{ADD_PRODUCT_POPUP_DATA.title}</h3>
      {!isDoneSelectingPaymentMethod ? (
        <form className={styles.Form} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.PaymentMethodSelector}>
            {!isLoading && allPaymentMethods ? (
              <RadioGroup
                onChange={(e) => {
                  setSelectedPaymentMethod(e.target.value);
                }}
                value={selectedPaymentMethod}
              >
                {[
                  ...new Set(allPaymentMethods.map((item) => item.category)),
                ].map((item, index) => {
                  return (
                    <>
                      <h3 className={styles.HeadingSecondary}>
                        {item.replace("_", " ")}
                      </h3>
                      {allPaymentMethods
                        .filter((pMethod) => pMethod.category === item)
                        .map((item, index) => {
                          return (
                            <FormControlLabel
                              key={index}
                              value={item.type}
                              control={<Radio />}
                              label={item.name}
                            />
                          );
                        })}
                    </>
                  );
                })}
              </RadioGroup>
            ) : (
              <Preloader />
            )}
          </div>
          <div className={styles.ButtonsWrapper}>
            <Button
              disabled={isLoading || !selectedPaymentMethod}
              name={ADD_PRODUCT_POPUP_DATA.addProduct}
              wrapperClass={styles.SubmitButton}
              primaryColor={
                isLoading || !selectedPaymentMethod
                  ? "var(--sec-grey)"
                  : "var(--primary-blue)"
              }
              type="submit"
            />
          </div>
        </form>
      ) : (
        <>
          <div id="rapyd-checkout"></div>
        </>
      )}
    </div>
  );
}

export default OrderCheckout;
