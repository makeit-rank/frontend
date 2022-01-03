import React from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./SerachMainComp.module.css";

import Footer from "./../Footer/index";
import ItemCard from "./../ItemCard/ItemCard";

function SerachMainComp({ searchResults }) {
  const [searchParams] = useSearchParams();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.MainContent}>
        <h4 className={styles.SearchStats}>
          <span className={styles.SearchStatsSmall}>{"Found "}</span>
          <span className={styles.SearchStatsBig}>{searchResults.length}</span>
          <span className={styles.SearchStatsSmall}>{" results for "}</span>
          <span className={styles.SearchStatsBig}>
            {`${searchParams.get("search")}`}
          </span>
        </h4>
        <div className={styles.SearchResults}>
          {searchResults.map((result) => (
            <div className={styles.SearchResult} key={result.id}>
              <ItemCard itemData={result} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SerachMainComp;
