import React from "react";

import styles from "./UpperSec.module.css";

import Button from "./../../Button";
import { useNavigate } from "react-router-dom";

import { HOME_DATA } from "../../../Utils/Constants/StaticData";

function UpperSec() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/search?search=top-picks");
    
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSec}>
        <div className={styles.LeftSecTitle}>
          <h2>{HOME_DATA.title}</h2>
        </div>
        <Button
          name={HOME_DATA.button}
          onClick={handleClick}
          primaryColor={"var(--dark-blue)"}
        />
      </div>
      <div className={styles.RightSec}>
        <img
          src={HOME_DATA.images.MAIN_IMAGE}
          alt=""
          className={styles.MainImage}
        />
      </div>
    </div>
  );
}

export default UpperSec;
