import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

import styles from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";

import { BG_LINE_IMG } from "./Utils/Constants/StaticData";

import Home from "./Containers/Home";
import NavBar from "./Components/NavBar/index";
import Preloader from "./Components/Preloader";
import { ToastContainer } from "react-toastify";

import { getUserData } from "./Services/user.service";
import notify from "./Utils/Helpers/notifyToast";

const App = () => {
  const userData = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookies(["token"]);

  const [initialized, setInitialized] = useState(false);

  useEffect(async () => {
    // setCookie(
    //   "token",
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDEyZjUwYmQ3ODY4NzBiODdmMmY4ZiIsImlhdCI6MTY0MTA5OTA4OH0.kY_HiMKWRfbAZoeH2MSwb8F7zdWzKrmDU79AZ_3BoJI",
    //   { sameSite: "strict" }
    // );

    if (cookie.token) {
      try {
        const localeUserData = await getUserData(cookie.token);
        localeUserData.accessToken = cookie.token;

        dispatch({
          type: "UPDATE_USER_DATA",
          data: localeUserData,
        });
      } catch (err) {
        notify("Internal Server Error", "error");
        dispatch({
          type: "UPDATE_USER_DATA",
          data: null,
        });
        setInitialized(true);
      }
    } else {
      setInitialized(true);
    }
  }, [cookie]);

  useEffect(() => {
    if (userData) {
      setInitialized(true);
    }
  }, [userData]);

  useEffect(() => {
    console.log(cookie.token);
  }, [cookie.token]);

  return (
    <>
      <ToastContainer bodyClassName={styles.ToastBody} />
      {initialized ? (
        <div className={styles.Wrapper}>
          <img src={BG_LINE_IMG} alt="bg-line" className={styles.BgLine} />
          <NavBar isLoggedIn={userData ? true : false} />
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact component={Home} />
          </Switch>
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
