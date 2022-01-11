import React from "react";

import styles from "./OrderPageBottom.module.css";

import { ORDER_DETAILS_DATA } from "./../../../Utils/Constants/StaticData";

import StatusItemWrapper from "./StatusItemWrapper";
import Button from "./../../Button/index";

function OrderPageBottom({ status, staticData }) {
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
        <StatusItemWrapper
          title={staticData.titles.Confirmed}
          timeStamp={status.Confirmed}
        />
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
              {status.AskedForChange[index] ? (
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
                    title={staticData.titles.ApproveDesigns}
                    timeStamp={status.AskedForChange[index].date}
                  />
                )
              ) : (
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
                          styles.AskForChangeButton + " " + styles.GeneralButton
                        }
                        inverted
                        hoverBgColor={`var(--white)`}
                      />
                    </form>
                  </div>
                </StatusItemWrapper>
              )}
            </>
          );
        })}
        <StatusItemWrapper
          title={staticData.titles.Delivered}
          timeStamp={status.Delivered}
          isLast={true}
        />
      </div>
    </div>
  );
}

export default OrderPageBottom;
