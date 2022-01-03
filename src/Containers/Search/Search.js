import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./App.module.css";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("search"));
  }, [searchParams]);

  useEffect(() => {
    // setInterval(() => {
    //   setSearchParams({
    //     ...searchParams,
    //     rnd: Math.random(),
    //   });
    // }, 5000);
  }, []);

  return (
    <div>
      <h1>{searchParams}</h1>
    </div>
  );
}

export default Search;
