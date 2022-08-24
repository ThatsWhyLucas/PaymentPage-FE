import React from "react";
import Subtotal from "./Subtotal";
import Fees from "./Fees";
import Total from "./Total";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const MobileSummary = ({ subtotal, setPrice }) => {
  const calculateFee = (subtotal) => {
    const calculation = (subtotal + 0.3) / 0.971;
    const fee = Math.abs(parseFloat(subtotal - calculation).toFixed(2));
    setPrice(subtotal - fee);
    return fee;
  };

  const Header = () => {
    return (
      <Grid container spacing={"32px"}>
        <Grid item xs={8}>
          <Typography variant="h5" component="div" sx={{ padding: "16px", fontWeight: "700", fontSize: "18px" }}>
            Show Order Summary
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="h5"
            component="div"
            sx={{ padding: "20px 20px 0 0", fontWeight: "700", fontSize: "16px" }}
          >
            ${subtotal - calculateFee(subtotal)}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <div className="mobile_summary">
      <Card>
        <Header />

        <CardContent sx={{ width: "100%" }}>
          <Subtotal subtotal={subtotal} />
          <Fees fee={calculateFee(subtotal)} />
        </CardContent>
      </Card>
      <Card>
        <CardContent sx={{ width: "100%" }}>
          <Total total={subtotal - calculateFee(subtotal)} />
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileSummary;
