import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import Navigation from "./routes";
import store from "./store";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
