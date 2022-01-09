import React from "react";
import { PROFILE_DATA } from "../../../../../Utils/Constants/StaticData";

import styles from "./DashboardItem.module.css";
function DashboardItem({ OrderDetails }) {
  const smoothLoading = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.TopSec}>
        <div className={styles.KeyValuePair}>
          <h4 className={styles.Key}>
            {PROFILE_DATA.dashboardSec.orderPlaced}
          </h4>
          <h5 className={styles.Value}>
            {new Date(OrderDetails.timestamp).toLocaleDateString()}
          </h5>
        </div>
        <div className={styles.KeyValuePair}>
          <h4 className={styles.Key}>{PROFILE_DATA.dashboardSec.total}</h4>
          <h5 className={styles.Value}>{`₹${OrderDetails.total}`}</h5>
        </div>
        <div className={styles.KeyValuePair}>
          <h4 className={styles.Key}>{PROFILE_DATA.dashboardSec.status}</h4>
          <h5 className={styles.Value}>{OrderDetails.status}</h5>
        </div>
      </div>
      <div className={styles.BottomSec}>
        <img
          src={OrderDetails.productDetails.image}
          alt="productImg"
          className={styles.ProductImg + " " + styles.SmoothLoading}
          onLoad={smoothLoading}
        />
        <div className={styles.ProductInfo}>
          <div className={styles.ProductInfoTop}>
            <h4 className={styles.ProductName}>
              {OrderDetails.productDetails.title}
            </h4>
            {OrderDetails.productDetails.size && (
              <div className={styles.SubKeyValuePairList}>
                <div className={styles.SubKeyValuePair}>
                  <h4 className={styles.SubKey}>
                    {PROFILE_DATA.dashboardSec.size}
                  </h4>
                  <h5 className={styles.SubValue}>
                    {OrderDetails.productDetails.size}
                  </h5>
                </div>
              </div>
            )}
          </div>

          {OrderDetails.productDetails.attachedFiles && (
            <div className={styles.AttchedFilesSec}>
              <h4 className={styles.AttchedFilesTitle}>
                {PROFILE_DATA.dashboardSec.attachedFiles}
              </h4>
              <div className={styles.AttachedFilesList}>
                {OrderDetails.productDetails.attachedFiles.map(
                  (file, index) => {
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
                  }
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardItem;
