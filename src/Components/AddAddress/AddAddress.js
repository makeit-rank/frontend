import React from "react";

import styles from "./AddAddress.module.css";

import { ADD_ADDRESS_POPUP_DATA } from "./../../Utils/Constants/StaticData";
import Button from "../Button";

function AddAddress({ closePopupFunction, refreshDataFunction }) {
  const addAddress = async (e) => {
    e.preventDefault();

    console.log("inputElems", e.target.elements);

    await refreshDataFunction();
    closePopupFunction();

    for (let i = 0; i < e.target.elements.length - 1; i++) {
      e.target.elements[i].value = " ";
    }
    console.log("addAddress");
  };

  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.Heading}>{ADD_ADDRESS_POPUP_DATA.title}</h3>
      <form className={styles.Form} onSubmit={addAddress}>
        <textarea
          type="text"
          placeholder={ADD_ADDRESS_POPUP_DATA.placeholders.address}
          className={styles.Input + " " + styles.Address}
          id="AddAdressText"
          autoComplete="address-line1"
        />
        <input
          type="number"
          placeholder={ADD_ADDRESS_POPUP_DATA.placeholders.pincode}
          className={styles.Input + " " + styles.Pincode}
          id="AddAdressPincode"
          autoComplete="postal-code"
        />
        <Button
          name={ADD_ADDRESS_POPUP_DATA.button.addAddress}
          primaryColor={`var(--primary-blue)`}
          wrapperClass={styles.ButtonWrapper}
        />
      </form>
    </div>
  );
}

export default AddAddress;
