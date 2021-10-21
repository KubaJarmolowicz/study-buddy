import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuth";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
