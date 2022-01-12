import React from "react";
import { PRODUCT_PAGE_DATA } from "../../../Utils/Constants/StaticData";

import styles from "./ProductReviewSec.module.css";
import Ratings from "./../../Ratings/Ratings";
import Button from "./../../Button/Button";
function ProductReviewSec({ productDetails }) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.UpperSec}>
        <h4 className={styles.Title}>{PRODUCT_PAGE_DATA.ratingsAndReviews}</h4>
        <div className={styles.ReviewHighlights}>
          <Ratings rating={productDetails.star} />
          <span className={styles.count}>
            {productDetails.noOfRatings} {PRODUCT_PAGE_DATA.reviews}
          </span>
        </div>
      </div>
      <div className={styles.AddReviewSec}>
        <textarea
          className={styles.ReviewTextArea}
          placeholder="Write a review"
        />
        <Button
          name={PRODUCT_PAGE_DATA.addReview}
          onClick={() => {}}
          wrapperClass={styles.AddReviewBtn}
          primaryColor={`var(--primary-blue)`}
          inverted
        />
      </div>
      <div className={styles.ReviewsList}>
        {productDetails.reviews.map((review, index) => {
          console.log(review);
          return (
            <div
              key={index}
              className={styles.Review}
              style={
                index === productDetails.reviews.length - 1
                  ? {
                      borderBottom: "none",
                    }
                  : {}
              }
            >
              <div className={styles.ReviewLeftSec}>
                <Ratings rating={review.star} />
              </div>
              <div className={styles.ReviewRightSec}>
                <div className={styles.ReviewText}>{review.description}</div>
                <div className={styles.AuthorAndDate}>
                  {`${review.name} || ${new Date(
                    review.timestamp
                  ).toDateString()}`}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductReviewSec;
