import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./WishlistIcon.module.css";

import { ReactComponent as HeartComp } from "../../Assets/_General/Heart.svg";

function WishlistIcon({ productId }) {
  const [selected, setSelected] = useState(false);
  const userData = useSelector((state) => state.userReducer.userData);

  useEffect(() => {
    setSelected(userData.wishlist.includes(productId));
  }, [productId]);

  return (
    <div className={styles.Wrapper} onClick={() => setSelected(!selected)}>
      <HeartComp
        className={
          styles.WishListHeart + " " + (selected ? styles.WishlistedHeart : "")
        }
      />
    </div>
  );
}

export default WishlistIcon;
