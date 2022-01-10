import React from "react";
import { ORDER_DETAILS_DATA } from "../../../Utils/Constants/StaticData";

import styles from "./OrderPageTop.module.css";
function OrderPageTop({ orderDetails, sellerPerspective }) {
  const smoothLoading = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.OrderDetailsTitle}>{ORDER_DETAILS_DATA.title}</h2>
      <div className={styles.PrimaryInfoWrapper}>
        <div className={styles.TopSec}>
          <div className={styles.KeyValuePair}>
            <h4 className={styles.Key}>{ORDER_DETAILS_DATA.orderPlaced}</h4>
            <h5 className={styles.Value}>
              {new Date(orderDetails.timestamp).toLocaleDateString()}
            </h5>
          </div>
          <div className={styles.KeyValuePair}>
            <h4 className={styles.Key}>{ORDER_DETAILS_DATA.total}</h4>
            <h5 className={styles.Value}>{`₹${orderDetails.total}`}</h5>
          </div>
          <div className={styles.KeyValuePair}>
            <h4 className={styles.Key}>{ORDER_DETAILS_DATA.id}</h4>
            <h5 className={styles.Value}>{orderDetails.id}</h5>
          </div>
        </div>
        <div className={styles.BottomSec}>
          <img
            src={orderDetails.productDetails.image}
            alt="productImg"
            className={styles.ProductImg + " " + styles.SmoothLoading}
            onLoad={smoothLoading}
          />
          <div className={styles.ProductInfo}>
            <div className={styles.ProductInfoTop}>
              <h4 className={styles.ProductName}>
                {orderDetails.productDetails.title}
              </h4>
              <div className={styles.SubKeyValuePairList}>
                {!sellerPerspective && (
                  <div className={styles.SubKeyValuePair}>
                    <h4 className={styles.SubKey}>
                      {ORDER_DETAILS_DATA.seller}
                    </h4>
                    <h5 className={styles.SubValue}>
                      {orderDetails.productDetails.seller}
                    </h5>
                  </div>
                )}
                {orderDetails.productDetails.size && (
                  <div className={styles.SubKeyValuePair}>
                    <h4 className={styles.SubKey}>{ORDER_DETAILS_DATA.size}</h4>
                    <h5 className={styles.SubValue}>
                      {orderDetails.productDetails.size}
                    </h5>
                  </div>
                )}
              </div>
            </div>

            {orderDetails.productDetails.attachedFiles && (
              <div className={styles.AttchedFilesSec}>
                <h4 className={styles.AttchedFilesTitle}>
                  {ORDER_DETAILS_DATA.attachedFiles}
                </h4>
                <div className={styles.AttachedFilesList}>
                  {orderDetails.productDetails.attachedFiles.map(
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
      {!sellerPerspective && (
        <div className={styles.AddressSec}>
          <h4 className={styles.AddressTitle}>
            {ORDER_DETAILS_DATA.deliveryAddress}
          </h4>
          <p className={styles.Address}>{orderDetails.deliveryAddress}</p>
        </div>
      )}
    </div>
  );
}

export default OrderPageTop;
