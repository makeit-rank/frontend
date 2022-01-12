import React from "react";

import styles from "./SellerProductsItem.module.css";

import { PROFILE_DATA } from "../../../../../Utils/Constants/StaticData";

import Ratings from "../../../../Ratings";
import { Link } from "react-router-dom";

function SellerProductsItem({ itemData }) {
  const smoothLoading = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    <Link className={styles.Wrapper} to={`/p/${itemData._id}`}>
      <img
        src={itemData.images[0]}
        alt="productImg"
        className={styles.ProductImg + " " + styles.SmoothLoading}
        onLoad={smoothLoading}
      />
      <div className={styles.ProductInfo}>
        <div className={styles.ProductInfoTop}>
          <h4 className={styles.ProductName}>{itemData.title}</h4>
          <div className={styles.Rating}>
            <div className={styles.RatingWrapper}>
              <Ratings rating={itemData.star} />
            </div>
            <div className={styles.RatingCount}>
              {itemData.count} {PROFILE_DATA.wishlistSec.reviews}
            </div>
          </div>
        </div>
        <div className={styles.ProductInfoBottom}>
          <h5 className={styles.Price}>{`₹${itemData.price}`}</h5>
        </div>
      </div>
    </Link>
  );
}

export default SellerProductsItem;
