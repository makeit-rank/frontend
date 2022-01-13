import React from "react";
import { Link } from "react-router-dom";
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
              {new Date(orderDetails.created_at).toLocaleDateString()}
            </h5>
          </div>
          <div className={styles.KeyValuePair}>
            <h4 className={styles.Key}>{ORDER_DETAILS_DATA.total}</h4>
            <h5
              className={styles.Value}
            >{`₹${orderDetails.product_details.price}`}</h5>
          </div>
          <div className={styles.KeyValuePair}>
            <h4 className={styles.Key}>{ORDER_DETAILS_DATA.id}</h4>
            <h5 className={styles.Value}>{orderDetails._id}</h5>
          </div>
        </div>
        <div className={styles.BottomSec}>
          <img
            src={orderDetails.product_details.images[0]}
            alt="productImg"
            className={styles.ProductImg + " " + styles.SmoothLoading}
            onLoad={smoothLoading}
          />
          <div className={styles.ProductInfo}>
            <div className={styles.ProductInfoTop}>
              <h4 className={styles.ProductName}>
                {orderDetails.product_details.title}
              </h4>
              <div className={styles.SubKeyValuePairList}>
                {!sellerPerspective && (
                  <div className={styles.SubKeyValuePair}>
                    <h4 className={styles.SubKey}>
                      {ORDER_DETAILS_DATA.seller}
                    </h4>
                    <h5 className={styles.SubValue}>
                      {orderDetails.product_details.shop_name}
                    </h5>
                  </div>
                )}
                {orderDetails.size && (
                  <div className={styles.SubKeyValuePair}>
                    <h4 className={styles.SubKey}>{ORDER_DETAILS_DATA.size}</h4>
                    <h5 className={styles.SubValue}>{orderDetails.size}</h5>
                  </div>
                )}
              </div>
            </div>

            {orderDetails.attachedFiles && (
              <div className={styles.AttchedFilesSec}>
                <h4 className={styles.AttchedFilesTitle}>
                  {ORDER_DETAILS_DATA.attachedFiles}
                </h4>
                <div className={styles.AttachedFilesList}>
                  {orderDetails.attachedFiles.map((file, index) => {
                    return (
                      <a
                        href={file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.AttachedFile}
                        key={index}
                      >
                        <img
                          className={
                            styles.AttachedFile + " " + styles.SmoothLoading
                          }
                          src={file}
                          onLoad={smoothLoading}
                        />
                      </a>
                    );
                  })}
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
          <p className={styles.Address}>
            {orderDetails.address.address +
              " - " +
              orderDetails.address.pincode}
          </p>
        </div>
      )}
    </div>
  );
}

export default OrderPageTop;
