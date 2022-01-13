import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./OrdersSec.module.css";

import Preloader from "./../../../Preloader/Preloader";
import ProfileOrderItem from "./ProfileOrderItem/index";
import notify from "../../../../Utils/Helpers/notifyToast";
import { getUserOrders } from "./../../../../Services/order.service";

function OrdersSec() {
  const userData = useSelector((state) => state.userReducer.userData);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, [userData]);

  const fetchOrders = async () => {
    setOrders(null);

    try {
      const response = await getUserOrders(userData.accessToken);
      setOrders(response);
    } catch (error) {
      console.log(error);
      notify("Something went wrong", "error");
    }
  };

  return (
    <>
      {orders ? (
        <div className={styles.Wrapper}>
          {orders.map((order, index) => {
            return (
              <div
                className={styles.Order}
                key={index}
                style={
                  index === orders.length - 1 ? { borderBottom: "none" } : {}
                }
              >
                <ProfileOrderItem OrderDetails={order} />
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <Preloader />
        </>
      )}
      {orders && orders.length === 0 && (
        <>
          <div className={styles.TopSec}>
            <h3 className={styles.Title}>{"Orders"}</h3>
          </div>
          <h4 className={styles.Stats}>
            <span className={styles.StatsSmall}>{"Found "}</span>
            <span className={styles.StatsBig}>&nbsp;{`0`}</span>
            <span className={styles.StatsSmall}>&nbsp;{"orders"}</span>
            <span className={styles.StatsSmall}>&nbsp;{"placed"}</span>
          </h4>
        </>
      )}
    </>
  );
}

export default OrdersSec;
