import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./EmptyCartComp.module.css";

import { CART_DATA } from "./../../Utils/Constants/StaticData";

import Button from "./../Button/index";
import { ReactComponent as CartMainImg } from "../../Assets/Cart/graphic.svg";

function EmptyCartComp() {
  const navigate = useNavigate();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <h4 className={styles.Title}>{CART_DATA.title}</h4>
        <span className={styles.SubTitle}>{CART_DATA.subtitle}</span>
        <Button
          name={CART_DATA.button}
          wrapperClass={styles.ButtonWrapper}
          primaryColor={`var(--dark-blue)`}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <CartMainImg className={styles.CartMainImg} />
    </div>
  );
}

export default EmptyCartComp;
