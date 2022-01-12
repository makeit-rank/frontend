import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./Search.module.css";

import SerachMainComp from "../../Components/SerachMainComp";
import Preloader from "../../Components/Preloader";
import Footer from "../../Components/Footer";
import { searchProducts } from "./../../Services/product.service";
import notify from "./../../Utils/Helpers/notifyToast";

function Search() {
  const [searchParams] = useSearchParams();

  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    setSearchResults(null);
    console.log(searchParams.get("search"));
    // Get Search Results
    getSearchResults();
  }, [searchParams]);

  const getSearchResults = async () => {
    try {
      const searchResultsLocale = await searchProducts(
        searchParams.get("search")
      );
      setSearchResults(searchResultsLocale);
    } catch (err) {
      notify(err.response.data, "error");
      console.log(err);
    }
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
