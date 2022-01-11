import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SellerSafeRoute = ({ reversed = false, children, redirectPath }) => {
  const userData = useSelector((state) => state.userReducer.userData);

  return userData.isSeller != reversed ? (
    children
  ) : (
    <Navigate to={redirectPath ? redirectPath : "/"} />
  );
};

export default SellerSafeRoute;
