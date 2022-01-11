import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userData = useSelector((state) => state.userReducer.userData);

  return userData !== null ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
