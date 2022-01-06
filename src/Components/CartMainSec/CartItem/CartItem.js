import React from "react";

import styles from "./CartItem.module.css";
import { CART_DATA } from "./../../../Utils/Constants/StaticData";
import Button from "./../../Button/index";

function CartItem({ itemData, isLast }) {
  return (
    <div
      className={styles.Wrapper}
      style={isLast ? { borderBottom: "none" } : {}}
    >
      <div className={styles.UpperSec}>
        <div className={styles.LeftSec}>
          <img src={itemData.image} alt="product" className={styles.Image} />
          <div className={styles.SubRightSec}>
            <div className={styles.ProductInfo}>
              <div className={styles.ProductName}>{itemData.title}</div>
              <div className={styles.ProductInfoList}>
                <div className={styles.ProductInfoItem}>
                  <div className={styles.ProductInfoItemKey}>
                    {CART_DATA.seller}
                  </div>
                  <div className={styles.ProductInfoItemValue}>
                    {itemData.seller}
                  </div>
                </div>
                {itemData.size && (
                  <div className={styles.ProductInfoItem}>
                    <div className={styles.ProductInfoItemKey}>
                      {CART_DATA.size}
                    </div>
                    <div
                      className={
                        styles.ProductInfoItemValue + " " + styles.Size
                      }
                    >
                      {itemData.size}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.ProductPrice}>{`₹${itemData.price}`}</div>
          </div>
        </div>
        <div className={styles.RightSec}>
          <Button
            name={CART_DATA.remove}
            onClick={() => {}}
            inverted
            primaryColor={`var(--ter-black)`}
            hoverBgColor={`var(--white)`}
            wrapperClass={styles.RemoveButton + " " + styles.ButtonWrapper}
            // hoverBgColor={`#FFF6F6`}
            // hoverColor={`#FF1212`}
          />
          <Button
            name={CART_DATA.moveToWishlist}
            onClick={() => {}}
            inverted
            primaryColor={`var(--ter-black)`}
            hoverBgColor={`var(--white)`}
            wrapperClass={
              styles.MoveToWishlistButton + " " + styles.ButtonWrapper
            }
          />
        </div>
      </div>
      {itemData.attachedImages?.length > 0 && (
        <div className={styles.LowerSec}>
          <h4 className={styles.LowerHeading}>{CART_DATA.attachedFiles}</h4>
          <div className={styles.AttachedFilesList}>
            {itemData.attachedImages.map((image, index) => {
              return (
                <img
                  src={image}
                  alt="product"
                  key={index}
                  className={styles.AttchedItemImage}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
