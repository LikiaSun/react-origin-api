import React from "react";
import logo from "./logo.svg";
import AppStyle from "./App.module.css";

function App() {
  return (
    <div className={AppStyle.App}>
      <header className={AppStyle.App_header}>
        <img src={logo} className={AppStyle.App_logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={AppStyle.App_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
