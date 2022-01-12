import React, { useState } from "react";

import styles from "./ProductPageMainComp.module.css";

import ProductImageSec from "./ProductImageSec";
import ProductInfoSec from "./ProductInfoSec";
import ProductReviewSec from "./ProductReviewSec";

function ProductPageMainComp({ productDetails, refreshDataFun }) {
  const [currentSelections, setCurrentSelections] = useState({
    size: 0,
    address: 0,
    attachments: {},
  });

  return (
    <div className={styles.Wrapper}>
      <div className={styles.UpperSection}>
        <div className={styles.LeftSecWrapper}>
          <ProductImageSec images={productDetails.images} />
        </div>
        <div className={styles.RightSecWrapper}>
          <ProductInfoSec
            productDetails={productDetails}
            currentSelections={currentSelections}
            setCurrentSelections={setCurrentSelections}
          />
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
