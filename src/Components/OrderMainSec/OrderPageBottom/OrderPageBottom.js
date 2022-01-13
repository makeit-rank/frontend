import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./OrderPageBottom.module.css";

import { ORDER_DETAILS_DATA } from "./../../../Utils/Constants/StaticData";

import notify from "./../../../Utils/Helpers/notifyToast";

import StatusItemWrapper from "./StatusItemWrapper";
import Button from "./../../Button/index";
import { ReactComponent as PlusIcon } from "../../../Assets/Order/Plus.svg";
import { updateOrderStatus } from "./../../../Services/order.service";
import { uploadImage } from "../../../Services/storage.service";

function OrderPageBottom({
  status,
  staticData,
  sellerPerspective,
  orderDetails,
  updateOrderDataFun,
}) {
  const userData = useSelector((state) => state.userReducer.userData);

  const addImageInputRef = useRef();
  const [images, setImages] = useState([]);

  const handleFileChange = async (e) => {
    const [file] = addImageInputRef.current.files;
    try {
      if (file) {
        notify("Uploading profile picture...", "info");

        let urls = await uploadImage(file);
        setImages([...images, urls[0]]);

        notify("Profile picture updated successfully", "success");
      }
    } catch (err) {
      console.log(err);
      console.log(err.response);
      notify(err, "error");
    }
  };

  const confirmOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await updateOrderStatus(
        userData.accessToken,
        orderDetails._id,
        "Confirmed"
      );
      if (updateOrderDataFun) {
        await updateOrderDataFun();
      }
      notify("Order confirmed successfully", "success");
    } catch (err) {
      console.log(err);
      notify("Something went wrong while confirming order", "error");
    }
  };

  const submitForReview = async (e) => {
    e.preventDefault();
    try {
      const response = await updateOrderStatus(
        userData.accessToken,
        orderDetails._id,
        "AskedForApprove",
        "",
        images
      );
      if (updateOrderDataFun) {
        await updateOrderDataFun();
      }
      notify("Images submitted for review successfully", "success");
    } catch (err) {
      console.log(err);
      notify(
        "Something went wrong while submitting images for review",
        "error"
      );
    }
  };

  const askForChange = async (e) => {
    e.preventDefault();
    try {
      const response = await updateOrderStatus(
        userData.accessToken,
        orderDetails._id,
        "AskedForChange",
        e.target.elements.AskForChangeDescription.value,
        null,
        true
      );
      if (updateOrderDataFun) {
        await updateOrderDataFun();
      }
      notify("Asked for change successfully", "success");
    } catch (err) {
      console.log(err);
      notify("Something went wrong while asking for change", "error");
    }
  };

  const approveOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await updateOrderStatus(
        userData.accessToken,
        orderDetails._id,
        "AskedForChange",
        "",
        null,
        false
      );
      if (updateOrderDataFun) {
        await updateOrderDataFun();
      }
      notify("Order approved successfully", "success");
    } catch (err) {
      console.log(err);
      notify("Something went wrong while approving order", "error");
    }
  };

  const smoothLoading = (e) => {
    e.target.style.opacity = "1";
  };
  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.Title}>{ORDER_DETAILS_DATA.status}</h3>
      <div className={styles.ListWrapper}>
        <StatusItemWrapper
          title={staticData.titles.Ordered}
          timeStamp={status.Ordered}
        />

        {status.Confirmed ? (
          <StatusItemWrapper
            title={staticData.titles.Confirmed}
            timeStamp={status.Confirmed}
          />
        ) : (
          sellerPerspective && (
            <StatusItemWrapper
              title={staticData.titles.Confirm}
              timeStamp={status.Confirmed}
            >
              <Button
                wrapperClass={
                  styles.ConfirmOrderBtn + " " + styles.GeneralButton
                }
                name={staticData.approve}
                primaryColor={`var(--green-primary)`}
                hoverBgColor={`var(--white)`}
                inverted
                onClick={confirmOrder}
              />
            </StatusItemWrapper>
          )
        )}
        {status.Confirmed &&
          status.AskedForApprove?.map((item, index) => {
            return (
              <>
                <StatusItemWrapper
                  title={staticData.titles.AskedForApprove}
                  timeStamp={item.date}
                >
                  <div className={styles.ApprovalImages}>
                    {item.data.map((image, index) => {
                      return (
                        <img
                          src={image}
                          alt="Approval"
                          className={
                            styles.ApprovalImage + " " + styles.SmoothLoading
                          }
                          onLoad={smoothLoading}
                        />
                      );
                    })}
                  </div>
                </StatusItemWrapper>
                {status.AskedForChange?.[index] ? (
                  status.AskedForChange[index].changeStatus ? (
                    <StatusItemWrapper
                      title={staticData.titles.AskedForChange}
                      timeStamp={status.AskedForChange[index].date}
                    >
                      <p className={styles.AskChangesContentWrapper}>
                        {status.AskedForChange[index].data}
                      </p>
                    </StatusItemWrapper>
                  ) : (
                    <StatusItemWrapper
                      title={staticData.titles.ApprovedDesigns}
                      timeStamp={status.AskedForChange[index].date}
                    />
                  )
                ) : (
                  !sellerPerspective && (
                    <StatusItemWrapper title={staticData.titles.ApproveDesigns}>
                      <div className={styles.ApproveWrapper}>
                        <div className={styles.ApproveTopSec}>
                          <Button
                            name={staticData.approve}
                            primaryColor={`var(--green-primary)`}
                            wrapperClass={
                              styles.ApproveButton + " " + styles.GeneralButton
                            }
                            hoverBgColor={`var(--white)`}
                            inverted
                            onClick={approveOrder}
                          />
                        </div>
                        <span className={styles.ApproveOrText}> or </span>
                        <form
                          className={styles.ApproveBottomSec}
                          onSubmit={askForChange}
                        >
                          <span className={styles.ApproveBottomText}>
                            {staticData.suggestChange}
                          </span>
                          <textarea
                            id="AskForChangeDescription"
                            type="text"
                            placeholder="Enter your reason"
                            className={styles.ApproveInput}
                          />
                          <Button
                            name={staticData.askForChanges}
                            primaryColor={`var(--ter-black)`}
                            wrapperClass={
                              styles.AskForChangeButton +
                              " " +
                              styles.GeneralButton
                            }
                            inverted
                            hoverBgColor={`var(--white)`}
                          />
                        </form>
                      </div>
                    </StatusItemWrapper>
                  )
                )}
              </>
            );
          })}
        {(sellerPerspective && !status.AskedForApprove && status.Confirmed) ||
        (sellerPerspective &&
          status.AskedForApprove?.length === status.AskedForChange?.length &&
          status.AskedForChange?.[status?.AskedForChange?.length - 1]
            .changeStatus) ? (
          <>
            <StatusItemWrapper title={staticData.titles.AskForApprove}>
              <div className={styles.ImagesSec}>
                <div className={styles.ImagesList}>
                  {images.map((image, index) => {
                    return (
                      <img
                        src={image}
                        alt="product"
                        key={index}
                        className={styles.Image}
                        onLoad={(e) => {
                          e.target.style.opacity = 1;
                        }}
                      />
                    );
                  })}
                  <div className={styles.AddImageButtonWrapper}>
                    <Button
                      name={staticData.addImage}
                      primaryColor={`var(--primary-blue)`}
                      wrapperClass={
                        styles.GeneralButton + " " + styles.AddImageButton
                      }
                      inverted
                      withIcon
                      IconComp={PlusIcon}
                      onClick={(e) => {
                        e.preventDefault();
                        addImageInputRef.current.click();
                      }}
                    />
                    <input
                      type="file"
                      ref={addImageInputRef}
                      className={styles.AddImageInput}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <Button
                  name={staticData.submit}
                  primaryColor={`var(--green-primary)`}
                  wrapperClass={
                    styles.GeneralButton + " " + styles.SubmitForReviewButton
                  }
                  hoverBgColor={`var(--white)`}
                  inverted
                  onClick={submitForReview}
                />
              </div>
            </StatusItemWrapper>
          </>
        ) : (
          <></>
        )}
        {status.Delivered && (
          <StatusItemWrapper
            title={staticData.titles.Delivered}
            timeStamp={status.Delivered}
            isLast={true}
          />
        )}
      </div>
    </div>
  );
}

export default OrderPageBottom;
