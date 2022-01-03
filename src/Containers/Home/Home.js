import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import styles from "./Home.module.css";

import HomeMainSec from "./../../Components/HomeMainSec/index";
import Footer from "./../../Components/Footer/index";

const Home = () => {
  const userData = useSelector((state) => state.userReducer.userData);

  const [highlightsData, setHighlightsData] = useState({
    recommended: null,
    topPicks: null,
  });

  useEffect(() => {
    setTimeout(() => {
      getHighlightsData();
    }, 1000);
  }, [userData]);

  const getHighlightsData = async () => {
    setHighlightsData({
      recommended: null,
      topPicks: null,
    });
    console.log("get highlights data");

    const tempData = Array(5)
      .fill({})
      .map((_, index) => ({
        id: index,
        title: `Printed Men Hooded Neck Da..`,
        seller: `Blive  enterprise ${index + 1}`,
        price: Math.floor(Math.random() * 500) + 500,
        rating:
          Math.floor(Math.random() * 3) +
          1 +
          Math.floor(Math.random() * 10) / 10,
        noOfRatings: Math.floor(Math.random() * 100) + 100,
        image: `https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      }));

    setHighlightsData({
      recommended: tempData,
      topPicks: tempData,
    });
  };

  return (
    <div className={styles.Wrapper}>
      <HomeMainSec
        recommendedItems={highlightsData.recommended}
        topPickItems={highlightsData.topPicks}
      />
      <Footer />
    </div>
  );
};

export default Home;
