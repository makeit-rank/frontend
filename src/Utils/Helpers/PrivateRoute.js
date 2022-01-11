import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ inverted = false, children }) => {
  const userData = useSelector((state) => state.userReducer.userData);

  return (userData !== undefined) !== inverted ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
