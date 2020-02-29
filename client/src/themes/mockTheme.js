import "../../fonts";
import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {
  fonts: {
    primary: "Poppins",
    secondary: "sans-serif"
  },
  colors: {
    primary: "#47B485", //"#00d179"
    secondary: "#AEBEC5", //#a5b8c3
    tertiary: "#EDEDED", //#d9e1e6,
    background: "#fff"
  }
};

export default ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
