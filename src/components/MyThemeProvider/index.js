import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7800",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Satoshi"],
  },
});

const MyThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
