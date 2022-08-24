import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7800",
      contrastText: "#fff",
    },
    error: {
      main: '#EA344C'
    }
  },
  typography: {
    fontFamily: ["Satoshi"],
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderWidth: '2px',
          borderRadius: '12px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root:{
          borderRadius: '12px',
        },
        outlined:{
          borderWidth: '2px'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          whiteSpace: 'break-spaces',
          fontWeight: '700',
          fontSize: '14px'
        }
      }
    },
  }
});

const MyThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
