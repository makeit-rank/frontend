import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import styles from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";

import {
  UPDATE_USER_DATA,
  UPDATE_ADD_ADDRESS_POPUP_STATE,
  UPDATE_ADD_PRODUCT_POPUP_STATE,
} from "./Redux/ActionTypes";
import { BG_LINE_IMG } from "./Utils/Constants/StaticData";

import { getUserData } from "./Services/user.service";
import notify from "./Utils/Helpers/notifyToast";

import { ToastContainer } from "react-toastify";
import Home from "./Containers/Home";
import NavBar from "./Components/NavBar";
import Preloader from "./Components/Preloader";
import PrivateRoute from "./Utils/Helpers/PrivateRoute";
import PopUp from "./Components/_General/PopUp/PopUp";
import AddAddress from "./Components/AddAddress";
import AddProduct from "./Components/AddProduct/AddProduct";
import Profile from "./Containers/Profile";
import Search from "./Containers/Search";
import Product from "./Containers/Product";
import Cart from "./Containers/Cart";
import Order from "./Containers/Order";
import OrderCheckout from "./Components/OrderCheckout";

const App = () => {
  const userData = useSelector((state) => state.userReducer.userData);
  const popupStates = useSelector((state) => state.popUpReducer);
  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookies(["token"]);

  const [initialized, setInitialized] = useState(false);

  useEffect(async () => {
    fetchUserData();
  }, [cookie]);

  useEffect(() => {
    console.log("userData", userData);
    if (userData) {
      setInitialized(true);
    }
  }, [userData]);

  useEffect(() => {
    console.log(cookie.token);
  }, [cookie.token]);

  const fetchUserData = async () => {
    if (cookie.token) {
      try {
        const localeUserData = await getUserData(cookie.token);
        localeUserData.accessToken = cookie.token;
        localeUserData.isSeller = localeUserData.role === "seller";

        dispatch({
          type: UPDATE_USER_DATA,
          data: localeUserData,
        });
      } catch (err) {
        notify("Internal Server Error", "error");
        dispatch({
          type: UPDATE_USER_DATA,
          data: null,
        });
        setInitialized(true);
      }
    } else {
      dispatch({
        type: UPDATE_USER_DATA,
        data: null,
      });
      setInitialized(true);
    }
  };

  const closeAddAddressPopup = () => {
    dispatch({
      type: UPDATE_ADD_ADDRESS_POPUP_STATE,
      value: false,
    });
  };

  const closeAddProductPopup = () => {
    dispatch({
      type: UPDATE_ADD_PRODUCT_POPUP_STATE,
      value: false,
    });
  };

  return (
    <>
      <ToastContainer bodyClassName={styles.ToastBody} />
      {initialized ? (
        <div className={styles.Wrapper}>
          <NavBar isLoggedIn={userData ? true : false} />
          <img src={BG_LINE_IMG} alt="bg-line" className={styles.BgLine} />
          <Routes>
            {["/", "login", "signup"].map((path, index) => (
              <Route key={index} path={path} element={<Home />} />
            ))}
            <Route exact path="/search" element={<Search />} />
            <Route path="p/:id" element={<Product />} />
            <Route
              path="o/:id"
              element={
                <PrivateRoute>
                  <Order />
                </PrivateRoute>
              }
            />
            <Route
              path="cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/profile/*"
              element={
                <PrivateRoute>
                  <Profile refreshUserData={fetchUserData} />
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          {userData && (
            <>
              <PopUp
                isOpen={popupStates.addAddress}
                ContentComp={
                  <AddAddress
                    closePopupFunction={closeAddAddressPopup}
                    refreshDataFunction={fetchUserData}
                  />
                }
                closeFun={closeAddAddressPopup}
                withBorder={false}
              />
              <PopUp
                isOpen={userData.isSeller && popupStates.addProduct}
                ContentComp={
                  <AddProduct
                    closePopupFunction={closeAddProductPopup}
                    refreshDataFunction={fetchUserData}
                  />
                }
                closeFun={closeAddProductPopup}
                withBorder={false}
              />
              <PopUp
                isOpen={popupStates.orderCheckout}
                ContentComp={
                  <OrderCheckout closePopupFunction={closeAddProductPopup} />
                }
                closeFun={closeAddProductPopup}
                withBorder={false}
              />
            </>
          )}
        </div>
      ) : (
        <>
          <Preloader />
        </>
      )}
    </>
  );
};

export default App;
