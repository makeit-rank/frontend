import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./Search.module.css";

import SerachMainComp from "../../Components/SerachMainComp";
import Preloader from "../../Components/Preloader";
import Footer from "../../Components/Footer";

function Search() {
  const [searchParams] = useSearchParams();

  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    setSearchResults(null);
    console.log(searchParams.get("search"));
    // Get Search Results
    setTimeout(() => {
      getSearchResults();
    }, 1000);
  }, [searchParams]);

  const getSearchResults = async () => {
    setSearchResults(
      Array(15)
        .fill({})
        .map((_, index) => ({
          id: index,
          title: `${searchParams.get("search")} Printed Men Hooded Neck Da..`,
          seller: `Blive  enterprise ${index + 1}`,
          price: Math.floor(Math.random() * 500) + 500,
          rating:
            Math.floor(Math.random() * 3) +
            1 +
            Math.floor(Math.random() * 10) / 10,
          noOfRatings: Math.floor(Math.random() * 100) + 100,
          image: `https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
        }))
    );
  };

  return (
    <div className={styles.Wrapper}>
      {searchResults ? (
        <SerachMainComp searchResults={searchResults} />
      ) : (
        <Preloader />
      )}
      <Footer />
    </div>
  );
}

export default Search;
