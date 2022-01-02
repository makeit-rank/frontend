import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

import styles from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Containers/Home";
import NavBar from "./Components/NavBar/index";
import { ToastContainer } from "react-toastify";

import { getUserData } from "./Services/user.service";

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
      } catch (err) {}
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
      <ToastContainer bodyClassName="ToastBody" />
      {initialized ? (
        <div className={styles.Wrapper}>
          <NavBar isLoggedIn={userData ? true : false} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default App;
