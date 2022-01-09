import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./SellerProducts.module.css";

import { PROFILE_DATA } from "../../../../Utils/Constants/StaticData";

import Preloader from "../../../Preloader/Preloader";
import SellerProductsItem from "./WishListItem/index";
import Button from "./../../../Button/index";
import { ReactComponent as PlusIcon } from "../../../../Assets/SellerProductList/Plus.svg";

function SellerProducts() {
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
          <div className={styles.TopSec}>
            <h3 className={styles.Title}>{PROFILE_DATA.productsSec.title}</h3>
            <Button
              name={PROFILE_DATA.productsSec.addNewProduct}
              primaryColor={`var(--primary-blue)`}
              inverted
              wrapperClass={styles.AddNewProductBtn}
              onClick={(e) => {
                e.preventDefault();
              }}
              withIcon
              IconComp={PlusIcon}
            />
          </div>

          <div className={styles.BottomSec}>
            {wishlist.map((listItem, index) => {
              return (
                <div
                  className={styles.LIstItemWrapper}
                  key={index}
                  style={
                    index === wishlist.length - 1
                      ? { borderBottom: "none" }
                      : {}
                  }
                >
                  <SellerProductsItem itemData={listItem} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <Preloader />
        </>
      )}
    </>
  );
}

export default SellerProducts;
