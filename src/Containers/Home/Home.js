import React from "react";

import { useSelector } from "react-redux";

import styles from "./Home.module.css";

import Button from "../../Components/Button";
import HomeMainSec from "./../../Components/HomeMainSec/index";

const Home = () => {
  const exampleState = useSelector((state) => state.example.exampleState);

  return (
    <div className={styles.container}>
      <HomeMainSec />
    </div>
  );
};

export default Home;
