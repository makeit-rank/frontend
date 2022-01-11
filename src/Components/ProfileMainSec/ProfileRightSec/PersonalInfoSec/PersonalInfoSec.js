import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./PersonalInfoSec.module.css";

import { PROFILE_DATA } from "../../../../Utils/Constants/StaticData";

import Button from "./../../../Button";
import { ReactComponent as PlusImg } from "../../../../Assets/Profile/Plus.svg";
import { UPDATE_ADD_ADDRESS_POPUP_STATE } from "../../../../Redux/ActionTypes";

function PersonalInfoSec() {
  const userData = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.TopSec}>
        <h3 className={styles.Title}>{PROFILE_DATA.personalInfoSec.title}</h3>
      </div>

      <div className={styles.BottomSec}>
        <div className={styles.KeyValuePairs}>
          {(userData.isSeller
            ? PROFILE_DATA.personalInfoSec.feilds.slice(0, 5)
            : PROFILE_DATA.personalInfoSec.feilds.slice(0, 3)
          ).map((feild, index) => {
            return (
              <div className={styles.KeyValuePair} key={index}>
                <h4 className={styles.Key}>{feild.key}</h4>
                <h5 className={styles.Value}>{userData[feild.value]}</h5>
              </div>
            );
          })}
          {userData.isSeller && (
            <div
              className={styles.KeyValuePair + " " + styles.PickupAddressPair}
            >
              <h4 className={styles.Key}>
                {PROFILE_DATA.personalInfoSec.feilds[5].key}
              </h4>
              <h5 className={styles.PickupAddress}>
                {/* {userData[PROFILE_DATA.personalInfoSec.feilds[5].value]} */}
                <p className={styles.Value}>{userData.pickupAddress.address}</p>
                <p className={styles.Value}>{userData.pickupAddress.pincode}</p>
              </h5>
            </div>
          )}
          {/* <div className={styles.KeyValuePair}>
            <h4 className={styles.Key}>
              {PROFILE_DATA.personalInfoSec.feilds.name}
            </h4>
            <h5 className={styles.Value}>{userData.name}</h5>
          </div> */}
        </div>
        <div className={styles.AddressSec}>
          <h4 className={styles.AddressTitle}>
            {PROFILE_DATA.personalInfoSec.addresses}
          </h4>
          <div className={styles.AddressListWrapper}>
            {userData.address.map((address, index) => {
              return (
                <div className={styles.Address} key={index}>
                  <h5 className={styles.AddressLine}>{address.address}</h5>
                  <h5 className={styles.Pincode}>{address.pincode}</h5>
                </div>
              );
            })}
            <Button
              name="Add Address"
              primaryColor={`var(--ter-black)`}
              inverted
              hoverBgColor={`var(--white)`}
              wrapperClass={styles.AddAddressBtn}
              withIcon
              IconComp={PlusImg}
              onClick={() => {
                dispatch({
                  type: UPDATE_ADD_ADDRESS_POPUP_STATE,
                  value: true,
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoSec;
