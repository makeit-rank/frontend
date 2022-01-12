import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./Product.module.css";

import Preloader from "../../Components/Preloader";
import Footer from "../../Components/Footer";
import ProductPageMainComp from "../../Components/ProductPageMainComp";
import { getProductDataById } from "./../../Services/product.service";
import notify from "./../../Utils/Helpers/notifyToast";

function Product() {
  const navigate = useNavigate();
  let { id: productID } = useParams();

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    console.log(productID);
    getProductDetails();
  }, [productID]);

  const getProductDetails = async () => {
    try {
      const response = await getProductDataById(productID);
      console.log(response);
      setProductDetails(response);
    } catch (err) {
      notify("Internal Server Error", "error");
      // navigate("/");
      console.log(err);
    }
  };

  return (
    <div className={styles.Wrapper}>
      {productDetails ? (
        <ProductPageMainComp productDetails={productDetails} />
      ) : (
        <Preloader />
      )}
      <Footer />
    </div>
  );
}

export default Product;
