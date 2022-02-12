import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { UPDATE_ADD_ADDRESS_POPUP_STATE } from "../../Redux/ActionTypes";
import { CART_DATA } from "./../../Utils/Constants/StaticData";

import styles from "./CartMainSec.module.css";

import CartItem from "./CartItem";
import Button from "./../Button/index";
import { ReactComponent as PlusIcon } from "../../Assets/Cart/Plus.svg";
import notify from "./../../Utils/Helpers/notifyToast";
import { addCartToOrder } from "../../Services/order.service";

function CartMainSec({ cartData, addresses, refreshDataFunction }) {
  const userData = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();

  const [currentAddressIndex, setCurrentAddressIndex] = React.useState(0);

  const placeOrder = async () => {
    if (userData.address.length > 0) {
      try {
        const response = await addCartToOrder(
          userData.accessToken,
          userData.address[currentAddressIndex]
        );
        await refreshDataFunction();
        notify("Order Placed Successfully", "success");
      } catch (err) {
        console.log(err);
        notify("Something went wrong", "error");
      }
    } else {
      notify("Please add address", "error");
    }
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSec}>
        {cartData.map((cartItemData, index) => {
          return (
            <div className={styles.CartItemWrapper} key={index}>
              <CartItem
                itemData={cartItemData}
                isLast={index === cartData.length - 1}
                refreshDataFunction={refreshDataFunction}
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
                    {address.address}
                  </div>
                  <div className={styles.Pincode}>{address.pincode}</div>
                </div>
              );
            })}
          </div>
          <Button
            wrapperClass={styles.AddNewAddress}
            name={CART_DATA.addAddress}
            onClick={() => {
              dispatch({
                type: UPDATE_ADD_ADDRESS_POPUP_STATE,
                value: true,
              });
            }}
            inverted
            primaryColor={`var(--ter-black)`}
            hoverBgColor={`var(--white)`}
            withIcon
            IconComp={PlusIcon}
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
                  return acc + item.product_details.price;
                }, 0)}`}
              </div>
            </div>
          </div>
        </div>
        <Button
          name={CART_DATA.placeOrder}
          onClick={placeOrder}
          wrapperClass={styles.PlaceOrderButton}
          primaryColor={`var(--primary-blue)`}
        />
      </div>
    </div>
  );
}

export default CartMainSec;
