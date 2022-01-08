import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import styles from "./ProfileRightSec.module.css";

import PersonalInfoSec from "./PersonalInfoSec/PersonalInfoSec";
import OrdersSec from "./OrdersSec/index";

function ProfileRightSec() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PersonalInfoSec />} />
        <Route path="/orders" element={<OrdersSec />} />
        <Route path="*" element={<Navigate to="/profile/" />} />
      </Routes>
    </>
  );
}

export default ProfileRightSec;
