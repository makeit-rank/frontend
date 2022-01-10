import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./OrderMainSec.module.css";

import OrderPageTop from "./OrderPageTop";
import OrderPageBottom from "./OrderPageBottom";
import { ORDER_DETAILS_DATA } from "./../../Utils/Constants/StaticData";

function OrderMainSec({ orderDetails }) {
  const userData = useSelector((state) => state.userReducer.userData);

  const [staticDataAccToPerspective, setStaticDataAccToPerspective] =
    React.useState(null);

  const [sellerPerspective, setSellerPerspective] = React.useState(null);

  useEffect(() => {
    //check if orderDetails.sellerID == userData.id
    setStaticDataAccToPerspective(
      ORDER_DETAILS_DATA.statusData.userPerspective
    );
    setSellerPerspective(false);
  }, [orderDetails, userData]);

  return (
    <div className={styles.Wrapper}>
      {staticDataAccToPerspective && sellerPerspective != null && (
        <>
          <div className={styles.TopSec}>
            <OrderPageTop
              orderDetails={orderDetails}
              sellerPerspective={sellerPerspective}
            />
          </div>
          <div className={styles.BottomSec}>
            <OrderPageBottom
              status={orderDetails.status}
              staticData={staticDataAccToPerspective}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default OrderMainSec;
