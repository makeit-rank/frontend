import React, { useState } from "react";

import styles from "./ProductImageSec.module.css";
import Button from "./../../Button/index";
import { PRODUCT_PAGE_DATA } from "../../../Utils/Constants/StaticData";
import WishlistIcon from "./../../WishlistIcon/index";

function ProductImageSec({ images, productId }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSecWrapper}>
        {images.map((image, index) => (
          <div
            key={index}
            className={
              styles.ImageWrapper +
              " " +
              (index === currentImage ? styles.Active : "")
            }
            onMouseEnter={() => setCurrentImage(index)}
          >
            <img src={image} alt="product" className={styles.Image} />
          </div>
        ))}
      </div>
      <div className={styles.RightSecWrapper}>
        <div className={styles.PrimaryImageWrapper}>
          <img
            src={images[currentImage]}
            alt="product"
            className={styles.PrimaryImage}
            onLoad={(e) => {
              e.target.style.opacity = 1;
            }}
          />
          <div className={styles.AddToWishListWrapper}>
            <WishlistIcon productId={productId} />
          </div>
        </div>
        <div className={styles.ButtonsWrapper}>
          <Button
            name={PRODUCT_PAGE_DATA.addToCart}
            onClick={() => {
              console.log("add to cart");
            }}
            primaryColor="var(--primary-blue)"
            inverted
            wrapperClass={styles.AddToCartButton + " " + styles.Button}
          />
          <Button
            name={PRODUCT_PAGE_DATA.placeOrder}
            onClick={() => {
              console.log("place order");
            }}
            primaryColor="var(--primary-blue)"
            wrapperClass={styles.PlaceOrderButton + " " + styles.Button}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImageSec;
