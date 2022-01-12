import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./ItemCard.module.css";

import Ratings from "../Ratings";

import { HOME_DATA } from "./../../Utils/Constants/StaticData";
import WishlistIcon from "./../WishlistIcon/index";

export default function ItemCard({ itemData }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    // check if item is wishlisted
    setSelected(Math.random() > 0.5);
  }, []);

  return (
    <div className={styles.Wrapper}>
      <Link to={`/p/${itemData._id}`}>
        <div className={styles.UpperSec}>
          <img src={itemData.images[0]} alt="item" className={styles.Image} />
          <div className={styles.AddToWishList}>
            <WishlistIcon productId={itemData._id} />
          </div>
        </div>
        <div className={styles.LowerSec}>
          <div className={styles.Seller}>{itemData.seller}</div>
          <h5 className={styles.Title}>{itemData.title}</h5>
          <div className={styles.Price}>
            {"₹"} {itemData.price}
          </div>
          <div className={styles.Rating}>
            <div className={styles.RatingWrapper}>
              <Ratings rating={itemData.star} />
            </div>
            <div className={styles.RatingCount}>
              {itemData.count} {HOME_DATA.ratings}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
