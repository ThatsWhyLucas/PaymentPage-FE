import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import dollar from "../../../public/img/dollar-circle.svg";

function Amount({ subtotal, setSubtotal }) {
  return (
    <TextField
      value={subtotal}
      id="amount"
      margin="dense"
      type={"float"}
      onChange={({ target: { value } }) => setSubtotal(value)}
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
