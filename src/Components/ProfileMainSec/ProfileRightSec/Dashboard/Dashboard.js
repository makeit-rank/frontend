import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./Dashboard.module.css";

import Preloader from "../../../Preloader/Preloader";
import DashboardItem from "./ProfileOrderItem/index";
import { PROFILE_DATA } from "../../../../Utils/Constants/StaticData";
import notify from "./../../../../Utils/Helpers/notifyToast";
import { getOrderForSeller } from "../../../../Services/order.service";
function Dashboard() {
  const userData = useSelector((state) => state.userReducer.userData);
  const [orders, setOrders] = useState(null);
  const [highlightsData, setHighlightsData] = useState(["-", "-", "-"]);
  useEffect(() => {
    getOrders();
  }, [userData]);
  const countHighlights = (orders) => {
    setHighlightsData(["-", "-", "-"]);
    let TotalEarnings = 0;
    let MonthEarnings = 0;
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].status.Delivered) {
        if (
          (new Date(orders[i].created_at).getMonth(),
          new Date().getMonth(),
          new Date(orders[i].created_at).getFullYear(),
          new Date().getFullYear())
        ) {
          MonthEarnings += orders[i].product_details.price;
        }
        TotalEarnings += orders[i].product_details.price;
      }
    }
    return [orders.length, MonthEarnings, TotalEarnings];
  };

  const getOrders = async () => {
    setOrders(null);
    try {
      const response = await getOrderForSeller(userData.accessToken);
      setOrders(response);
      setHighlightsData(countHighlights(response));
    } catch (err) {
      notify("Something went wrong!", "error");
    }
  };

  return (
    <>
      {orders ? (
        <div className={styles.Wrapper}>
          <div className={styles.TopWrapper}>
            {highlightsData.map((item, index) => {
              return (
                <div className={styles.Highlight} key={index}>
                  <h4 className={styles.HighlightTitle}>
                    {PROFILE_DATA.dashboardSec.highlights[index]}
                  </h4>
                  <h3 className={styles.HighlightValue}>
                    {index != 0 && "₹"}
                    {item}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className={styles.BottomWrapper}>
            <h3 className={styles.Title}>
              {PROFILE_DATA.dashboardSec.ordersReceived}
            </h3>
            {orders.map((order, index) => {
              return (
                <div
                  className={styles.Order}
                  key={index}
                  style={
                    index === orders.length - 1 ? { borderBottom: "none" } : {}
                  }
                >
                  <DashboardItem OrderDetails={order} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <Preloader />
        </>
      )}
    </>
  );
}

export default Dashboard;
