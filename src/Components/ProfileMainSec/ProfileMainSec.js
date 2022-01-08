import React from "react";

import styles from "./ProfileMainSec.module.css";

import ProfileLeftSec from "./ProfileLeftSec/ProfileLeftSec";

function ProfileMainSec() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSec}>
        <ProfileLeftSec />
      </div>
    </div>
  );
}

export default ProfileMainSec;
