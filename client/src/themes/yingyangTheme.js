import "../fonts";
import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {
  fonts: {
    primary: "Poppins",
    secondary: "sans-serif"
  },
  colors: {
    primary: "#000",
    secondary: "#F8F8F8",
    background: "#fff"
  }
};

export default ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
