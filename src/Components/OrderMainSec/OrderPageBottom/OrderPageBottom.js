import React, { useRef, useState } from "react";

import styles from "./OrderPageBottom.module.css";

import { ORDER_DETAILS_DATA } from "./../../../Utils/Constants/StaticData";

import notify from "./../../../Utils/Helpers/notifyToast";

import StatusItemWrapper from "./StatusItemWrapper";
import Button from "./../../Button/index";
import { ReactComponent as PlusIcon } from "../../../Assets/Order/Plus.svg";

function OrderPageBottom({ status, staticData, sellerPerspective }) {
  const addImageInputRef = useRef();
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const [file] = addImageInputRef.current.files;
    try {
      if (file) {
        notify("Uploading profile picture...", "info");

        let src = URL.createObjectURL(file);
        setImages([...images, src]);

        // await upload picture

        notify("Profile picture updated successfully", "success");
      }
    } catch (err) {
      console.log(err);
      console.log(err.response);
      notify(err, "error");
    }
  };

  const smoothLoading = (e) => {
    e.target.style.opacity = "1";
  };
  console.log(status);
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
              />
            </StatusItemWrapper>
          )
        )}
        {status.AskedForApprove?.map((item, index) => {
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
                        />
                      </div>
                      <span className={styles.ApproveOrText}> or </span>
                      <form
                        className={styles.ApproveBottomSec}
                        onSubmit={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className={styles.ApproveBottomText}>
                          {staticData.suggestChange}
                        </span>
                        <textarea
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
        {(!status.AskedForApprove && status.Confirmed) ||
        (sellerPerspective &&
          status.AskedForApprove?.length === status.AskedForChange?.length &&
          status.AskedForChange[status?.AskedForChange?.length - 1]
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
