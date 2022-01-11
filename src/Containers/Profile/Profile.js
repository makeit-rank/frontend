import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import styles from "./Profile.module.css";

import ProfileMainSec from "./../../Components/ProfileMainSec/ProfileMainSec";
import SecondaryFooter from "./../../Components/SecondaryFooter/index";

const Profile = ({ refreshUserData }) => {
  return (
    <div className={styles.Wrapper}>
      <ProfileMainSec refreshUserData={refreshUserData} />
      <SecondaryFooter />
    </div>
  );
};

export default Profile;
