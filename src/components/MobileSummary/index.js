import React from "react";
import Subtotal from "./Subtotal";
import Fees from "./Fees";
import Total from "./Total";
import { Card, CardContent } from "@mui/material";

const MobileSummary = ({ subtotal, setPrice }) => {
  const calculateFee = (subtotal) => {
    const calculation = (subtotal + 0.3) / 0.971;
    const fee = Math.abs(parseFloat(subtotal - calculation).toFixed(2));
    setPrice(subtotal - fee);
    return fee;
  };

  return (
    <div>
      <Card>
        <CardContent sx={{ padding: "0", width: "100%" }}>
          <Subtotal subtotal={subtotal} />
          <Fees fee={calculateFee(subtotal)} />
        </CardContent>
      </Card>
      <Card>
        <CardContent sx={{ padding: "0", width: "100%" }}>
          <Total total={subtotal - calculateFee(subtotal)} />
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileSummary;
