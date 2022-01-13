import React from "react";
import { PROFILE_DATA } from "../../../../../Utils/Constants/StaticData";
import { useEffect } from "react";
import styles from "./DashboardItem.module.css";
import { Link } from "react-router-dom";
function DashboardItem({ OrderDetails }) {
  const smoothLoading = (e) => {
    e.target.style.opacity = "1";
  };

  const getStatus = (status) => {
    switch (status) {
      case "Ordered":
        return "Not Confirmed";
      case "AskedForChange":
        return "Customer Asked For Change";
      case "AskedForApprove":
        return "Waiting For Approval";
      case "Confirmed":
        return "Order Confirmed";
      default:
        return "Order Confirmed";
    }
  };

  return (
    <Link className={styles.Wrapper} to={`/o/${OrderDetails._id}`}>
      <div className={styles.TopSec}>
        <div className={styles.KeyValuePair}>
          <h4 className={styles.Key}>
            {PROFILE_DATA.dashboardSec.orderPlaced}
          </h4>
          <h5 className={styles.Value}>
            {new Date(OrderDetails.created_at).toLocaleDateString()}
          </h5>
        </div>
        <div className={styles.KeyValuePair}>
          <h4 className={styles.Key}>{PROFILE_DATA.dashboardSec.total}</h4>
          <h5
            className={styles.Value}
          >{`₹${OrderDetails.product_details.price}`}</h5>
        </div>
        <div className={styles.KeyValuePair}>
          <h4 className={styles.Key}>{PROFILE_DATA.dashboardSec.status}</h4>
          <h5 className={styles.Value}>
            {getStatus(
              Object.keys(OrderDetails.status)[
                Object.keys(OrderDetails.status).length - 1
              ]
            )}
          </h5>
        </div>
      </div>
      <div className={styles.BottomSec}>
        <img
          src={OrderDetails.product_details.images[0]}
          alt="productImg"
          className={styles.ProductImg + " " + styles.SmoothLoading}
          onLoad={smoothLoading}
        />
        <div className={styles.ProductInfo}>
          <div className={styles.ProductInfoTop}>
            <h4 className={styles.ProductName}>
              {OrderDetails.product_details.title}
            </h4>
            {OrderDetails.size && (
              <div className={styles.SubKeyValuePairList}>
                <div className={styles.SubKeyValuePair}>
                  <h4 className={styles.SubKey}>
                    {PROFILE_DATA.dashboardSec.size}
                  </h4>
                  <h5 className={styles.SubValue}>{OrderDetails.size}</h5>
                </div>
              </div>
            )}
          </div>

          {OrderDetails.attachedFiles && (
            <div className={styles.AttchedFilesSec}>
              <h4 className={styles.AttchedFilesTitle}>
                {PROFILE_DATA.dashboardSec.attachedFiles}
              </h4>
              <div className={styles.AttachedFilesList}>
                {OrderDetails.attachedFiles.map((file, index) => {
                  return (
                    <img
                      key={index}
                      className={
                        styles.AttachedFile + " " + styles.SmoothLoading
                      }
                      src={file}
                      onLoad={smoothLoading}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default DashboardItem;
