import React from "react";

import styles from "./StatusItemWrapper.module.css";

function StatusItemWrapper({ title, timeStamp, isLast, ...props }) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSec}>
        {!isLast && <div className={styles.Line} />}
        <div className={styles.Dot}>
          <div className={styles.DotInner} />
        </div>
      </div>
      <div className={styles.RightSec}>
        <div className={styles.Info}>
          <h4 className={styles.Title}>{title}</h4>
          {props.children}
        </div>
        {timeStamp && (
          <div className={styles.TimeStamp}>
            {new Date(timeStamp).toDateString()}
            {", "}
            {new Date(timeStamp).toLocaleTimeString()}
          </div>
        )}
      </div>
    </div>
  );
}

export default StatusItemWrapper;
