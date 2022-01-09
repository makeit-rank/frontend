import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./WishList.module.css";

import Preloader from "../../../Preloader/Preloader";
import WishListItem from "./WishListItem/index";

function WishList() {
  const userData = useSelector((state) => state.userReducer.userData);
  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setWishlist(null);
      fetchWishlist();
    }, 300);
  }, [userData]);

  const fetchWishlist = () => {
    let tmpData = Array(7)
      .fill({})
      .map((_, index) => {
        return {
          id: Math.floor(Math.random() * 100000000),
          productDetails: {
            id: Math.floor(Math.random() * 100000000),
            image: `https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
            title: `Printed Men Hooded Block Round Neck Black T-Shirt`,
            seller: `Blive  Enterprise`,
            price: Math.floor(Math.random() * 1000),
            rating:
              Math.floor(Math.random()) * 3 +
              1 +
              Math.floor(Math.random() * 10) / 10,
            noOfRatings: Math.floor(Math.random() * 100),
          },
        };
      });
    setWishlist(tmpData);
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
