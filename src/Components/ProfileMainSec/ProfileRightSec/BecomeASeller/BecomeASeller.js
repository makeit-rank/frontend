import React from "react";

import styles from "./BecomeASeller.module.css";

import { PROFILE_DATA } from "../../../../Utils/Constants/StaticData";

import Button from "../../../Button";

function BecomeASellerSec() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.TopSec}>
        <h3 className={styles.Title}>{PROFILE_DATA.becomeASellerSec.title}</h3>
      </div>

      <div className={styles.BottomSec}>
        <div className={styles.KeyValuePairs}>
          {PROFILE_DATA.becomeASellerSec.feilds
            .slice(0, 2)
            .map((feild, index) => {
              return (
                <div className={styles.KeyValuePair} key={index}>
                  <h4 className={styles.Key}>{feild.label}</h4>
                  <input
                    className={styles.ValueInput}
                    type={feild.type ? feild.type : "text"}
                    placeholder={feild.placeholder}
                    id={feild.id}
                  />
                </div>
              );
            })}
          <div className={styles.KeyValuePair + " " + styles.PickupAddressPair}>
            <h4 className={styles.Key}>
              {PROFILE_DATA.becomeASellerSec.feilds[2].label}
            </h4>
            <div className={styles.PickupAddress}>
              <textarea
                className={styles.ValueInput}
                type={
                  PROFILE_DATA.becomeASellerSec.feilds[2].subFeilds[0].type
                    ? PROFILE_DATA.becomeASellerSec.feilds[2].subFeilds[0].type
                    : "text"
                }
                placeholder={
                  PROFILE_DATA.becomeASellerSec.feilds[2].subFeilds[0]
                    .placeholder
                }
                id={PROFILE_DATA.becomeASellerSec.feilds[2].subFeilds[0].id}
              />
              <input
                className={styles.ValueInput}
                type={
                  PROFILE_DATA.becomeASellerSec.feilds[2].subFeilds[1].type
                    ? PROFILE_DATA.becomeASellerSec.feilds[2].subFeilds[1].type
                    : "text"
                }
                placeholder={
                  PROFILE_DATA.becomeASellerSec.feilds[2].subFeilds[1]
                    .placeholder
                }
                id={PROFILE_DATA.becomeASellerSec.feilds[2].subFeilds[1].id}
              />
            </div>
          </div>
        </div>
        <p className={styles.TnC}>{PROFILE_DATA.becomeASellerSec.tnc}</p>
        <Button
          wrapperClass={styles.RegisterBtn}
          name={PROFILE_DATA.becomeASellerSec.registerAsASeller}
          primaryColor={`var(--primary-blue)`}
        />
      </div>
    </div>
  );
}

export default BecomeASellerSec;
