import React from "react";
import { useSelector } from "react-redux";

import styles from "./CartItem.module.css";
import { CART_DATA } from "./../../../Utils/Constants/StaticData";
import Button from "./../../Button/index";

import { ReactComponent as DeleteIcon } from "../../../Assets/Cart/Delete.svg";
import { ReactComponent as HeartIcon } from "../../../Assets/Cart/Heart.svg";
import {
  moveProductFromCartToWishlist,
  removeCartItem,
} from "./../../../Services/user.service";
import notify from "./../../../Utils/Helpers/notifyToast";
import { Link } from "react-router-dom";

function CartItem({ itemData, isLast, refreshDataFunction }) {
  const userData = useSelector((state) => state.userReducer.userData);

  const removeItem = async () => {
    try {
      const response = await removeCartItem(userData.accessToken, itemData._id);
      await refreshDataFunction();
      notify("Item successfully removed from cart", "success");
    } catch (err) {
      console.log(err);
      notify("Something went wrong", "error");
    }
  };

  const moveToWishlist = async () => {
    try {
      const response = await moveProductFromCartToWishlist(
        userData.accessToken,
        itemData._id
      );
      await refreshDataFunction();
      notify("Item successfully moved to wishlist", "success");
    } catch (err) {
      console.log(err);
      notify("Something went wrong", "error");
    }
  };

  return (
    <div
      className={styles.Wrapper}
      style={isLast ? { borderBottom: "none" } : {}}
    >
      <div className={styles.UpperSec}>
        <div className={styles.LeftSec}>
          <Link to={`/p/${itemData.product_id}`} className={styles.ImageWrapperLink}>
            <img
              src={itemData.product_details.images[0]}
              alt="product"
              className={styles.Image}
            />
          </Link>
          <div className={styles.SubRightSec}>
            <div className={styles.ProductInfo}>
              <div className={styles.ProductName}>
                {itemData.product_details.title}
              </div>
              <div className={styles.ProductInfoList}>
                <div className={styles.ProductInfoItem}>
                  <div className={styles.ProductInfoItemKey}>
                    {CART_DATA.seller}
                  </div>
                  <div className={styles.ProductInfoItemValue}>
                    {itemData.product_details.shop_name}
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
            <div
              className={styles.ProductPrice}
            >{`₹${itemData.product_details.price}`}</div>
          </div>
        </div>
        <div className={styles.RightSec}>
          <Button
            name={CART_DATA.remove}
            onClick={removeItem}
            inverted
            primaryColor={`var(--ter-black)`}
            hoverBgColor={`var(--white)`}
            wrapperClass={styles.RemoveButton + " " + styles.ButtonWrapper}
            withIcon
            IconComp={DeleteIcon}
            // hoverBgColor={`#FFF6F6`}
            // hoverColor={`#FF1212`}
          />
          <Button
            name={CART_DATA.moveToWishlist}
            onClick={moveToWishlist}
            inverted
            primaryColor={`var(--ter-black)`}
            hoverBgColor={`var(--white)`}
            wrapperClass={
              styles.MoveToWishlistButton + " " + styles.ButtonWrapper
            }
            withIcon
            IconComp={HeartIcon}
          />
        </div>
      </div>
      {itemData.attachedFiles?.length > 0 && (
        <div className={styles.LowerSec}>
          <h4 className={styles.LowerHeading}>{CART_DATA.attachedFiles}</h4>
          <div className={styles.AttachedFilesList}>
            {itemData.attachedFiles.map((image, index) => {
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
