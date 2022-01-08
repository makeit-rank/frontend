import React from "react";
import { PROFILE_DATA } from "../../../../../Utils/Constants/StaticData";

import styles from "./ProfileOrderItem.module.css";
function ProfileOrderItem({ OrderDetails }) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.TopSec}>
        <div className={styles.KeyValuePair}>
          <h4 className={styles.Key}>{PROFILE_DATA.ordersSec.orderPlaced}</h4>
          <h5 className={styles.Value}>
            {new Date(OrderDetails.timestamp).toLocaleDateString()}
          </h5>
        </div>
        <div className={styles.KeyValuePair}>
          <h4 className={styles.Key}>{PROFILE_DATA.ordersSec.total}</h4>
          <h5 className={styles.Value}>{`₹${OrderDetails.total}`}</h5>
        </div>
        <div className={styles.KeyValuePair}>
          <h4 className={styles.Key}>{PROFILE_DATA.ordersSec.id}</h4>
          <h5 className={styles.Value}>{OrderDetails.id}</h5>
        </div>
      </div>
      <div className={styles.BottomSec}>
        <img
          src={OrderDetails.productDetails.image}
          alt="productImg"
          className={styles.ProductImg}
        />
        <div className={styles.ProductInfo}>
          <div className={styles.ProductInfoTop}>
            <h4 className={styles.ProductName}>
              {OrderDetails.productDetails.title}
            </h4>
            <div className={styles.SubKeyValuePairList}>
              <div className={styles.SubKeyValuePair}>
                <h4 className={styles.SubKey}>
                  {PROFILE_DATA.ordersSec.seller}
                </h4>
                <h5 className={styles.SubValue}>
                  {OrderDetails.productDetails.seller}
                </h5>
              </div>
              {OrderDetails.productDetails.size && (
                <div className={styles.SubKeyValuePair}>
                  <h4 className={styles.SubKey}>
                    {PROFILE_DATA.ordersSec.size}
                  </h4>
                  <h5 className={styles.SubValue}>
                    {OrderDetails.productDetails.size}
                  </h5>
                </div>
              )}
            </div>
          </div>

          {OrderDetails.productDetails.attachedFiles && (
            <div className={styles.AttchedFilesSec}>
              <h4 className={styles.AttchedFilesTitle}>
                {PROFILE_DATA.ordersSec.attachedFiles}
              </h4>
              <div className={styles.AttachedFilesList}>
                {OrderDetails.productDetails.attachedFiles.map(
                  (file, index) => {
                    return (
                      <img
                        key={index}
                        className={styles.AttachedFile}
                        src={file}
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

export default ProfileOrderItem;
