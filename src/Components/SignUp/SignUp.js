import React, { useState, useRef } from "react";

import styles from "./SignInUp.module.css";

import Button from "../Button";
import BottomText from "./Helpers/BottomText";
import { StyledMUIInput } from "./../../Utils/Helpers/styledMUIInput";
import { SIGN_UP_DATA } from "./../../Utils/Constants/StaticData";

function SignUp() {
  const [isDisabled, setIsDisabled] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current.elements);
  };

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Title}>{SIGN_UP_DATA.title}</h2>
      <form className={styles.Form} onSubmit={handleSubmit} ref={formRef}>
        <StyledMUIInput
          fullWidth
          id="Name"
          label="Name"
          variant="standard"
          disabled={isDisabled}
        />
        <StyledMUIInput
          fullWidth
          id="SignUpEmail"
          label="Email address"
          variant="standard"
          type="email"
          margin="dense"
          autoComplete="username"
          disabled={isDisabled}
        />

        <StyledMUIInput
          fullWidth
          label="Mobile"
          name="Mobile"
          id="Mobile"
          variant="standard"
          margin="dense"
          disabled={isDisabled}
        />
        <StyledMUIInput
          fullWidth
          id="SignUpPassword"
          label="Password"
          variant="standard"
          type="password"
          margin="dense"
          autoComplete="current-password"
          disabled={isDisabled}
        />
        <StyledMUIInput
          fullWidth
          id="ConfirmPassword"
          label="Confirm Password"
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
        <BottomText data={SIGN_UP_DATA} />
      </div>
    </div>
  );
}

export default SignUp;
