import React, { useState, useEffect } from "react";

import styles from "./WishlistIcon.module.css";

import { ReactComponent as HeartComp } from "../../Assets/_General/Heart.svg";

function WishlistIcon({ productId }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    // check if item is wishlisted
    setSelected(Math.random() > 0.5);
  }, []);
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
