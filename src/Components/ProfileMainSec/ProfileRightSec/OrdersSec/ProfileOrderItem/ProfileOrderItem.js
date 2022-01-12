import React from "react";
import { Link } from "react-router-dom";
import { PROFILE_DATA } from "../../../../../Utils/Constants/StaticData";

import styles from "./ProfileOrderItem.module.css";
function ProfileOrderItem({ OrderDetails }) {
  const smoothLoading = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    <Link className={styles.Wrapper} to={`/o/${OrderDetails._id}`}>
      <div className={styles.TopSec}>
        <div className={styles.KeyValuePair}>
          <h4 className={styles.Key}>{PROFILE_DATA.ordersSec.orderPlaced}</h4>
          <h5 className={styles.Value}>
            {new Date(OrderDetails.created_at).toLocaleDateString()}
          </h5>
        </div>
        <div className={styles.KeyValuePair}>
          <h4 className={styles.Key}>{PROFILE_DATA.ordersSec.total}</h4>
          <h5
            className={styles.Value}
          >{`₹${OrderDetails.product_details.price}`}</h5>
        </div>
        <div className={styles.KeyValuePair}>
          <h4 className={styles.Key}>{PROFILE_DATA.ordersSec.id}</h4>
          <h5 className={styles.Value}>{OrderDetails._id}</h5>
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
            <div className={styles.SubKeyValuePairList}>
              <div className={styles.SubKeyValuePair}>
                <h4 className={styles.SubKey}>
                  {PROFILE_DATA.ordersSec.seller}
                </h4>
                <h5 className={styles.SubValue}>
                  {OrderDetails.product_details.shop_name}
                </h5>
              </div>
              {OrderDetails.product_details.size && (
                <div className={styles.SubKeyValuePair}>
                  <h4 className={styles.SubKey}>
                    {PROFILE_DATA.ordersSec.size}
                  </h4>
                  <h5 className={styles.SubValue}>
                    {OrderDetails.product_details.size}
                  </h5>
                </div>
              )}
            </div>
          </div>

          {OrderDetails.attachedFiles?.length > 0 && (
            <div className={styles.AttchedFilesSec}>
              <h4 className={styles.AttchedFilesTitle}>
                {PROFILE_DATA.ordersSec.attachedFiles}
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

export default ProfileOrderItem;
