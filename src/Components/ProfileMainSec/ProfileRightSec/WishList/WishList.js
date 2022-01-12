import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./WishList.module.css";

import Preloader from "../../../Preloader/Preloader";
import WishListItem from "./WishListItem/index";
import { getWishlist } from "../../../../Services/user.service";

function WishList({ refreshUserData }) {
  const userData = useSelector((state) => state.userReducer.userData);
  const [wishlist, setWishlist] = useState(null);

  useEffect(async () => {
    await getWishlist(userData.accessToken).then((data) => {
      setWishlist(data);
    });
  }, [userData]);

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
                <WishListItem
                  wishlistItem={listItem}
                  refreshUserData={refreshUserData}
                />
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
