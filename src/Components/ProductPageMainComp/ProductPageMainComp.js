import React from "react";

import styles from "./ProductPageMainComp.module.css";

import ProductImageSec from "./ProductImageSec";
import ProductInfoSec from "./ProductInfoSec";
import ProductReviewSec from "./ProductReviewSec";

function ProductPageMainComp({ productDetails, refreshDataFun }) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.UpperSection}>
        <div className={styles.LeftSecWrapper}>
          <ProductImageSec images={productDetails.images} />
        </div>
        <div className={styles.RightSecWrapper}>
          <ProductInfoSec productDetails={productDetails} />
        </div>
      </div>
      <div className={styles.LowerSection}>
        <ProductReviewSec
          productDetails={productDetails}
          refreshDataFun={refreshDataFun}
        />
      </div>
    </div>
  );
}

export default ProductPageMainComp;
