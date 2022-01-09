import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./Dashboard.module.css";

import Preloader from "../../../Preloader/Preloader";
import DashboardItem from "./ProfileOrderItem/index";
import { PROFILE_DATA } from "../../../../Utils/Constants/StaticData";

function Dashboard() {
  const userData = useSelector((state) => state.userReducer.userData);
  const [orders, setOrders] = useState(null);
  const [highlightsData, setHighlightsData] = useState(["-", "-", "-"]);

  useEffect(() => {
    setTimeout(() => {
      setOrders(null);
      fetchOrders();
    }, 300);
  }, [userData]);

  const fetchOrders = () => {
    let tmpOrdersData = Array(7)
      .fill({})
      .map((_, index) => {
        return {
          id: Math.floor(Math.random() * 100000000),
          timestamp: new Date().getTime(),
          total: Math.floor(Math.random() * 1000),
          status: "Delivered",
          productDetails: {
            image: `https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
            title: `Printed Men Hooded Block Round Neck Black T-Shirt`,
            size: Math.random() > 0.3 ? "XL" : undefined,
            attachedFiles:
              // Math.random() > 0.5
              [
                "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80",
                "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80",
                "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              ],
            // : undefined,
          },
        };
      });
    setOrders(tmpOrdersData);
    setHighlightsData(
      Array(3)
        .fill(0)
        .map((_, index) => {
          return Math.floor(Math.random() * 100);
        })
    );
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
