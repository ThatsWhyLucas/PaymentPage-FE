import React, { useState, useEffect } from "react";
import Subtotal from "./Subtotal";
import Fees from "./Fees";
import Total from "./Total";

const Summary = ({ subtotal, price, setPrice }) => {
  const [currentFee, setCurrentFee] = useState(0);

  useEffect(() => {
    const value = parseFloat(subtotal);
    const calculation = (value + 0.3) / 0.971;
    const fee = Math.abs(parseFloat(value - calculation).toFixed(1));
    setCurrentFee(fee);
    setPrice(value - fee);
  }, [subtotal]);

  return (
    <div className="summary_content">
      <Subtotal subtotal={subtotal} />
      <Fees fee={currentFee} />
      <Total total={price} />
    </div>
  );
};

export default Summary;
