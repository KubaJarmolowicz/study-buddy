import React from "react";
import ReactDOM from "react-dom";
import "assets/fonts/fonts.css";
import Root from "views/Root";
import { worker } from "mocks/browser";
import AppProviders from "providers/AppProviders";

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
