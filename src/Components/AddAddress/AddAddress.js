import React from "react";

import styles from "./AddAddress.module.css";

import { ADD_ADDRESS_POPUP_DATA } from "./../../Utils/Constants/StaticData";
import Button from "../Button";

function AddAddress({ closePopupFunction, refreshDataFunction }) {
  const inputRefs = React.useRef({});

  const addAddress = async (e) => {
    e.preventDefault();

    console.log(
      "inputRefs",
      inputRefs.current.address.value,
      inputRefs.current.pincode.value
    );
    await refreshDataFunction();
    closePopupFunction();

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
          ref={(ref) => (inputRefs.current.address = ref)}
        />
        <input
          type="number"
          placeholder={ADD_ADDRESS_POPUP_DATA.placeholders.pincode}
          className={styles.Input + " " + styles.Pincode}
          id="AddAdressPincode"
          autoComplete="postal-code"
          ref={(ref) => (inputRefs.current.pincode = ref)}
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
