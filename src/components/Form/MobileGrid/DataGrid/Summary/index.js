import React from "react";
import Subtotal from "./Subtotal";
import Fees from "./Fees";
import Total from "./Total";

const Summary = ({ subtotal, fee, total }) => {
  return (
    <div className="totals">
      <Subtotal subtotal={subtotal} />
      <Fees fee={fee} />
      <Total total={total} />
    </div>
  );
};

export default Summary;
