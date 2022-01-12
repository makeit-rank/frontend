import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Home.module.css";

import HomeMainSec from "./../../Components/HomeMainSec/index";
import Footer from "./../../Components/Footer/index";
import PopUp from "./../../Components/_General/PopUp/index";
import SignUp from "../../Components/SignUp";
import SignIn from "./../../Components/SignIn/index";
import { searchProducts } from "./../../Services/product.service";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userReducer.userData);

  const [highlightsData, setHighlightsData] = useState({
    recommended: null,
    topPicks: null,
  });

  useEffect(() => {
    getHighlightsData();
    if (userData) {
      if (location.pathname !== "/") {
        navigate("/");
      }
    } else {
      if (location.pathname === "/") {
        navigate("/login");
      }
    }
  }, [userData]);

  const getHighlightsData = async () => {
    setHighlightsData({
      recommended: null,
      topPicks: null,
    });
    console.log("get highlights data");

    try {
      const response = await searchProducts("top-picks");
      setHighlightsData({
        ...highlightsData,
        topPicks: response,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className={styles.Wrapper}>
      <HomeMainSec
        // recommendedItems={highlightsData.recommended}
        topPickItems={highlightsData.topPicks}
      />
      <Footer />
      <PopUp
        isOpen={location.pathname === "/signup"}
        ContentComp={<SignUp />}
        closeFun={() => {
          navigate("/");
        }}
        withBorder={false}
      />
      <PopUp
        isOpen={location.pathname === "/login"}
        ContentComp={<SignIn />}
        closeFun={() => {
          navigate("/");
        }}
        withBorder={false}
      />
    </div>
  );
};

export default Home;
