import React from "react";
import Subtotal from "./Subtotal";
import Fees from "./Fees";
import Total from "./Total";

const Summary = ({ subtotal, setPrice }) => {
  const calculateFee = (subtotal) => {
    const calculation = (subtotal + 0.3) / 0.971;
    const fee = Math.abs(parseFloat(subtotal - calculation).toFixed(2));
    setPrice(subtotal - fee);
    return fee;
  };

  return (
    <div>
      <Subtotal subtotal={subtotal} />
      <Fees fee={calculateFee(subtotal)} />
      <Total total={subtotal - calculateFee(subtotal)} />
    </div>
  );
};

export default Summary;
