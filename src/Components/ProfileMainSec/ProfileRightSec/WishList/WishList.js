import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./WishList.module.css";

import Preloader from "../../../Preloader/Preloader";
import WishListItem from "./WishListItem/index";
import { getWishlist } from "../../../../Services/user.service";
import notify from "./../../../../Utils/Helpers/notifyToast";

function WishList() {
  const userData = useSelector((state) => state.userReducer.userData);
  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    getWishlistItems();
  }, [userData]);

  const getWishlistItems = async () => {
    setWishlist(null);
    try {
      const response = await getWishlist(userData.accessToken);
      setWishlist(response);
    } catch (error) {
      console.log(error);
      notify("Something went wrong", "error");
    }
  };

  return (
    <>
      {wishlist ? (
        <div className={styles.Wrapper}>
          {wishlist.map((listItem, index) => {
            return (
              <div
                className={styles.LIstItemWrapper}
                key={index}
                style={
                  index === wishlist.length - 1 ? { borderBottom: "none" } : {}
                }
              >
                <WishListItem wishlistItem={listItem} />
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <Preloader />
        </>
      )}
    </>
  );
}

export default WishList;
