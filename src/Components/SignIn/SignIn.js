import React, { useState, useRef } from "react";
import { useCookies } from "react-cookie";

import styles from "../SignUp/SignInUp.module.css";

import { SIGN_IN_DATA } from "./../../Utils/Constants/StaticData";

import notify from "./../../Utils/Helpers/notifyToast";
import { validateEmail } from "./../SignUp/Helpers/validateEmail";

import Button from "../Button";
import { StyledMUIInput } from "./../../Utils/Helpers/styledMUIInput";
import BottomText from "../SignUp/Helpers/BottomText";
import { loginUser } from "../../Services/auth.service";

function SignIn() {
  const [, setCookie] = useCookies();

  const [isDisabled, setIsDisabled] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    setIsDisabled(true);
    e.preventDefault();

    const validation = handleDataValidation();

    if (validation) {
      let LoginUserData = {
        email: formRef.current.SignInEmail.value,
        password: formRef.current.SignInPassword.value,
      };

      console.log("loginUserData", LoginUserData);
      try {
        const authToken = await loginUser(LoginUserData);
        console.log("LoginStatus", authToken);
        setCookie("token", authToken, {
          sameSite: "strict",
        });
      } catch (err) {
        notify(err.response.data, "error");
        console.log(err.response.data);
      }
    }

    setIsDisabled(false);
  };

  const handleDataValidation = () => {
    if (
      !formRef.current.elements.SignInEmail.value ||
      !validateEmail(formRef.current.elements.SignInEmail.value)
    ) {
      notify("Please enter valid Email address", "warning");
      return false;
    }

    if (formRef.current.elements.SignInPassword.value.length < 6) {
      notify("Password should be atleast 6 characters long", "warning");
      return false;
    }

    return true;
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
