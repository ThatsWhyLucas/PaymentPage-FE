import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import dollar from "../../../public/img/dollar-circle.svg";

function Amount({ subtotal, setSubtotal }) {
  const handlePrice = (subtotal) => {
    if (subtotal === "") return setSubtotal(1);
    const value = parseFloat(subtotal);
    if (value === "" || value <= 1) return setSubtotal(1);
    if (value > 5000) return setSubtotal(5000);
    return setSubtotal(value);
  };
  return (
    <TextField
      value={subtotal}
      id="amount"
      margin="dense"
      type={"float"}
      onChange={({ target: { value } }) => handlePrice(value)}
      fullWidth
      variant="outlined"
      placeholder="Amount"
      className="amount_input"
      InputLabelProps={{
        shrink: false,
      }}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
    />
  );
}

export default Amount;
