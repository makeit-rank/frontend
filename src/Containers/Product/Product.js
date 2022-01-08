import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Product.module.css";

import Preloader from "../../Components/Preloader";
import Footer from "../../Components/Footer";
import ProductPageMainComp from "../../Components/ProductPageMainComp";

function Product() {
  let { id: productID } = useParams();

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    setProductDetails(null);
    console.log(productID);
    setTimeout(() => {
      getProductDetails();
    }, 1000);
  }, [productID]);

  useEffect(() => {
    console.log(productDetails);
  }, [productDetails]);

  const getProductDetails = async () => {
    setProductDetails({
      product_id: Math.floor(Math.random() * 100),
      images: [
        `https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
        `https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHsx8&auto=format&fit=crop&w=387&q=80`,
        `https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      ],
      title: `London Hills Men's Regular Fit Printed Full Sleeve Soft & Strong T-Shirt`,
      seller: `London Hills Store`,
      price: Math.floor(Math.floor(Math.random() * 100000) / 100) + 99,
      sizes: Array(3).fill("S"),
      requiredAttachments: Array(2)
        .fill(null)
        .map((_, index) => ({
          id: index,
          title: (index === 0 ? "Front" : "Back") + " Image",
          description:
            (index === 0 ? "Front" : "Back") +
            " description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus non consectetur viverra suspendisse. At quis lectus non diam nulla tortor leo.",
        })),
      specifications: Array(10)
        .fill(null)
        .map((_, index) => ({
          key: `${index + 1} key`,
          value: `${index + 1} value`,
        })),
      rating:
        Math.floor(Math.random() * 3) + 1 + Math.floor(Math.random() * 10) / 10,
      noOfRatings: Math.floor(Math.random() * 100) + 1,
      reviews: Array(5)
        .fill(null)
        .map((_, index) => ({
          name: `Customer ${index}`,
          star: Math.floor(Math.random() * 5) + 1,
          timestamp: new Date().toLocaleDateString(),
          description: `${index} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit in faucibus congue tellus. Sed ut lectus non accumsan et vestibulum, venenatis nunc. Aliquam pretium lorem gravida diam. Fringilla ut est ultrices vestibulum. Vitae posuere hendrerit pulvinar rutrum cras ut. Vel sagittis morbi quam proin convallis rutrum nunc sit amet. Molestie in justo, quis lorem aenean pharetra. Etiam tellus in eu convallis.`,
        })),
    });
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
