import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./WishlistIcon.module.css";

import { ReactComponent as HeartComp } from "../../Assets/_General/Heart.svg";
import { removeProductFromWishlist } from "../../Services/user.service";
import notify from "./../../Utils/Helpers/notifyToast";
import { addProductToWishlist } from "./../../Services/user.service";

function WishlistIcon({ productId }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const userData = useSelector((state) => state.userReducer.userData);

  useEffect(() => {
    if (userData) {
      setSelected(userData.wishlist.includes(productId));
    } else {
      setSelected(false);
    }
  }, [productId]);

  const handleOnClick = async (e) => {
    e.preventDefault();
    if (userData) {
      if (selected) {
        try {
          const result = await removeProductFromWishlist(
            userData.accessToken,
            productId
          );
          notify("Product removed from wishlist", "success");
          setSelected(false);
        } catch (err) {
          console.log(err);
          notify("Error removing product from wishlist", "error");
        }
      } else {
        try {
          const result = await addProductToWishlist(
            userData.accessToken,
            productId
          );
          notify("Product added to wishlist", "success");
          setSelected(true);
        } catch (err) {
          console.log(err);
          notify("Error adding product to wishlist", "error");
        }
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={styles.Wrapper} onClick={handleOnClick}>
      <HeartComp
        className={
          styles.WishListHeart + " " + (selected ? styles.WishlistedHeart : "")
        }
      />
    </div>
  );
}

export default WishlistIcon;
