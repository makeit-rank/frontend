import React from "react";

import styles from "./CartMainSec.module.css";

import CartItem from "./CartItem";
import { CART_DATA } from "./../../Utils/Constants/StaticData";
import Button from "./../Button/index";

function CartMainSec({ cartData, addresses }) {
  const [currentAddressIndex, setCurrentAddressIndex] = React.useState(0);

  console.log("cartData", cartData);
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSec}>
        {cartData.map((cartItemData, index) => {
          return (
            <div className={styles.CartItemWrapper} key={index}>
              <CartItem
                itemData={cartItemData}
                isLast={index === cartData.length - 1}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.RightSec}>
        <div className={styles.RightSecTop}>
          <h5 className={styles.RightHeading + " " + styles.DeliverTo}>
            {CART_DATA.deleiverTo}
          </h5>
          <div className={styles.AddressList}>
            {addresses.map((address, index) => {
              return (
                <div
                  key={index}
                  className={
                    styles.AddressItem +
                    " " +
                    (index === currentAddressIndex ? styles.ActiveAddress : "")
                  }
                  onClick={() => setCurrentAddressIndex(index)}
                >
                  <div className={styles.AddressItemContent}>
                    {address.Address}
                  </div>
                  <div className={styles.Pincode}>{address.pincode}</div>
                </div>
              );
            })}
          </div>
          <Button
            wrapperClass={styles.AddNewAddress}
            name={CART_DATA.addAddress}
            onClick={() => {}}
            inverted
            primaryColor={`var(--ter-black)`}
            hoverBgColor={`var(--white)`}
          />
          <h5 className={styles.RightHeading + " " + styles.PaymentHeading}>
            {CART_DATA.payment}
          </h5>
          <div className={styles.PaymentList}>
            <div className={styles.PaymentListItem}>
              <div className={styles.PaymentListItemKey}>
                {CART_DATA.totalItems}
              </div>
              <div className={styles.PaymentListItemValue}>
                {cartData.length}
              </div>
            </div>
            <div className={styles.PaymentListItem}>
              <div className={styles.PaymentListItemKey}>
                {CART_DATA.totalAmount}
              </div>
              <div className={styles.PaymentListItemValue}>
                {`₹${cartData.reduce((acc, item) => {
                  return acc + item.price;
                }, 0)}`}
              </div>
            </div>
          </div>
        </div>
        <Button
          name={CART_DATA.placeOrder}
          onClick={() => {}}
          wrapperClass={styles.PlaceOrderButton}
          primaryColor={`var(--primary-blue)`}
        />
      </div>
    </div>
  );
}

export default CartMainSec;
