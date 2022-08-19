import React from "react";
import { Container } from "@mui/material";
import DetailsCard from "../../components/DetailsCard";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Satoshi"],
  },
});

const Home = () => {
  const vectors = () => {
    return (
      <div>
        <div className="vectorTwo" />
        <div className="vectorEight" />
        <div className="vectorTen" />
        <div className="vectorSeven" />
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="false" sx={{ fontFamily: "Satoshi" }}>
        <DetailsCard />
        {vectors()}
      </Container>
    </ThemeProvider>
  );
};

export default Home;
