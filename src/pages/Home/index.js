import React from "react";
import { Container } from "@mui/material";
import DetailsCard from "../../components/DetailsCard";

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
    <Container maxWidth="false" sx={{ fontFamily: "Satoshi" }}>
      <DetailsCard />
      {vectors()}
    </Container>
  );
};

export default Home;
