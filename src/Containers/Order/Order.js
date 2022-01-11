import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Order.module.css";

import Preloader from "../../Components/Preloader";
import Footer from "../../Components/Footer";
import OrderMainSec from "./../../Components/OrderMainSec/index";

function Order() {
  let { id: orderID } = useParams();

  const [orderDetails, setOrdertDetails] = useState(null);

  useEffect(() => {
    console.log(orderID);
    setTimeout(() => {
      getOrderDetails();
    }, 1000);
  }, [orderID]);

  const getOrderDetails = async () => {
    setOrdertDetails(null);
    //Fetch Details
    setOrdertDetails({
      id: Math.floor(Math.random() * 10000) + 10000,
      timestamp: new Date().getTime(),
      total: Math.floor(Math.floor(Math.random() * 100000) / 100) + 99,
      deliveryAddress:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci pharetra rhoncus, felis blandit.",
      productDetails: {
        product_id: Math.floor(Math.random() * 10000) + 10000,
        image: `https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
        title: `Printed Men Hooded Block Round Neck Black T-Shirt`,
        seller: `Blive  Enterprise`,
        size: "S",
        attachedFiles: [
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80",
          "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
          "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80",
          "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        ],
      },
      status: {
        Ordered: new Date().getTime(),
        Confirmed: new Date().getTime(),
        AskedForApprove: Array(3).fill({
          date: new Date().getTime(),
          data: [
            "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          ],
        }),
        AskedForChange: [
          {
            date: new Date().getTime(),
            changeStatus: true,
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci pharetra rhoncus, felis blandit. ipsum dolor adipiscing elit Orci pharetra ",
          },
          {
            date: new Date().getTime(),
            changeStatus: false,
          },
        ],
        Delivered: new Date().getTime(),
      },
    });
  };

  return (
    <div className={styles.Wrapper}>
      {orderDetails ? (
        <OrderMainSec orderDetails={orderDetails} />
      ) : (
        <Preloader />
      )}
      <Footer />
    </div>
  );
}

export default Order;
