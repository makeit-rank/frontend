import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

import { NAVBAR_DATA } from "../../Utils/Constants/StaticData";

function NavBar({ isLoggedIn, pincode, onPinClick }) {
  const [city, setCity] = useState("");

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSec}>
        <Link href="/">
          <img src={NAVBAR_DATA.images.LOGO_IMG} alt="" />
        </Link>
        <div className={styles.LocationInfo}>
          <div className={styles.LocationInfoLeft}>
            <div className={styles.LocationPin}>
              <img src={NAVBAR_DATA.images.LOCATION_PIN} alt="" />
            </div>
          </div>
          <div className={styles.LocationInfoRight}>
            <h4 className={styles.DeliverToTitle}>{NAVBAR_DATA.deleiverTo}</h4>
            <div className={styles.LocationInfoRightBottom}>
              <h3 className={styles.DeliverToArea}>{city}</h3>
              <h3 className={styles.DeliverToPincode}>{pincode}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
