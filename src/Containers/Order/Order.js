import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Order.module.css";

import Preloader from "../../Components/Preloader";
import Footer from "../../Components/Footer";
import OrderMainSec from "./../../Components/OrderMainSec/index";
import { getOrderDataById } from "../../Services/order.service";
import notify from "./../../Utils/Helpers/notifyToast";

function Order() {
  let { id: orderID } = useParams();

  const userData = useSelector((state) => state.userReducer.userData);
  const navigate = useNavigate();

  const [orderDetails, setOrdertDetails] = useState(null);

  useEffect(() => {
    console.log(orderID);
    getOrderDetails();
  }, [orderID]);

  const getOrderDetails = async () => {
    setOrdertDetails(null);

    try {
      const response = await getOrderDataById(userData.accessToken, orderID);
      console.log(response);
      setOrdertDetails(response);
    } catch (err) {
      console.log(err);
      notify("Something went wrong", "error");
      navigate("/");
    }
  };

  return (
    <div className={styles.Wrapper}>
      {orderDetails ? (
        <OrderMainSec
          orderDetails={orderDetails}
          updateOrderDataFun={getOrderDetails}
        />
      ) : (
        <Preloader />
      )}
      <Footer />
    </div>
  );
}

export default Order;
