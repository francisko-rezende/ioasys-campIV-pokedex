import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card/Card";
import Navigation from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
