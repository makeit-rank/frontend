import React from "react";

import styles from "./Button.module.css";

function Button({
  name,
  onClick,
  primaryColor,
  inverted,
  wrapperClass,
  id,
  withButton,
  ButtonComp,
  hoverBgColor,
  hoverColor,
  iconClass,
}) {
  return (
    <button
      id={id}
      className={
        styles.Button +
        " " +
        (inverted ? styles.Inverted : "") +
        " " +
        wrapperClass
      }
      style={{
        "--main-color": primaryColor,
        "--main-hover-bg-color": hoverBgColor
          ? hoverBgColor
          : "rgb(238, 243, 255)",
        "--main-hover-color": hoverColor ? hoverColor : primaryColor,
      }}
      onClick={onClick}
    >
      {withButton && <ButtonComp className={styles.Icon + " " + iconClass} />}{" "}
      {name}
    </button>
  );
}

export default Button;
