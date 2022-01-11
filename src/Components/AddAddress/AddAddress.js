import React from "react";
import { useSelector } from "react-redux";

import styles from "./AddAddress.module.css";

import { addAddress } from "../../Services/user.service";
import { ADD_ADDRESS_POPUP_DATA } from "./../../Utils/Constants/StaticData";

import Button from "../Button";
import notify from "./../../Utils/Helpers/notifyToast";

function AddAddress({ closePopupFunction, refreshDataFunction }) {
  const userData = useSelector((state) => state.userReducer.userData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("inputElems", e.target.elements);

    try {
      const data = await addAddress(userData.accessToken, {
        address: e.target.elements.AddAdressText.value,
        pincode: e.target.elements.AddAdressPincode.value,
      });
      notify("Address added successfully", "success");
      await refreshDataFunction();
      e.target.reset();
      closePopupFunction();
    } catch (err) {
      notify(err.response.data, "error");
      console.log("err", err);
    }
  };

  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.Heading}>{ADD_ADDRESS_POPUP_DATA.title}</h3>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder={ADD_ADDRESS_POPUP_DATA.placeholders.address}
          className={styles.Input + " " + styles.address}
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
