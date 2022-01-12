import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SellerProducts.module.css";

import { PROFILE_DATA } from "../../../../Utils/Constants/StaticData";

import Preloader from "../../../Preloader/Preloader";
import SellerProductsItem from "./WishListItem/index";
import Button from "./../../../Button/index";
import { ReactComponent as PlusIcon } from "../../../../Assets/SellerProductList/Plus.svg";
import { UPDATE_ADD_PRODUCT_POPUP_STATE } from "./../../../../Redux/ActionTypes";
import { getSellerProduct } from "../../../../Services/product.service";
import notify from "../../../../Utils/Helpers/notifyToast";

function SellerProducts() {
  const userData = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();

  const [product, setProducts] = useState(null);

  useEffect(() => {
    getSellerProducts();
  }, [userData]);

  const getSellerProducts = async () => {
    try {
      setProducts(null);
      const response = await getSellerProduct(userData.accessToken);
      setProducts(response);
    } catch (err) {
      notify("Something went wrong", "error");
    }
  };

  return (
    <>
      {product ? (
        <div className={styles.Wrapper}>
          <div className={styles.TopSec}>
            <h3 className={styles.Title}>{PROFILE_DATA.productsSec.title}</h3>
            <Button
              name={PROFILE_DATA.productsSec.addNewProduct}
              primaryColor={`var(--primary-blue)`}
              inverted
              wrapperClass={styles.AddNewProductBtn}
              onClick={() => {
                dispatch({
                  type: UPDATE_ADD_PRODUCT_POPUP_STATE,
                  value: true,
                });
              }}
              withIcon
              IconComp={PlusIcon}
            />
          </div>

          <div className={styles.BottomSec}>
            {product.map((listItem, index) => {
              return (
                <div
                  className={styles.LIstItemWrapper}
                  key={index}
                  style={
                    index === product.length - 1 ? { borderBottom: "none" } : {}
                  }
                >
                  <SellerProductsItem itemData={listItem} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <Preloader />
        </>
      )}
    </>
  );
}

export default SellerProducts;
