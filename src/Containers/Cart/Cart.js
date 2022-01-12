import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import styles from "./Cart.module.css";

import Footer from "../../Components/Footer/index";
import Preloader from "./../../Components/Preloader/Preloader";
import CartMainSec from "./../../Components/CartMainSec/index";
import EmptyCartComp from "./../../Components/EmptyCartComp/index";
import { getCartItemsData } from "../../Services/user.service";
import notify from "./../../Utils/Helpers/notifyToast";

const Cart = () => {
  const userData = useSelector((state) => state.userReducer.userData);

  const [cartData, setCartData] = useState();

  useEffect(() => {
    getCartData();
  }, [userData]);

  const getCartData = async () => {
    setCartData(null);

    try {
      const response = await getCartItemsData(userData.accessToken);
      console.log(response);
      setCartData(response);
    } catch (err) {
      console.log(err);
      notify("Something went wrong", "error");
    }
  };

  return (
    <div className={styles.Wrapper}>
      {cartData ? (
        cartData.length > 0 ? (
          <CartMainSec
            cartData={cartData}
            addresses={userData.address}
            refreshDataFunction={getCartData}
          />
        ) : (
          <EmptyCartComp />
        )
      ) : (
        <Preloader />
      )}
      <Footer />
    </div>
  );
};

export default Cart;
