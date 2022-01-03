import React from "react";
import { Link } from "react-router-dom";

import styles from "./HighlightsItemSec.module.css";

import { HOME_DATA } from "./../../../Utils/Constants/StaticData";

import ItemCard from "../../ItemCard";
function HighlightsItemSec({ title, items, redirectTo }) {
  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.Title}>{title}</h3>
      <div className={styles.LowerSec}>
        <Link to={redirectTo} className={styles.Link}>
          {HOME_DATA.viewAll}
        </Link>

        <div className={styles.Items}>
          {items?.map((item) => (
            <div className={styles.Item} key={item.id}>
              <ItemCard itemData={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HighlightsItemSec;
