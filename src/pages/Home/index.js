import React from "react";
import { Container } from "@mui/material";
import DetailsCard from "../../components/DetailsCard";
import Form from "../../components/Form";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Satoshi"],
  },
});

const Home = () => {
  const vectors = () => {
    return (
      <div className="vector_container">
        <div className="vectorTwo" />
        <div className="vectorEight" />
        <div className="vectorTen" />
        <div className="vectorSeven" />
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="false" sx={{ overflowX: "hidden", fontFamily: "Satoshi", zIndex: "2" }}>
        <DetailsCard />
        <Form />
        {vectors()}
      </Container>
    </ThemeProvider>
  );
};

export default Home;
