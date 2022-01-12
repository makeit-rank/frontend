import React from "react";

import styles from "./WishListItem.module.css";

import { PROFILE_DATA } from "../../../../../Utils/Constants/StaticData";

import Ratings from "../../../../Ratings";
import Button from "../../../../Button";
import { ReactComponent as DeleteIcon } from "../../../../../Assets/Wishlist/Delete.svg";
import { Link } from "react-router-dom";

function WishListItem({ wishlistItem }) {
  const smoothLoading = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    <Link
      className={styles.Wrapper}
      to={`/p/${wishlistItem.productDetails.id}`}
    >
      <div className={styles.LeftSec}>
        <img
          src={wishlistItem.productDetails.image}
          alt="productImg"
          className={styles.ProductImg + " " + styles.SmoothLoading}
          onLoad={smoothLoading}
        />
        <div className={styles.ProductInfo}>
          <div className={styles.ProductInfoTop}>
            <h4 className={styles.ProductName}>
              {wishlistItem.productDetails.title}
            </h4>
            <h5 className={styles.SellerName}>
              {wishlistItem.productDetails.seller}
            </h5>
            <div className={styles.Rating}>
              <div className={styles.RatingWrapper}>
                <Ratings rating={wishlistItem.productDetails.star} />
              </div>
              <div className={styles.RatingCount}>
                {wishlistItem.productDetails.count}{" "}
                {PROFILE_DATA.wishlistSec.reviews}
              </div>
            </div>
          </div>
          <div className={styles.ProductInfoBottom}>
            <h5
              className={styles.Price}
            >{`₹${wishlistItem.productDetails.price}`}</h5>
          </div>
        </div>
      </div>
      <div className={styles.RightSec}>
        <Button
          name={PROFILE_DATA.wishlistSec.remove}
          onClick={(e) => {
            e.preventDefault();
          }}
          inverted
          primaryColor={`var(--ter-black)`}
          hoverBgColor={`var(--white)`}
          wrapperClass={styles.RemoveButton}
          withIcon
          IconComp={DeleteIcon}
        />
      </div>
    </Link>
  );
}

export default WishListItem;
