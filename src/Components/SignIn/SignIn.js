import React, { useState, useRef } from "react";

import styles from "../SignUp/SignInUp.module.css";

import Button from "../Button";
import BottomText from "../SignUp/Helpers/BottomText";
import { StyledMUIInput } from "./../../Utils/Helpers/styledMUIInput";
import { SIGN_IN_DATA } from "./../../Utils/Constants/StaticData";

function SignIn() {
  const [isDisabled, setIsDisabled] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current.elements);
  };

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Title}>{SIGN_IN_DATA.title}</h2>
      <form className={styles.Form} onSubmit={handleSubmit} ref={formRef}>
        <StyledMUIInput
          fullWidth
          id="SignInEmail"
          label="Email address"
          variant="standard"
          type="email"
          margin="dense"
          autoComplete="username"
          disabled={isDisabled}
        />

        <StyledMUIInput
          fullWidth
          id="SignInPassword"
          label="Password"
          variant="standard"
          type="password"
          margin="dense"
          autoComplete="current-password"
          disabled={isDisabled}
        />

        <Button
          name={isDisabled ? "Loading..." : "Continue"}
          primaryColor={isDisabled ? "var(--ter-black)" : "var(--primary-blue)"}
          wrapperClass={styles.ButtonWrapper}
          inverted

          //   onClick={() => {
          //     formRef.current.submit();
          //   }}
        />
      </form>
      <div className={styles.BottomSecWrapper}>
        <BottomText data={SIGN_IN_DATA} />
      </div>
    </div>
  );
}

export default SignIn;
