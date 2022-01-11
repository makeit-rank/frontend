import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { useCookies } from "react-cookie";

import styles from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";

import { BG_LINE_IMG } from "./Utils/Constants/StaticData";
import {
  UPDATE_USER_DATA,
  UPDATE_ADD_ADDRESS_POPUP_STATE,
  UPDATE_ADD_PRODUCT_POPUP_STATE,
} from "./Redux/ActionTypes";

import { getUserData } from "./Services/user.service";
import notify from "./Utils/Helpers/notifyToast";

import { ToastContainer } from "react-toastify";
import NavBar from "./Components/NavBar/index";
import Preloader from "./Components/Preloader";
import Home from "./Containers/Home";
import Search from "./Containers/Search/index";
import Product from "./Containers/Product/Product";
import Cart from "./Containers/Cart/index";
import Profile from "./Containers/Profile/index";
import PopUp from "./Components/_General/PopUp/PopUp";
import AddAddress from "./Components/AddAddress/index";
import AddProduct from "./Components/AddProduct/AddProduct";
import Order from "./Containers/Order/index";
import PrivateRoute from "./Utils/Helpers/PrivateRoute";

const App = () => {
  const userData = useSelector((state) => state.userReducer.userData);
  const popupStates = useSelector((state) => state.popUpReducer);
  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookies(["token"]);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // dispatch({
    //   type: UPDATE_ADD_ADDRESS_POPUP_STATE,
    //   value: Math.random() > 0.5,
    // });
  }, []);

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
    // setCookie(
    //   "token",
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDEyZjUwYmQ3ODY4NzBiODdmMmY4ZiIsImlhdCI6MTY0MTA5OTA4OH0.kY_HiMKWRfbAZoeH2MSwb8F7zdWzKrmDU79AZ_3BoJI",
    //   { sameSite: "strict" }
    // );

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
                  <Profile />
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
                  <AddProduct closePopupFunction={closeAddProductPopup} />
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
