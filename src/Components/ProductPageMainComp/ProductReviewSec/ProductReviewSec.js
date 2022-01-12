import React from "react";
import { useSelector } from "react-redux";

import { PRODUCT_PAGE_DATA } from "../../../Utils/Constants/StaticData";

import styles from "./ProductReviewSec.module.css";
import Ratings from "./../../Ratings/Ratings";
import Button from "./../../Button/Button";
import Rating from "@mui/material/Rating";
import { addReviewToProduct } from "../../../Services/product.service";
import notify from "./../../../Utils/Helpers/notifyToast";

function ProductReviewSec({ productDetails, refreshDataFun }) {
  const userData = useSelector((state) => state.userReducer.userData);
  const [ratingsValue, setRatingsValue] = React.useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addReviewToProduct(
        userData.accessToken,
        productDetails._id,
        parseInt(ratingsValue),
        e.target.elements.ReviewText.value
      );
      if (refreshDataFun) {
        refreshDataFun();
      }
      console.log(response);
      notify("Review Added Successfully", "success");
    } catch (err) {
      console.log(err);
      notify("Error adding review", "error");
    }
  };

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
      <form className={styles.AddReviewSec} onSubmit={handleSubmit}>
        <div className={styles.ReviewStars}>
          <Rating
            name="RatingStars"
            value={ratingsValue}
            size="large"
            onChange={(e) => {
              setRatingsValue(e.target.value);
            }}
          />
        </div>
        <textarea
          id="ReviewText"
          className={styles.ReviewTextArea}
          placeholder="Write a review"
        />
        <Button
          name={PRODUCT_PAGE_DATA.addReview}
          wrapperClass={styles.AddReviewBtn}
          primaryColor={`var(--primary-blue)`}
          inverted
        />
      </form>
      <div className={styles.ReviewsList}>
        {productDetails.reviews.map((review, index) => {
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
