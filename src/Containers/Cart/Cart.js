import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import styles from "./Cart.module.css";

import Footer from "../../Components/Footer/index";
import Preloader from "./../../Components/Preloader/Preloader";
import CartMainSec from "./../../Components/CartMainSec/index";
import EmptyCartComp from "./../../Components/EmptyCartComp/index";

const Cart = () => {
  const userData = useSelector((state) => state.userReducer.userData);

  const [cartData, setCartData] = useState();

  useEffect(() => {
    setTimeout(() => {
      getHighlightsData();
    }, 1000);
  }, [userData]);

  const getHighlightsData = async () => {
    setCartData({
      recommended: null,
      topPicks: null,
    });
    console.log("get highlights data");

    const tempData = Array(4)
      .fill({})
      .map((_, index) => ({
        id: index,
        image: `https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
        title: `Printed Men Hooded Block Round Neck Black T-Shirt`,
        seller: `Blive  enterprise ${index + 1}`,
        size: "XL",
        // size: Math.random() > 0.5 ? "S" : undefined,
        price: Math.floor(Math.random() * 500) + 500,
        attachedImages:
          Math.random() > 0.5
            ? [
                `https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
                `https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHsx8&auto=format&fit=crop&w=387&q=80`,
                `https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
              ]
            : undefined,
      }));

    setCartData(tempData);
  };

  return (
    <div className={styles.Wrapper}>
      {cartData ? (
        cartData.length > 0 ? (
          <CartMainSec cartData={cartData} addresses={userData.address} />
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
