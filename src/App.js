import React from "react";
import { Switch, Route } from "react-router-dom";

import styles from "./App.module.css";

import Home from "./Containers/Home";
import NavBar from "./Components/NavBar/index";

const App = () => {
  return (
    <div className={styles.Wrapper}>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
