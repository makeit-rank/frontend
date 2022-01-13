import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./OrderMainSec.module.css";

import OrderPageTop from "./OrderPageTop";
import OrderPageBottom from "./OrderPageBottom";
import { ORDER_DETAILS_DATA } from "./../../Utils/Constants/StaticData";
import { useNavigate } from "react-router-dom";

function OrderMainSec({ orderDetails, updateOrderDataFun }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userReducer.userData);

  const [staticDataAccToPerspective, setStaticDataAccToPerspective] =
    React.useState(null);

  const [sellerPerspective, setSellerPerspective] = React.useState(null);

  useEffect(() => {
    if (orderDetails.seller_details._id === userData._id) {
      console.log("Seller perspective", true);
      setSellerPerspective(true);
      setStaticDataAccToPerspective(
        ORDER_DETAILS_DATA.statusData.sellerPerspective
      );
    } else if (orderDetails.user_id === userData._id) {
      console.log("Buyer perspective", true);
      setSellerPerspective(false);
      setStaticDataAccToPerspective(
        ORDER_DETAILS_DATA.statusData.userPerspective
      );
    } else {
      console.log("Unauthorized", true);
      navigate("/");
    }
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
              sellerPerspective={sellerPerspective}
              orderDetails={orderDetails}
              updateOrderDataFun={updateOrderDataFun}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default OrderMainSec;
